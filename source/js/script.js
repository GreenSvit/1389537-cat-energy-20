var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.page-header__nav');
var headerWrapper = document.querySelector('.page-header__wrapper');

menu.classList.add('main-nav--closed', 'main-nav--closed-animation');
menuToggle.classList.remove('menu-toggle--active');
headerWrapper.classList.remove('page-header__wrapper--active-menu');

menuToggle.addEventListener('click', function(evt) {
  if (!menuToggle.classList.contains('menu-toggle--active')) {
    menu.classList.remove('main-nav--closed');
    setTimeout(() => {
      menu.classList.remove('main-nav--closed-animation');
    }, 1);
    menuToggle.classList.add('menu-toggle--active');
    headerWrapper.classList.add('page-header__wrapper--active-menu');
  } else {
    menu.classList.add('main-nav--closed-animation');
    setTimeout(() => {
      menu.classList.add('main-nav--closed');
    }, 500);
    menuToggle.classList.remove('menu-toggle--active');
    headerWrapper.classList.remove('page-header__wrapper--active-menu');
  }
});
