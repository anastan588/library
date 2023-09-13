const header = document.querySelector(".header");
const userImage = document.querySelector(".log_in_block");
const registerDropMenu = document.querySelector(".register_menu");
const registeredDropMenu = document.querySelector(".registered_menu");
const loginLink = document.querySelector(".login_link");
const registerLink = document.querySelector(".register_link");
const myprofileLink = document.querySelector(".profile_link");
const myProfileWindow = document.querySelector(".my_profile");
const logoutLink = document.querySelector(".logout_link");
const loginForm = document.querySelector(".login_form");
const closeLogin = document.querySelector(".close_login");
const overlay = document.querySelector(".overlay");
const burgerMenu = document.querySelector(".menu");
const burgerImage = document.querySelector(".burger");
const burgerLine = document.querySelectorAll(".burger-item");
const body = document.querySelector(".body");
const buttonLoginInDigitalBlock = document.querySelector(".button_log");
const logInButton = document.querySelector(".button_login");
const logInEmail = document.querySelector(".input_email");
const logInPassword = document.querySelector(".input_password");
const linkToRegister = document.querySelector(".input_link_to_register");
const profileIconText = document.querySelector(".profile_icon_text");
const profileName = document.querySelector(".profile_name");
const profileClose = document.querySelector(".profile_close");
const userLoggedIcon = document.querySelector(".user_icon");
const userLoggedText = document.querySelector(".user_icon_text");
const loginIcon = document.querySelector(".log_in_image");

function openRegisterDropmenu() {
  if (burgerMenu.classList.contains("burger-open")) {
    burgerMenu.classList.remove("burger-open");
    overlay.style.display = "none";
    burgerMenu.style.right = "-100%";
    burgerImage.style.transform = "rotate(0deg)";
    body.style.overflow = "auto";
    burgerLine[1].style.removeProperty("display");
    burgerLine[0].style.removeProperty("rotate");
    burgerLine[2].style.removeProperty("rotate");
    burgerLine[0].style.removeProperty("position");
    burgerLine[2].style.removeProperty("position");
    burgerLine[0].style.removeProperty("bottom");
    burgerLine[2].style.removeProperty("top");

    setTimeout(() => {
      header.style.overflow = "hidden";
    }, 500);
  }
  if (localStorage.getItem("currentUser")) {
    registeredDropMenu.classList.toggle("display_flex");
  } else {
    registerDropMenu.classList.toggle("display_flex");
  }
}

function openLoginMenu() {
  const styleOfOverlay = getComputedStyle(overlay);
  if (styleOfOverlay.display === "none") {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
  if (registerDropMenu.classList.contains("display_flex")) {
    registerDropMenu.classList.toggle("display_flex");
  }
  loginForm.classList.toggle("display_flex");
}

function closeLoginMenu() {
  if (registerDropMenu.classList.contains("display_flex")) {
    registerDropMenu.classList.remove("display_flex");
  }
  loginForm.classList.remove("display_flex");
  overlay.style.display = "none";
  loginIcon.classList.remove("display_none");
}

function openMyProfileWindow() {
  const styleOfOverlay = getComputedStyle(overlay);
  if (styleOfOverlay.display === "none") {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
  if (registeredDropMenu.classList.contains("display_flex")) {
    registeredDropMenu.classList.toggle("display_flex");
  }
  const User = JSON.parse(localStorage.getItem("currentUser"));
  console.log(User);
  profileIconText.innerHTML = `${User.firstname[0]}${User.lastname[0]}`;
  profileName.innerHTML = `${User.firstname} ${User.lastname}`;
  myProfileWindow.classList.toggle("dispflex");
}

function closeMyProfile() {
  myProfileWindow.classList.remove("dispflex");
  overlay.style.display = "none";
}
function logOutUser() {
  localStorage.removeItem("currentUser");
  userLoggedIcon.classList.remove("display-flex");
  userLoggedText.innerHTML = ``;
  userLoggedText.title = ``;
  registeredDropMenu.classList.remove("display_flex");
  userLoggedIcon.classList.remove('display-flex');
  loginIcon.classList.remove('display_none');
}

function logInUser() {

}

userImage.addEventListener("click", openRegisterDropmenu);
loginLink.addEventListener("click", openLoginMenu);
closeLogin.addEventListener("click", openLoginMenu);
overlay.addEventListener("click", closeLoginMenu);
buttonLoginInDigitalBlock.addEventListener("click", openLoginMenu);
logInButton.addEventListener("click", logInUser);
myprofileLink.addEventListener("click", openMyProfileWindow);
myProfileWindow.addEventListener("click", closeMyProfile);
overlay.addEventListener("click", closeMyProfile);
logoutLink.addEventListener("click", logOutUser);
console.log(logInButton);
