const buyButtonsInBooksBlock = document.querySelectorAll('.book_button');
const libraryCard = document.querySelector('.lib_card');
const overlay = document.querySelector('.overlay');
const closeLibraryCardCross = document.querySelector('.libcard_close');

console.log(buyButtonsInBooksBlock);

function openLibraryCard() {
  console.log(libraryCard);
  libraryCard.classList.add('dispflex');
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
