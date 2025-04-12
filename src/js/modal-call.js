document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal-call');
  const overlay = document.querySelector('.modal-call-overlay');
  const openButtons = document.querySelectorAll('.header__call, .footer__call');
  const closeButton = document.querySelector('.modal-call__close');

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
