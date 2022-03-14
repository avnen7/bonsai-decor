// Sticky Navbar on scroll
window.addEventListener('scroll', function() {
  const mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('sticky', window.scrollY > 0);
})