const header = document.querySelector('.header');
const userImage = document.querySelector('.log_in_block');
const registerDropMenu = document.querySelector('.register_menu');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const loginForm = document.querySelector('.login_form');
const closeLogin = document.querySelector('.close_login');
const overlay = document.querySelector('.overlay');

function openRegisterDropmenu() {
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
userImage.addEventListener('click', openRegisterDropmenu);
loginLink.addEventListener('click', openLoginMenu);
closeLogin.addEventListener('click', openLoginMenu);
overlay.addEventListener('click', closeLoginMenu);
