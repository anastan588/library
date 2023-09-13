const buyButtonsInBooksBlock = document.querySelectorAll('.book_button');
const libraryCard = document.querySelector('.lib_card');
const overlay = document.querySelector('.overlay');
const closeLibraryCardCross = document.querySelector('.libcard_close');
const loginForm = document.querySelector(".login_form");

console.log(buyButtonsInBooksBlock);

function openLibraryCard() {
  console.log(libraryCard);
  if(localStorage.getItem('currentUser')) {
    libraryCard.classList.add('dispflex');
  } else {
    loginForm.classList.add("display_flex");
  }
  
  overlay.style.display = 'block';
}

function closeLibraryCard(event) {
  libraryCard.classList.remove('dispflex');
  overlay.style.display = 'none';
}

buyButtonsInBooksBlock.forEach((element) => {
  element.addEventListener('click', openLibraryCard);
});
overlay.addEventListener('click', closeLibraryCard);
closeLibraryCardCross.addEventListener('click', closeLibraryCard);
