/* =============================================
   MAIN JS — Umesh Kumar Portfolio
   Neural Gradient Design System
   ============================================= */

/* ============================================
   1. DARK / LIGHT MODE TOGGLE
   ============================================ */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ============================================
   2. HAMBURGER MENU
   ============================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ============================================
   3. TYPEWRITER EFFECT
   ============================================ */
const phrases = [
  'Building AI-Native Applications',
  'Hackathon Champion 🏆',
  'CS @ SVIT Hyderabad',
  'Full-Stack Developer',
  'Security Orchestration Expert',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeLoop() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }
  let delay = isDeleting ? 50 : 80;
  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 300;
  }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ============================================
   4. SMOOTH ACTIVE NAV LINK
   ============================================ */
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-link');

const activateLink = () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
};
window.addEventListener('scroll', activateLink, { passive: true });

/* ============================================
   5. SCROLL FADE-IN ANIMATIONS
   ============================================ */
const fadeEls = document.querySelectorAll(
  '.glass-card, .section-label, .section-title, .section-subtitle, .hero-badge, .timeline-item'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
fadeEls.forEach(el => observer.observe(el));

/* ============================================
   6. PARTICLE CANVAS
   ============================================ */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomBetween(a, b) { return a + Math.random() * (b - a); }

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = randomBetween(0, canvas.width);
    this.y = randomBetween(0, canvas.height);
    this.size = randomBetween(0.5, 2);
    this.speedX = randomBetween(-0.2, 0.2);
    this.speedY = randomBetween(-0.3, -0.05);
    this.alpha = randomBetween(0.2, 0.7);
    this.color = Math.random() > 0.5 ? '108,99,255' : '0,210,255';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y < 0 || this.x < 0 || this.x > canvas.width) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = `rgb(${this.color})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Create 80 particles
for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ============================================
   7. NAVBAR SCROLL EFFECT
   ============================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 32px rgba(108,99,255,0.12)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

/* ============================================
   8. CONTACT FORM SUBMIT
   ============================================ */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  const formData = new FormData(contactForm);
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
      formStatus.style.color = '#86efac';
      contactForm.reset();
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    formStatus.textContent = '❌ Something went wrong. Please email directly.';
    formStatus.style.color = '#fca5a5';
  }
  submitBtn.textContent = 'Send Message →';
  submitBtn.disabled = false;
  setTimeout(() => { formStatus.textContent = ''; }, 5000);
});

/* ============================================
   9. SKILL CHIP HOVER GLOW (CURSOR MAGIC)
   ============================================ */
document.querySelectorAll('.skill-chip').forEach(chip => {
  chip.addEventListener('mousemove', (e) => {
    const rect = chip.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    chip.style.setProperty('--mouse-x', `${x}%`);
    chip.style.setProperty('--mouse-y', `${y}%`);
  });
});

/* ============================================
   10. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================
   11. PROJECT CARD TILT EFFECT
   ============================================ */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ============================================
   12. HERO IMAGE 3D TILT EFFECT
   ============================================ */
const heroImageWrap = document.querySelector('.hero-image-wrap');
if (heroImageWrap) {
  heroImageWrap.addEventListener('mousemove', (e) => {
    const rect = heroImageWrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    heroImageWrap.style.transition = 'transform 0.1s ease-out';
    heroImageWrap.style.transform = `perspective(1000px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  heroImageWrap.addEventListener('mouseleave', () => {
    heroImageWrap.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    heroImageWrap.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
}
