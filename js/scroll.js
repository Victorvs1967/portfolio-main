const menuLinks = document.querySelectorAll('.menu-list__link'),
      mainBtn = document.querySelector('.main__button'),
      mainScroll = document.querySelector('.main__scroll')
      headerLogo = document.querySelector('.header__logo');

[...menuLinks, mainBtn, mainScroll, headerLogo ].forEach(link => link.addEventListener('click', event => {
  event.preventDefault();

  const id = link.getAttribute('href').substring(1),
        section = document.getElementById(id);
        
  section ? seamless.scrollIntoView(section, { behavior: 'smooth' , block: 'start', inline: 'center' }) : '';
}));