function myNav(x) {
  const barBtn = document.querySelector('.bar-btn');
  const bgSidebar = document.querySelector('.bg-sidebar');
  x.classList.toggle('change');
  bgSidebar.classList.toggle('change');
}

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (this.window.scrollY > 0) {
    navbar.style.boxShadow = '2px 2px 3px rgba(55, 87, 255, 1)';
    navbar.style.transition = '0.2s';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.transition = '0.2s';
  }
});
