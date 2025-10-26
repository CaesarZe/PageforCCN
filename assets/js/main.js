document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.navbar ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    document.querySelectorAll('.navbar a').forEach(a =>
      a.addEventListener('click', () => {
        if (menu.classList.contains('open')) menu.classList.remove('open');
      })
    );
  }

  // --- Publications Dropdown: click to toggle ---
  const triggers = document.querySelectorAll('.has-dropdown > a');

  function closeAll(except = null) {
    document.querySelectorAll('.has-dropdown ul').forEach(ul => {
      if (ul !== except) ul.classList.remove('open');
    });
    triggers.forEach(a => a.setAttribute('aria-expanded', 'false'));
  }

  triggers.forEach(link => {
    const panel = link.nextElementSibling;
    if (!panel) return;

    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-expanded', 'false');

    link.addEventListener('click', e => {
      e.preventDefault();
      const isOpen = panel.classList.contains('open');
      closeAll(panel);
      panel.classList.toggle('open', !isOpen);
      link.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // 点击空白处关闭
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dropdown')) closeAll();
  });

  // Esc 关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll();
  });

  // 视口变化时清理状态（防止从移动端切回桌面状态异常）
  window.addEventListener('resize', () => closeAll());
});

