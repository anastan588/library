const header = document.querySelector('.header');
const userImage = document.querySelector('.log_in_block');
const registerDropMenu = document.querySelector('.register_menu');
const registerLink = document.querySelector('.register_link');
const registerForm = document.querySelector('.reg_form');
const closeRegister = document.querySelector('.close_register');
const overlay = document.querySelector('.overlay');
// const burgerMenu = document.querySelector('.menu');
// const burgerImage = document.querySelector('.burger');
// const burgerLine = document.querySelectorAll('.burger-item');
// const body = document.querySelector('.body');
const buttonSignInDigitalBlock = document.querySelector('.button_sign');
const registerButton = document.querySelector('.button_register');
const registerFirstName = document.querySelector('.input_first_name_reg');
const registerLastName = document.querySelector('.input_last_name_reg');
const registerEmail = document.querySelector('.input_email_reg');
const registerPassword = document.querySelector('.input_password_reg');
// const linkToRegister = document.querySelector('.input_link_to_register');
const loginIcon = document.querySelector('.log_in_image');
const userLoggedIcon = document.querySelector('.user_icon');
const userLoggedText = document.querySelector('.user_icon_text');

function openRegisterMenu(event) {
  //   event.stopPropagetion();
  const styleOfOverlay = getComputedStyle(overlay);
  if (styleOfOverlay.display === 'none') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
  if (registerDropMenu.classList.contains('display_flex')) {
    registerDropMenu.classList.toggle('display_flex');
  }
  registerForm.classList.toggle('display_flex');
}

function closeRegisterMenu(event) {
  event.stopPropagetion();
  if (registerDropMenu.classList.contains('display_flex')) {
    registerDropMenu.classList.toggle('display_flex');
  }
  registerForm.classList.toggle('display_flex');
  overlay.style.display = 'none';
}

function registerUser() {
  const User = {
    firstname: `${registerFirstName.value}`,
    lastname: `${registerLastName.value}`,
    email: `${registerEmail.value}`,
    password: `${registerPassword.value}`,
  };

  userLoggedText.innerHTML = `${User.firstname[0]}${User.lastname[0]}`;
  userLoggedIcon.classList.add('display_flex');
  loginIcon.classList.add('display_none');
  const UserForStorage = JSON.stringify(User);
  if (localStorage.getItem('currentUser')) {
    localStorage.removeItem('currentUser');
  }
  localStorage.setItem('currentUser', UserForStorage);
}

registerLink.addEventListener('click', openRegisterMenu);
closeRegister.addEventListener('click', openRegisterMenu);
overlay.addEventListener('click', (event) => closeRegisterMenu(event));
buttonSignInDigitalBlock.addEventListener('click', openRegisterMenu);
registerButton.addEventListener('click', registerUser);
