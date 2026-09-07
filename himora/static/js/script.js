document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Quiet reveal for the about section ---------- */
const revealTargets = document.querySelectorAll('.about-text, .about-figure');
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealTargets.forEach(el => revealObserver.observe(el));

/* ---------- Animated stat counters ---------- */
const statEls = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseFloat(el.dataset.countTo);
  const isDecimal = target % 1 !== 0;
  if (prefersReducedMotion) {
    el.textContent = isDecimal ? target.toFixed(1) : target;
    return;
  }
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statEls.forEach(el => statsObserver.observe(el));

/* ---------- Testimonials carousel ---------- */
const slides = document.querySelectorAll('.testi-slide');
const dots = document.querySelectorAll('.testi-dot');
let testiIndex = 0;
let testiTimer;

function showTesti(i) {
  slides.forEach(s => s.classList.remove('is-active'));
  dots.forEach(d => d.classList.remove('is-active'));
  slides[i].classList.add('is-active');
  dots[i].classList.add('is-active');
  testiIndex = i;
}

function nextTesti() {
  showTesti((testiIndex + 1) % slides.length);
}

if (slides.length) {
  if (!prefersReducedMotion) {
    testiTimer = setInterval(nextTesti, 5000);
  }
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showTesti(i);
      clearInterval(testiTimer);
      if (!prefersReducedMotion) testiTimer = setInterval(nextTesti, 5000);
    });
  });
}

/* ---------- Sticky "book now" bar ---------- */
const stickyBar = document.getElementById('stickyBar');
const hero = document.querySelector('.hero');

if (stickyBar && hero) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      stickyBar.classList.toggle('is-visible', !entry.isIntersecting);
    });
  }, { threshold: 0 });
  heroObserver.observe(hero);
}

/* ---------- Jeep travelling between destination stops, tied to scroll ---------- */
const journeySection = document.querySelector('.journey');
const roadPath = document.getElementById('roadPath');
const vehicle = document.getElementById('journeyVehicle');
const stopsLayer = document.getElementById('journeyStops');
const journeyCards = document.querySelectorAll('.journey-card');
const progressDots = document.querySelectorAll('.journey-progress-dot');

if (journeySection && roadPath && vehicle && journeyCards.length) {
  const pathLength = roadPath.getTotalLength();
  const viewBoxW = 1440;
  const viewBoxH = 720;
  const stopCount = journeyCards.length;
  // evenly spaced fractions along the road where the jeep "arrives" at a destination
  const stopFractions = Array.from({ length: stopCount }, (_, i) => (i + 0.5) / stopCount);
  let activeStop = 0;
  let vTicking = false;

  function toScreen(fraction) {
    const point = roadPath.getPointAtLength(fraction * pathLength);
    return { left: (point.x / viewBoxW) * 100, top: (point.y / viewBoxH) * 100, point };
  }

  // place static dots for each destination stop, once
  if (stopsLayer) {
    stopFractions.forEach((f, i) => {
      const { left, top } = toScreen(f);
      const dot = document.createElement('span');
      dot.className = 'road-stop';
      dot.dataset.index = i;
      dot.style.left = left + '%';
      dot.style.top = top + '%';
      stopsLayer.appendChild(dot);
    });
  }
  const roadStopEls = document.querySelectorAll('.road-stop');

  function setActiveStop(i) {
    if (i === activeStop && journeyCards[i].classList.contains('is-active')) return;
    activeStop = i;
    journeyCards.forEach(c => c.classList.toggle('is-active', Number(c.dataset.stop) === i));
    progressDots.forEach(d => d.classList.toggle('is-active', Number(d.dataset.dot) === i));
    roadStopEls.forEach(d => d.classList.toggle('is-active', Number(d.dataset.index) === i));
  }

  function placeOnRoad(progress) {
    const clamped = Math.min(Math.max(progress, 0), 1);
    const point = roadPath.getPointAtLength(clamped * pathLength);
    const ahead = roadPath.getPointAtLength(Math.min(clamped * pathLength + 4, pathLength));
    const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI);

    const leftPct = (point.x / viewBoxW) * 100;
    const topPct = (point.y / viewBoxH) * 100;
    const scale = 0.55 + (point.y / viewBoxH) * 0.85;

    vehicle.style.left = leftPct + '%';
    vehicle.style.top = topPct + '%';
    vehicle.style.transform = `translate(-50%,-50%) rotate(${angle}deg) scale(${scale})`;

    const nearestStop = Math.min(stopCount - 1, Math.floor(clamped * stopCount));
    setActiveStop(nearestStop);
  }

  function updateJourney() {
    const rect = journeySection.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const progress = scrollable > 0 ? -rect.top / scrollable : 0;
    placeOnRoad(progress);
  }

  if (prefersReducedMotion) {
    placeOnRoad(stopFractions[0]);
  } else {
    window.addEventListener('scroll', () => {
      if (vTicking) return;
      vTicking = true;
      requestAnimationFrame(() => {
        updateJourney();
        vTicking = false;
      });
    }, { passive: true });
    window.addEventListener('resize', updateJourney);
    updateJourney();
  }
}

/* ---------- Parallax mountain layers in hero ---------- */
const back = document.querySelector('.peaks-back');
const mid = document.querySelector('.peaks-mid');
const sun = document.querySelector('.sun');

if (!prefersReducedMotion && back && mid && sun) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      back.style.transform = `translateY(${y * 0.12}px)`;
      mid.style.transform = `translateY(${y * 0.22}px)`;
      sun.style.transform = `translate(-50%, calc(-50% + ${y * 0.15}px))`;
      ticking = false;
    });
  }, { passive: true });
}

/* ---------- Magnetic WhatsApp button (pointer devices only) ---------- */
const fab = document.getElementById('fabWhatsapp');
const canHover = window.matchMedia('(hover: hover)').matches;

if (fab && canHover && !prefersReducedMotion) {
  const radius = 70;
  document.addEventListener('mousemove', (e) => {
    const rect = fab.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);

    if (dist < radius) {
      const pull = (1 - dist / radius) * 0.4;
      fab.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
    } else {
      fab.style.transform = 'translate(0, 0)';
    }
  });
}