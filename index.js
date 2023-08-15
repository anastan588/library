let burgerImage = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuList = document.querySelector(".menu-list");
let body = document.querySelector(".body");
let menuItem = document.querySelectorAll(".menu_item");
let overlay = document.querySelector(".overlay");
let burgerLine = document.querySelectorAll(".burger-item");

function openOrCloseBurger(event) {
  event.stopPropagation();
  //console.log(event);
  //console.log(window.innerWidth);
  //console.log(typeof window.innerWidth);
  let styleOfOverlay = getComputedStyle(overlay);
  if (
    !menu.classList.contains("burger-open") &&
    window.innerWidth <= 1024 &&
    styleOfOverlay.display === "none"
  ) {
    overlay.style.display = "block";
    menu.classList.toggle("burger-open");
    menu.style.right = "0%";
    burgerImage.style.transform = "rotate(90deg)";
    body.style.overflow = "hidden";
    burgerLine[1].style.display = 'none';
    burgerLine[0].style.rotate = '45deg';
    burgerLine[2].style.rotate = '-45deg';
    burgerLine[0].style.position = 'absolute';
    burgerLine[2].style.position = 'absolute';
    burgerLine[0].style.bottom = '14px';
    burgerLine[2].style.top = '14px';
  } else {
    menu.classList.toggle("burger-open");
    overlay.style.display = "none";
    menu.style.right = "-100%";
    burgerImage.style.transform = "rotate(0deg)";
    body.style.overflow = "auto";
    burgerLine[1].style.removeProperty('display');
    burgerLine[0].style.removeProperty('rotate');
    burgerLine[2].style.removeProperty('rotate');
    burgerLine[0].style.removeProperty('position');
    burgerLine[2].style.removeProperty('position');
    burgerLine[0].style.removeProperty('bottom');
    burgerLine[2].style.removeProperty('top');
  }
}

burgerImage.addEventListener("click", openOrCloseBurger);
overlay.addEventListener("click", openOrCloseBurger);
menuItem.forEach((element) =>
  element.addEventListener("click", openOrCloseBurger)
);