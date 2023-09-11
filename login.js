const header = document.querySelector('.header');
const userImage = document.querySelector('.log_in_block');
const registerDropMenu = document.querySelector('.register_menu');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const loginForm = document.querySelector('.login_form');
const closeLogin = document.querySelector('.close_login');
const overlay = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.menu');
const burgerImage = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger-item');
const body = document.querySelector('.body');
const buttonLoginInDigitalBlock = document.querySelector('.button_log');
const logInButton = document.querySelector('.button_login');
const logInEmail = document.querySelector('.input_email');
const logInPassword = document.querySelector('.input_password');
const linkToRegister = document.querySelector('.input_link_to_register');

function openRegisterDropmenu() {
  console.log(burgerMenu);
  if (burgerMenu.classList.contains('burger-open')) {
    burgerMenu.classList.remove('burger-open');
    overlay.style.display = 'none';
    burgerMenu.style.right = '-100%';
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
  registerDropMenu.classList.toggle('display_flex');
}

function openLoginMenu() {
  const styleOfOverlay = getComputedStyle(overlay);
  if (styleOfOverlay.display === 'none') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
  if (registerDropMenu.classList.contains('display_flex')) {
    registerDropMenu.classList.toggle('display_flex');
  }
  loginForm.classList.toggle('display_flex');
}

function closeLoginMenu() {
  if (registerDropMenu.classList.contains('display_flex')) {
    registerDropMenu.classList.toggle('display_flex');
  }
  loginForm.classList.toggle('display_flex');
  overlay.style.display = 'none';
}


function logInUser() {

}
userImage.addEventListener('click', openRegisterDropmenu);
loginLink.addEventListener('click', openLoginMenu);
closeLogin.addEventListener('click', openLoginMenu);
overlay.addEventListener('click', closeLoginMenu);
buttonLoginInDigitalBlock.addEventListener('click', openLoginMenu);
logInButton.addEventListener('click', logInUser);
