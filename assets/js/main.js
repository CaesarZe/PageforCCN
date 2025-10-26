// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.navbar ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    // 点击菜单项后在移动端收起
    document.querySelectorAll('.navbar a').forEach(a =>
      a.addEventListener('click', () => {
        if (menu.classList.contains('open')) menu.classList.remove('open');
      })
    );
  }

  // --- Dropdown (click to open/close) ---
  const triggerLinks = document.querySelectorAll('.has-dropdown > a');

  function closeAllDropdowns(except = null) {
    document.querySelectorAll('.has-dropdown ul').forEach(ul => {
      if (ul !== except) ul.style.display = 'none';
    });
    triggerLinks.forEach(a => a.setAttribute('aria-expanded', 'false'));
  }

  triggerLinks.forEach(link => {
    const dropdown = link.nextElementSibling;
    if (!dropdown) return;

    // 初始状态
    dropdown.style.display = 'none';
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-haspopup', 'true');

    // 点击切换
    link.addEventListener('click', e => {
      e.preventDefault();
      const isOpen = dropdown.style.display !== 'none';
      closeAllDropdowns(dropdown);
      dropdown.style.display = isOpen ? 'none' : 'flex';
      link.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // 点击空白处关闭
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dropdown')) closeAllDropdowns();
  });

  // Esc 关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllDropdowns();
  });

  // 视口变化时清理内联样式（防止从移动端切回桌面时状态异常）
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) closeAllDropdowns();
  });
});

