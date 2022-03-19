const featureLinks = document.querySelectorAll('.feature__link');

featureLinks.forEach(link => link.addEventListener('click', () => {
  featureLinks.forEach(btn => {
    btn.classList.remove('feature__link_active');
    btn.nextElementSibling.classList.add('hidden');
  });
  link.classList.toggle('feature__link_active');
  link.nextElementSibling.classList.remove('hidden');
}));
