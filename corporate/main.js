// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  '#about .about-text, #about .about-visual, .stat-item, .service-card, .team-card, .hero-content, #contact .container > *'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  document.querySelector('.contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:rgba(10,10,15,0.97);padding:2rem;gap:1.5rem;border-bottom:1px solid rgba(255,255,255,0.06);z-index:99;';
  }
});
