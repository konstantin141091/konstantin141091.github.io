let burgerStatus = true;
let burger = document.getElementById('mobile-nav');
let burgerTop = document.getElementById('burger-top');
let burgerMiddle = document.getElementById('burger-middle');
let burgerBottom = document.getElementById('burger-bottom');
let mobileBox = document.getElementById('mobile-box');
let header = document.getElementById('header-fixed');
let logo = document.getElementById('logo-fixed');
burger.addEventListener('click', function () {
  if (burgerStatus) {
    burgerTop.classList.remove('burger__top');
    burgerTop.classList.add('burger__top-click');
    burgerMiddle.classList.remove('burger__middle');
    burgerMiddle.classList.add('burger__middle-click');
    burgerBottom.classList.remove('burger__bottom');
    burgerBottom.classList.add('burger__bottom-click');
    mobileBox.classList.add('mobile-box-opened');
    header.classList.remove('header__fixed');
    logo.classList.remove('logo__fixed');
    burgerStatus = false;
  }  else {
    burgerTop.classList.remove('burger__top-click');
    burgerTop.classList.add('burger__top');
    burgerMiddle.classList.remove('burger__middle-click');
    burgerMiddle.classList.add('burger__middle');
    burgerBottom.classList.remove('burger__bottom-click');
    burgerBottom.classList.add('burger__bottom');
    mobileBox.classList.remove('mobile-box-opened');
    burgerStatus = true;
  }
});
