const moreBtn = document.querySelectorAll('.more'),
      modal = document.querySelector('.modal'),
      close = modal.querySelector('.modal__close'),
      overlay = modal.querySelector('.overlay');

moreBtn.forEach(btn => btn.addEventListener('click', () => modal.classList.remove('hidden')));
close.addEventListener('click', () => modal.classList.add('hidden'));
overlay.addEventListener('click', () => modal.classList.add('hidden'));