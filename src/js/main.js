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

const toggleBurgerDropdown = () => {
  const screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

  if (screenWidth < 992) {
    const dropdownLinks = document.querySelectorAll('.dropdown__toggle');

    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const link = e.target;

        link.parentElement.classList.toggle('opened');
      });
    })
  }
}

const closeBurgerDropdown = () => {
  const screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

  if (screenWidth >= 992) {
    const menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach(item => {
      item.classList.remove('opened');
    });
  }
}

const resizeHandler = () => {
  closeBurgerDropdown();
}

const domContentLoadedHandler = () => {
  toggleBurgerDropdown();
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('resize', resizeHandler);