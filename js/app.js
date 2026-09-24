// ==========================================================
// HIMORA TRAVELS PRO — CORE APPLICATION CONTROLLER
// High conversion, multi-currency, interactive modals & telemetry
// ==========================================================

window.currentCurrency = 'INR';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderPassStatus();
  renderWeatherStations();
  renderPackages('all');
  renderFamousSites();
  renderMountainVibes('all');
  renderFleet();
  renderTestimonials();
  renderFaqs();
  setupCurrencySelector();
  setupPackageFilters();
  setupVibeFilters();
  setupModalHandlers();
  setupScrollEffects();
  setupCounters();
  setupCabFareCalculator();
  setupThemeToggle();
  
  if (window.initValleyMap) {
    window.initValleyMap();
  }
  if (window.HimoraPlanner) {
    window.HimoraPlanner.init();
  }

  // Soundscape toggle
  const soundBtn = document.getElementById('soundscapeToggle');
  if (soundBtn && window.soundscape) {
    soundBtn.addEventListener('click', () => {
      window.soundscape.toggle();
    });
  }

  // Floating CTA WhatsApp
  document.querySelectorAll('.js-whatsapp-direct').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.dataset.msg || "Hi Himora Travels! I would like to plan an authentic Himalayan trip.";
      window.open(`https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${encodeURIComponent(customMsg)}`, '_blank');
    });
  });

  // Year in footer
  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
}

// ----------------------------------------------------------------
// 1. Currency Conversion & Formatting
// ----------------------------------------------------------------
function formatPrice(amountINR) {
  const info = HIMORA_DATA.currencies[window.currentCurrency] || HIMORA_DATA.currencies.INR;
  const converted = Math.round(amountINR * info.rate);
  return `${info.symbol}${converted.toLocaleString()} <span class="curr-code">${window.currentCurrency}</span>`;
}

function setupCurrencySelector() {
  const selector = document.getElementById('currencySelector');
  if (!selector) return;

  selector.value = window.currentCurrency;
  selector.addEventListener('change', (e) => {
    window.currentCurrency = e.target.value;
    // Re-render components with pricing
    renderPackages(window.currentFilter || 'all');
    if (window.HimoraPlanner) window.HimoraPlanner.recalculate();
    updateTaxiRouteFares();
    
    // Toast notification
    showToast(`Currency changed to ${window.currentCurrency}`);
  });
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const icon = document.getElementById('themeToggleIcon');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('himora_theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
    if (icon) icon.textContent = '☀️';
  } else {
    document.body.classList.remove('theme-dark');
    if (icon) icon.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    localStorage.setItem('himora_theme', isDark ? 'dark' : 'light');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    showToast(isDark ? "Dark theme activated" : "Alpine light theme activated");
  });
}

// ----------------------------------------------------------------
// 2. Telemetry: Mountain Passes & Weather
// ----------------------------------------------------------------
function renderPassStatus() {
  const container = document.getElementById('passStatusTicker');
  if (!container) return;

  const html = HIMORA_DATA.mountainPasses.map(p => `
    <div class="pass-chip">
      <span class="pass-indicator ${p.status.includes('OPEN') ? 'is-open' : 'is-caution'}"></span>
      <span class="pass-name">${p.name} (${p.altitude})</span>
      <span class="pass-badge">${p.status}</span>
      <span class="pass-note">${p.condition}</span>
    </div>
  `).join('');

  // Duplicate for infinite continuous ticker scroll
  container.innerHTML = html + html;
}

function renderWeatherStations() {
  const container = document.getElementById('weatherGrid');
  if (!container) return;

  container.innerHTML = HIMORA_DATA.weatherStations.map(w => `
    <div class="weather-station-card">
      <div class="weather-icon">${w.icon}</div>
      <div class="weather-meta">
        <span class="weather-city">${w.city}</span>
        <span class="weather-alt">${w.altitude}</span>
      </div>
      <div class="weather-temp">${w.temp}</div>
      <div class="weather-cond">${w.condition}</div>
    </div>
  `).join('');
}

// ----------------------------------------------------------------
// 3. Packages Rendering & Category Tabs
// ----------------------------------------------------------------
window.currentFilter = 'all';

function renderPackages(category = 'all') {
  window.currentFilter = category;
  const container = document.getElementById('packagesGrid');
  if (!container) return;

  const filtered = category === 'all' 
    ? HIMORA_DATA.packages 
    : HIMORA_DATA.packages.filter(p => p.category === category);

  container.innerHTML = filtered.map(pkg => `
    <article class="package-card" data-id="${pkg.id}">
      <div class="package-card-media">
        <img src="${pkg.heroImage}" alt="${pkg.title}" loading="lazy" decoding="async">
        <span class="package-card-badge">${pkg.badge}</span>
        <span class="package-card-duration">${pkg.duration}</span>
        <div class="package-card-altitude">⌖ Max: ${pkg.maxAltitude}</div>
      </div>
      <div class="package-card-body">
        <p class="package-card-vibe">${pkg.vibeTag}</p>
        <h3 class="package-card-title">${pkg.title}</h3>
        <p class="package-card-tagline">${pkg.tagline}</p>
        
        <div class="package-highlights-mini">
          <span>✦ ${pkg.highlights[0]}</span>
          <span>✦ ${pkg.highlights[1]}</span>
        </div>

        <div class="package-card-foot">
          <div class="package-card-pricing">
            <span class="price-from">Starting from</span>
            <span class="price-val">${formatPrice(pkg.basePriceINR)}</span>
            <span class="price-sub">per person / verified stays & cab</span>
          </div>
          <div class="package-card-actions">
            <button class="btn btn-outline" onclick="openPackageModal('${pkg.id}')">View Day-by-Day</button>
            <button class="btn btn-emerald" onclick="bookPackageWhatsApp('${pkg.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.2-2.8-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4L9.3 8.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.8 2.8 4.5 3.8 2.1.8 2.5.6 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
              Quick Book
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function setupPackageFilters() {
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderPackages(btn.dataset.category);
    });
  });
}

// ----------------------------------------------------------------
// 4. Detailed Itinerary Modal
// ----------------------------------------------------------------
function openPackageModal(packageId) {
  const pkg = HIMORA_DATA.packages.find(p => p.id === packageId);
  if (!pkg) return;

  const modal = document.getElementById('itineraryModal');
  const modalContent = document.getElementById('modalDynamicContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-hero" style="background-image: linear-gradient(180deg, rgba(7,26,43,0.3) 0%, #071a2b 100%), url('${pkg.heroImage}')">
      <div class="modal-hero-content">
        <span class="modal-badge">${pkg.badge} • ${pkg.vibeTag}</span>
        <h2>${pkg.title}</h2>
        <div class="modal-meta-bar">
          <span>⏱️ ${pkg.duration}</span>
          <span>⌖ Altitude: ${pkg.maxAltitude}</span>
          <span>⚡ Difficulty: ${pkg.difficulty}</span>
          <span>🗓️ Best: ${pkg.bestSeason}</span>
        </div>
        <div class="modal-hero-price">
          Starting from <strong>${formatPrice(pkg.basePriceINR)}</strong> / person
        </div>
      </div>
    </div>

    <div class="modal-body-wrapper">
      <div class="modal-main-column">
        <h3 class="modal-section-title">🗺️ Detailed Day-by-Day Itinerary</h3>
        <div class="itinerary-timeline">
          ${pkg.itinerary.map(item => `
            <div class="timeline-step">
              <div class="step-marker">Day ${item.day}</div>
              <div class="step-info">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <h3 class="modal-section-title" style="margin-top:2.5rem;">✨ Highlights of this Journey</h3>
        <ul class="modal-highlights-list">
          ${pkg.highlights.map(h => `<li><span>✦</span> ${h}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-side-column">
        <div class="inclusions-card">
          <h4>✅ What is Included:</h4>
          <ul>
            ${pkg.inclusions.map(inc => `<li>✓ ${inc}</li>`).join('')}
          </ul>
          
          <h4 style="margin-top:1.5rem;">❌ What is Excluded:</h4>
          <ul class="exclusions-list">
            ${pkg.exclusions.map(exc => `<li>✕ ${exc}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-booking-box">
          <p class="booking-note">💬 <strong>Direct Local Native Planning</strong><br>Speak directly with our Shimla expedition team. No middlemen, no call centres.</p>
          <button class="btn btn-emerald btn-block" onclick="bookPackageWhatsApp('${pkg.id}')">
            Reserve on WhatsApp
          </button>
          <button class="btn btn-outline btn-block" onclick="openContactWithSubject('Inquiry for ${pkg.title}')" style="margin-top:0.6rem;">
            Send Email Inquiry
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closePackageModal() {
  const modal = document.getElementById('itineraryModal');
  if (modal) {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

function setupModalHandlers() {
  const modal = document.getElementById('itineraryModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closePackageModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePackageModal();
    });
  }

  // Valley details modal
  const valleyModal = document.getElementById('valleyDetailModal');
  const valleyCloseBtn = document.getElementById('valleyModalCloseBtn');
  if (valleyCloseBtn) valleyCloseBtn.addEventListener('click', closeValleyModal);
  if (valleyModal) {
    valleyModal.addEventListener('click', (e) => {
      if (e.target === valleyModal) closeValleyModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePackageModal();
      closeValleyModal();
    }
  });
}

function bookPackageWhatsApp(packageId) {
  const pkg = HIMORA_DATA.packages.find(p => p.id === packageId);
  if (!pkg) return;

  const info = HIMORA_DATA.currencies[window.currentCurrency];
  const converted = Math.round(pkg.basePriceINR * info.rate);
  const priceText = `${info.symbol}${converted.toLocaleString()} ${window.currentCurrency}`;

  const text = `🏔️ *Trip Inquiry — Himora Travels*
Hello team! I am interested in booking the *${pkg.title}* (${pkg.duration}).
• Starting from: ${priceText} per person
• Max Altitude: ${pkg.maxAltitude}

Could you please share date availability, custom hotel options, and booking instructions? Thanks!`;

  window.open(`https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
}

// ----------------------------------------------------------------
// 4B. Real Famous Sites & Activities Directory (Compact & Clickable)
// ----------------------------------------------------------------
function renderFamousSites() {
  const container = document.getElementById('famousSitesContainer');
  if (!container) return;

  container.innerHTML = HIMORA_DATA.famousSites.map(loc => `
    <div class="destination-card" onclick="openValleyModal('${loc.id}')">
      <div class="dest-card-media">
        <img src="${loc.coverImage}" alt="${loc.location}" loading="lazy" decoding="async">
        <span class="dest-alt-badge">⌖ ${loc.altitude}</span>
        <span class="dest-sites-badge">${loc.items.length} Sites</span>
      </div>
      <div class="dest-card-body">
        <span class="dest-region-tag">Himalayan Valley</span>
        <h3 class="dest-card-title">${loc.location}</h3>
        <p class="dest-card-tagline">${loc.tagline}</p>
        
        <div class="dest-preview-sites">
          ${loc.items.map(item => `<span>✦ ${item.name.split('&')[0].trim()}</span>`).join('')}
        </div>

        <div class="dest-card-foot">
          <span class="dest-drive-time">🚗 ${loc.driveTime}</span>
          <span class="dest-cta-link">Explore Sites ➔</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openValleyModal(valleyId) {
  const loc = HIMORA_DATA.famousSites.find(l => l.id === valleyId);
  if (!loc) return;

  const modal = document.getElementById('valleyDetailModal');
  const content = document.getElementById('valleyModalDynamicContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-hero" style="background-image: linear-gradient(180deg, rgba(7,26,43,0.3) 0%, #071a2b 100%), url('${loc.coverImage}')">
      <div class="modal-hero-content">
        <span class="modal-badge">📍 ${loc.location}</span>
        <h2>${loc.location}</h2>
        <p style="color:#e2e8f0; font-size:1.05rem; margin-top:0.4rem;">${loc.tagline}</p>
        <div class="modal-meta-bar" style="margin-top:1.2rem;">
          <span>⌖ Altitude: ${loc.altitude}</span>
          <span>🚗 Drive: ${loc.driveTime}</span>
          <span>🗓️ Best Season: ${loc.bestSeason}</span>
        </div>
      </div>
    </div>

    <div class="modal-body-wrapper" style="grid-template-columns: 1fr;">
      <div class="valley-food-banner" style="background:#f0f7fd; border:1px solid #d0e5f7; border-radius:var(--radius-md); padding:1rem 1.4rem; display:flex; align-items:center; gap:0.8rem; margin-bottom:1.5rem;">
        <span style="font-size:1.6rem;">🍲</span>
        <div>
          <strong style="color:var(--text-main); font-size:0.95rem;">Must-Try Local Cuisine:</strong>
          <span style="color:var(--text-muted); font-size:0.9rem; margin-left:0.4rem;">${loc.localFood}</span>
        </div>
      </div>

      <h3 class="modal-section-title">📸 Iconic Sites & Landmarks in ${loc.location}</h3>
      <div class="valley-sites-modal-grid">
        ${loc.items.map(site => `
          <div class="site-modal-card">
            <div class="site-modal-media">
              <img src="${site.image}" alt="${site.name}" loading="lazy" decoding="async">
              <span class="site-type-badge">${site.type}</span>
              <span class="site-altitude-badge">⌖ ${site.altitude}</span>
            </div>
            <div class="site-modal-body">
              <h4>${site.name}</h4>
              <p>${site.desc}</p>
              <div class="site-activity-tag">
                <span>🎯 <strong>Must Do:</strong> ${site.activity}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="valley-modal-footer-actions">
        <button class="btn btn-solid" onclick="openPackageModal('${loc.packageId}')">
          View ${loc.location} Tour Package ➔
        </button>
        <button class="btn btn-emerald" onclick="inquireValleyWhatsApp('${loc.location}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.2-2.8-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4L9.3 8.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.8 2.8 4.5 3.8 2.1.8 2.5.6 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
          Inquire on WhatsApp
        </button>
      </div>
    </div>
  `;

  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeValleyModal() {
  const modal = document.getElementById('valleyDetailModal');
  if (modal) {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

function inquireValleyWhatsApp(locationName) {
  const msg = `🏔️ *Valley Travel Inquiry — Himora Travels*
Hello team! I want to visit *${locationName}* and explore its famous sites and activities.
Please recommend the best itinerary, cab options, and boutique stays.`;
  window.open(`https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

function filterByLocation(locName) {
  const pkgSection = document.getElementById('packages');
  if (pkgSection) {
    pkgSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ----------------------------------------------------------------
// 4C. Mountain Aesthetic & Vibes (Snow, Cozy Rooms, Bonfires & Parties)
// ----------------------------------------------------------------
window.currentVibeFilter = 'all';

function renderMountainVibes(category = 'all') {
  window.currentVibeFilter = category;
  const container = document.getElementById('mountainVibesGrid');
  if (!container) return;

  const filtered = category === 'all'
    ? HIMORA_DATA.mountainVibes
    : HIMORA_DATA.mountainVibes.filter(v => v.category === category);

  container.innerHTML = filtered.map(vibe => `
    <div class="vibe-card">
      <div class="vibe-card-media">
        <img src="${vibe.image}" alt="${vibe.title}" loading="lazy">
        <span class="vibe-tag-badge">${vibe.tag}</span>
      </div>
      <div class="vibe-card-body">
        <h4>${vibe.title}</h4>
        <p>${vibe.desc}</p>
        <button class="btn btn-outline btn-sm" onclick="bookVibeExperience('${vibe.title}')" style="margin-top:0.8rem; align-self:flex-start;">
          Experience This ➔
        </button>
      </div>
    </div>
  `).join('');
}

function setupVibeFilters() {
  document.querySelectorAll('.vibe-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vibe-tab-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderMountainVibes(btn.dataset.vibe);
    });
  });
}

function bookVibeExperience(vibeTitle) {
  const msg = `🏔️ *Mountain Experience Inquiry — Himora Travels*
Hello team! I would love to experience: *${vibeTitle}*. 
Please recommend hotels, itineraries, or private tour options for this vibe.`;
  window.open(`https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ----------------------------------------------------------------
// 5. Cab & Fleet System (Starting with Alto)
// ----------------------------------------------------------------
function renderFleet() {
  const container = document.getElementById('fleetGrid');
  if (!container) return;

  container.innerHTML = HIMORA_DATA.cabs.map(cab => `
    <div class="cab-card">
      <div class="cab-card-img">
        <img src="${cab.image}" alt="${cab.name}" loading="lazy" decoding="async">
        <span class="cab-badge">${cab.badge}</span>
      </div>
      <div class="cab-card-body">
        <h4>${cab.name}</h4>
        <div class="cab-specs">
          <span>👥 ${cab.seats}</span>
          <span>🧳 ${cab.luggage}</span>
        </div>
        <p class="cab-suited"><strong>Ideal For:</strong> ${cab.suitedFor}</p>
        <div class="cab-features-list">
          ${cab.features.map(f => `<span class="cab-feat-tag">✓ ${f}</span>`).join('')}
        </div>
        <div class="cab-foot">
          <div class="cab-rate">
            <span>from ₹${cab.perKmRate}/km</span>
            <small>or ${formatPrice(cab.dailyRateINR)}/day</small>
          </div>
          <button class="btn btn-emerald btn-sm" onclick="bookCabWhatsApp('${cab.name}')">Book Cab</button>
        </div>
      </div>
    </div>
  `).join('');

  updateTaxiRouteFares();
}

function setupCabFareCalculator() {
  const fromSelect = document.getElementById('calcPickup');
  const toSelect = document.getElementById('calcDrop');
  const carSelect = document.getElementById('calcVehicle');
  const resultEl = document.getElementById('calcPriceDisplay');
  const timeEl = document.getElementById('calcTimeDisplay');

  if (!fromSelect || !toSelect || !carSelect || !resultEl) return;

  function recalculate() {
    const from = fromSelect.value;
    const to = toSelect.value;
    const car = carSelect.value;

    const matched = HIMORA_DATA.taxiRoutes.find(r => r.from.includes(from) && r.to.includes(to));
    if (matched) {
      let priceINR = 0;
      if (car === 'alto') priceINR = matched.altoINR || Math.round(matched.sedanINR * 0.8);
      else if (car === 'sedan') priceINR = matched.sedanINR;
      else if (car === 'innova') priceINR = matched.innovaINR;
      else priceINR = matched.tharINR || Math.round(matched.innovaINR * 1.25);

      if (priceINR > 0) {
        resultEl.innerHTML = formatPrice(priceINR);
        timeEl.textContent = `Estimated duration: ${matched.distance}`;
        return;
      }
    }
    resultEl.textContent = "Custom Quote on WhatsApp";
    timeEl.textContent = "Multi-day mountain expedition route";
  }

  fromSelect.addEventListener('change', recalculate);
  toSelect.addEventListener('change', recalculate);
  carSelect.addEventListener('change', recalculate);
  recalculate();
}

function updateTaxiRouteFares() {
  const tableBody = document.getElementById('routeFaresTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = HIMORA_DATA.taxiRoutes.map(r => `
    <tr>
      <td><strong>${r.from}</strong> ➔ ${r.to}</td>
      <td>${r.distance}</td>
      <td><span class="badge-alto">Alto:</span> ${r.altoINR > 0 ? formatPrice(r.altoINR) : '4x4 Only'}</td>
      <td>${r.sedanINR > 0 ? formatPrice(r.sedanINR) : '4x4 Only'}</td>
      <td><strong>${formatPrice(r.innovaINR)}</strong></td>
      <td>
        <button class="btn btn-emerald btn-sm" onclick="bookCabRouteWhatsApp('${r.from}', '${r.to}')">Book Taxi</button>
      </td>
    </tr>
  `).join('');
}

function bookCabWhatsApp(cabName) {
  const msg = `🚕 *Himachal Cab Booking — Himora Travels*
Hello! I would like to book a private cab: *${cabName}* with an experienced hill driver.
Please let me know availability and route details.`;
  window.open(`https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

function bookCabRouteWhatsApp(from, to) {
  const msg = `🚕 *Route Taxi Booking — Himora Travels*
Hello! I would like to book a private taxi from *${from}* to *${to}*.
Please confirm pickup timing and chauffeur details.`;
  window.open(`https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ----------------------------------------------------------------
// 6. Testimonials & Social Proof
// ----------------------------------------------------------------
let currentTestiIdx = 0;

function renderTestimonials() {
  const container = document.getElementById('testiCardsContainer');
  if (!container) return;

  container.innerHTML = HIMORA_DATA.testimonials.map((t, idx) => `
    <div class="testi-card ${idx === 0 ? 'is-active' : ''}" data-idx="${idx}">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">&ldquo;${t.quote}&rdquo;</p>
      <div class="testi-author">
        <img src="${t.avatar}" alt="${t.author}" class="testi-avatar" loading="lazy">
        <div>
          <span class="testi-author-name">${t.author}</span>
          <span class="testi-author-origin">${t.origin}</span>
          <span class="testi-trip-tag">🏔️ ${t.trip}</span>
        </div>
      </div>
    </div>
  `).join('');

  const dotsContainer = document.getElementById('testiDotsContainer');
  if (dotsContainer) {
    dotsContainer.innerHTML = HIMORA_DATA.testimonials.map((_, idx) => `
      <button class="testi-dot-btn ${idx === 0 ? 'is-active' : ''}" onclick="showTestimonial(${idx})" aria-label="Slide ${idx+1}"></button>
    `).join('');
  }
}

function showTestimonial(index) {
  currentTestiIdx = index;
  document.querySelectorAll('.testi-card').forEach((card, idx) => {
    card.classList.toggle('is-active', idx === index);
  });
  document.querySelectorAll('.testi-dot-btn').forEach((dot, idx) => {
    dot.classList.toggle('is-active', idx === index);
  });
}

// ----------------------------------------------------------------
// 7. FAQs Accordion
// ----------------------------------------------------------------
function renderFaqs() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  container.innerHTML = HIMORA_DATA.faqs.map((f, idx) => `
    <div class="faq-item ${idx === 0 ? 'is-open' : ''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${f.q}</span>
        <span class="faq-chevron">+</span>
      </button>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle('is-open');
  const chevron = btn.querySelector('.faq-chevron');
  if (chevron) {
    chevron.textContent = item.classList.contains('is-open') ? '−' : '+';
  }
}

// ----------------------------------------------------------------
// 8. Visual Effects, Counters & Toast
// ----------------------------------------------------------------
function setupScrollEffects() {
  // Sticky nav blur & background reveal
  const header = document.querySelector('.site-header');
  const stickyBar = document.getElementById('mobileStickyBar');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (header) {
      header.classList.toggle('is-scrolled', scrolled > 60);
    }
    if (stickyBar) {
      stickyBar.classList.toggle('is-visible', scrolled > 500);
    }
  }, { passive: true });
}

function setupCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const isDecimal = target % 1 !== 0;
        const duration = 1600;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const current = target * (1 - Math.pow(1 - progress, 3));
          el.textContent = isDecimal ? current.toFixed(2) : Math.round(current).toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function showToast(msg) {
  let toast = document.getElementById('himoraToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'himoraToast';
    toast.className = 'himora-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

function openContactWithSubject(subject) {
  closePackageModal();
  const contactSect = document.getElementById('contact');
  if (contactSect) {
    contactSect.scrollIntoView({ behavior: 'smooth' });
    const msgBox = document.getElementById('contactFormMessage');
    if (msgBox) {
      msgBox.value = `Hello Himora team, I would like to inquire about: ${subject}. Please let me know the details.`;
      msgBox.focus();
    }
  }
}

// Expose handlers to window
window.openPackageModal = openPackageModal;
window.closePackageModal = closePackageModal;
window.bookPackageWhatsApp = bookPackageWhatsApp;
window.bookCabWhatsApp = bookCabWhatsApp;
window.bookCabRouteWhatsApp = bookCabRouteWhatsApp;
window.showTestimonial = showTestimonial;
window.toggleFaq = toggleFaq;
window.openContactWithSubject = openContactWithSubject;
window.filterByLocation = filterByLocation;
window.bookVibeExperience = bookVibeExperience;
window.openValleyModal = openValleyModal;
window.closeValleyModal = closeValleyModal;
window.inquireValleyWhatsApp = inquireValleyWhatsApp;

