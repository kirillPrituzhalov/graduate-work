let userNavItemBurder = document.querySelector('.user-nav__item--burder');
let siteNavButtonClose = document.querySelector('.site-nav__button');
let siteТav = document.querySelector('.site-nav--closed');

userNavItemBurder.addEventListener('click', function() {
    siteТav.classList.add('site-nav--active');
});
siteNavButtonClose.addEventListener('click', function() {
    siteТav.classList.remove('site-nav--active');
});