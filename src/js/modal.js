document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal__sidebar');
  const openBtn = document.querySelector('.header__menu');
  const closeBtn = document.querySelector('.top__burger-2');
  const overlay = document.querySelector('.modal__overlay');

  const openModal = () => modal.classList.add('active');
  const closeModal = () => modal.classList.remove('active');

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
