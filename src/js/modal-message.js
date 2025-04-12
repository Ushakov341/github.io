document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal-message');
  const overlay = document.querySelector('.modal-message-overlay');
  const openButtons = document.querySelectorAll('.header__message, .footer__message');
  const closeButton = document.querySelector('.modal-message__close');

  openButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add('modal--active');
      overlay.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('modal--active');
    overlay.classList.remove('modal--active');
    document.body.style.overflow = '';
  }

  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });
});
