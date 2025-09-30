document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.createElement('div');
  const navMenu = document.querySelector('.nav-menu');

  // Hamburger menu
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.navbar-right').prepend(hamburger);

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Active section highlight
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});
