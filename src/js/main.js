@@include('../../node_modules/aos/dist/aos.js');

// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

// toggle burger dropdown
const toggleBurgerDropdown = e => {
  const screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

  if (screenWidth >= 992) {
    e.preventDefault();

    return false;
  } else {
    const currentLink = e.target;

    currentLink.parentElement.classList.toggle('opened');
  }
}

const addToggleEventsToDropdowns = () => {
  const dropdownLinks = document.querySelectorAll('.dropdown__toggle');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', toggleBurgerDropdown);
  });
}

const closeBurgerDropdown = () => {
  const menuItems = document.querySelectorAll('.menu__item');

  menuItems.forEach(item => {
    item.classList.remove('opened');
  });
}

const checkBurgerDropdown = () => {
  const screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

  if (screenWidth >= 992) {
    if (document.querySelector('.menu__item.opened')) closeBurgerDropdown();
  }
}

const initStickyHeader = e => {
  const header = document.querySelector('.header');
  const scrollY = window.scrollY;

  header.classList.toggle('sticky', scrollY > 0);
  document.body.classList.toggle('scrolled', scrollY > 0);
}

const hidePreloader = () => {
  const preloaderWrapper = document.querySelector('.preloader-wrapper');

  preloaderWrapper.classList.add('hide');
}

const resizeHandler = () => {
  checkBurgerDropdown();
}

const loadHandler = () => {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

  hidePreloader();
}

const domContentLoadedHandler = () => {
  addToggleEventsToDropdowns();

  window.addEventListener('scroll', initStickyHeader);
}

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('load', loadHandler);
window.addEventListener('resize', resizeHandler);