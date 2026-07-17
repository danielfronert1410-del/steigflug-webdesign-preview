// Mobile-Navigation
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
}

// Aktiven Menüpunkt markieren
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach((a) => {
  if (a.getAttribute('href') === here) a.classList.add('active');
});

// Scroll-Reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Jahr im Footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
