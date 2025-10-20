// Mobile nav toggle & basic dropdown support
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.navbar ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
  // Close menu on link click (mobile)
  document.querySelectorAll('.navbar a').forEach(a => {
    a.addEventListener('click', () => {
      if (menu.classList.contains('open')) menu.classList.remove('open');
    });
  });
});
