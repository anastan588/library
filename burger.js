let burgerImage = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuList = document.querySelector('.menu-list');
let body = document.querySelector('.body');
let menuItem = document.querySelectorAll('.menu_item');
let overlay = document.querySelector('.overlay');
let burgerLine = document.querySelectorAll('.burger-item');
const header = document.querySelector('.header');
const registerDropMenu = document.querySelector('.register_menu');

function openOrCloseBurger(event) {
  event.stopPropagation();
  //console.log(event);
  //console.log(window.innerWidth);
  //console.log(typeof window.innerWidth);
  let styleOfOverlay = getComputedStyle(overlay);
  if (
    !menu.classList.contains('burger-open') &&
    window.innerWidth <= 1024 &&
    styleOfOverlay.display === 'none'
  ) {
    overlay.style.display = 'block';
    menu.classList.add('burger-open');
    menu.style.right = '0%';
    burgerImage.style.transform = 'rotate(90deg)';
    body.style.overflow = 'hidden';
    burgerLine[1].style.display = 'none';
    burgerLine[0].style.rotate = '45deg';
    burgerLine[2].style.rotate = '-45deg';
    burgerLine[0].style.position = 'absolute';
    burgerLine[2].style.position = 'absolute';
    burgerLine[0].style.bottom = '11px';
    burgerLine[2].style.top = '11px';
    header.style.overflow = 'visible';
    registerDropMenu.classList.remove('display_flex');
  } else {
    menu.classList.remove('burger-open');
    overlay.style.display = 'none';
    menu.style.right = '-100%';
    burgerImage.style.transform = 'rotate(0deg)';
    body.style.overflow = 'auto';
    burgerLine[1].style.removeProperty('display');
    burgerLine[0].style.removeProperty('rotate');
    burgerLine[2].style.removeProperty('rotate');
    burgerLine[0].style.removeProperty('position');
    burgerLine[2].style.removeProperty('position');
    burgerLine[0].style.removeProperty('bottom');
    burgerLine[2].style.removeProperty('top');

    setTimeout(() => {
      header.style.overflow = 'hidden';
    }, 500);
  }
}

burgerImage.addEventListener('click', openOrCloseBurger);
overlay.addEventListener('click', openOrCloseBurger);
menuItem.forEach((element) =>
  element.addEventListener('click', openOrCloseBurger)
);

alert('Уважаемые проверяющие, просьба проветь работу в последний день кроссчека.')
