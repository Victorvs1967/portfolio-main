const burger = document.querySelector('.humburger-menu'),
      menu = document.querySelector('.menu'),
      menuList = menu.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => menu.classList.add('menu-active'));
menuList.forEach(item => item.addEventListener('click', () => menu.classList.remove('menu-active')));

document.addEventListener('click', event => event.target.closest('.menu') || event.target.closest('.humburger-menu') ? '' : menu.classList.remove('menu-active'));