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

/* ---------- Smooth independent journey video + scroll-controlled location cards ---------- */
const journeySection = document.querySelector('.journey');
const journeyVideo = document.getElementById('journeyVideo');
const journeyCards = document.querySelectorAll('.journey-card');

if (journeySection && journeyVideo && journeyCards.length) {
  const stopCount = Math.min(journeyCards.length, 4);
  journeySection.style.setProperty('--journey-stops', stopCount);
  let active = 0;
  let ticking = false;

  function setActive(index) {
    index = Math.max(0, Math.min(stopCount - 1, index));
    if (index === active && journeyCards[active]?.classList.contains('is-active')) return;
    active = index;
    journeyCards.forEach((card, i) => card.classList.toggle('is-active', i === index));
  }

  function updateCards() {
    const rect = journeySection.getBoundingClientRect();
    const total = Math.max(1, journeySection.offsetHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(0.999999, -rect.top / total));
    setActive(Math.min(stopCount - 1, Math.floor(progress * stopCount)));
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; updateCards(); });
  }

  // Let the browser handle video playback natively. No currentTime seeking on scroll.
  journeyVideo.muted = true;
  journeyVideo.setAttribute('muted', '');
  journeyVideo.playsInline = true;
  journeyVideo.setAttribute('playsinline', '');
  journeyVideo.loop = true;
  journeyVideo.preload = 'auto';

  const start = () => {
    const p = journeyVideo.play();
    if (p) p.catch(() => {});
  };
  if (journeyVideo.readyState >= 2) start();
  else journeyVideo.addEventListener('canplay', start, { once: true });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateCards);
  updateCards();
}

