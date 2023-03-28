const refs = {
  menu: document.querySelector('.mobile-menu'),
  openBtn: document.querySelector('.open-menu-btn'),
  closeBtn: document.querySelector('.close-menu-btn'),
};

refs.openBtn.addEventListener('click', () => {
  refs.menu.classList.add('is-open');
});

refs.closeBtn.addEventListener('click', () => {
  refs.menu.classList.remove('is-open');
});
