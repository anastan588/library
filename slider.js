const sliderImages = document.getElementsByClassName('slider_image_block');
const sliderImagesContainer = document.getElementById('image_container');
const sliderDots = document.getElementsByClassName('submit_area_dot');
const arrows = document.querySelectorAll('.arrow');
const inputsSeasons = document.querySelectorAll('.input');
const blocksSeasons = document.querySelectorAll('.books_block_season');
const booksBlock = document.querySelector('.books_block');

const heightOfBooksBlock = getComputedStyle(blocksSeasons[0]).height;
booksBlock.style.height = heightOfBooksBlock;

function moveSliderAboutSection(event) {
  let currentDot = event.currentTarget;
  let styleOfImageContainer = getComputedStyle(sliderImagesContainer);
  if (
    currentDot.previousElementSibling !== null &&
    !currentDot.previousElementSibling.classList.contains('not_active_dot')
  ) {
    currentDot.previousElementSibling.children[0].classList.remove(
      'active_dot'
    );
    currentDot.previousElementSibling.classList.add('not_active_dot');
    currentDot.classList.remove('not_active_dot');
    currentDot.children[0].classList.add('active_dot');
    for (let key of sliderDots) {
      if (key.classList.contains('not_active_dot')) {
        key.classList.add('disabled');
      }
    }
    let currentLeft = styleOfImageContainer.left;
    sliderImagesContainer.style.left = `${
      Math.ceil(currentLeft.slice(0, -2)) -
      Math.ceil(styleOfImageContainer.width.slice(0, -2) / 5)
    }px`;
    setTimeout(() => {
      let countDots = 0;
      for (let key of sliderDots) {
        countDots += 1;
        if (key.classList.contains('not_active_dot')) {
          key.classList.remove('disabled');
          arrows[0].classList.remove('disabled');
        } else if (
          key.children[0].classList.contains('active_dot') &&
          countDots === sliderDots.length
        ) {
          arrows[1].classList.add('disabled');
          console.log(arrows[1]);
          console.log('right-end');
        }
      }
    }, 1000);
  } else if (
    !currentDot.nextElementSibling.classList.contains('not_active_dot')
  ) {
    currentDot.nextElementSibling.children[0].classList.remove('active_dot');
    currentDot.nextElementSibling.classList.add('not_active_dot');
    currentDot.classList.remove('not_active_dot');
    currentDot.children[0].classList.add('active_dot');
    for (let key of sliderDots) {
      if (key.classList.contains('not_active_dot')) {
        key.classList.add('disabled');
      }
    }
    let currentLeft = styleOfImageContainer.left;
    sliderImagesContainer.style.left = `${
      Math.ceil(currentLeft.slice(0, -2)) +
      Math.ceil(styleOfImageContainer.width.slice(0, -2) / 5)
    }px`;
    setTimeout(() => {
      let countDots = 0;
      for (let key of sliderDots) {
        countDots += 1;
        if (key.classList.contains('not_active_dot')) {
          key.classList.remove('disabled');
          arrows[1].classList.remove('disabled');
        } else if (
          key.children[0].classList.contains('active_dot') &&
          countDots === 1
        ) {
          arrows[0].classList.add('disabled');
          console.log(arrows[0]);
          console.log('left-end');
        }
      }
    }, 1000);
  }
}

for (let key of sliderDots) {
  key.addEventListener('click', (event) => {
    moveSliderAboutSection(event);
  });
}

function moveSliderAboutSectionByArrows(event) {
  let currentArrow = event.currentTarget;
  let styleOfImageContainer = getComputedStyle(sliderImagesContainer);
  if (currentArrow.classList.contains('arrow_right')) {
    let count = 0;
    let countlength = 0;
    for (let key of sliderDots) {
      if (key.children[0].classList.contains('active_dot') && count === 0) {
        key.classList.add('not_active_dot');
        key.children[0].classList.remove('active_dot');
        key.nextElementSibling.classList.remove('not_active_dot');
        key.nextElementSibling.children[0].classList.add('active_dot');
        count += 1;
        if (countlength === sliderDots.length - 2) {
          currentArrow.classList.add('disabled');
        }
      }
      countlength += 1;
    }
    for (let key of sliderDots) {
      if (key.classList.contains('not_active_dot')) {
        key.classList.add('disabled');
      }
    }
    for (let i = 0; i < arrows.length; i += 1) {
      arrows[i].classList.add('disabled');
    }
    let currentLeft = styleOfImageContainer.left;
    sliderImagesContainer.style.left = `${
      Math.ceil(currentLeft.slice(0, -2)) -
      Math.ceil(styleOfImageContainer.width.slice(0, -2) / 5)
    }px`;
    setTimeout(() => {
      for (let i = 0; i < arrows.length; i += 1) {
        arrows[i].classList.remove('disabled');
      }
      let countDots = 0;
      for (let key of sliderDots) {
        countDots += 1;
        if (key.classList.contains('not_active_dot')) {
          key.classList.remove('disabled');
        } else if (
          key.children[0].classList.contains('active_dot') &&
          countDots === sliderDots.length
        ) {
          currentArrow.classList.add('disabled');
          console.log(currentArrow);
          console.log('right-end');
        }
      }
    }, 1000);
  } else if (currentArrow.classList.contains('arrow_left')) {
    let count = 0;
    let countlength = 0;
    for (let key of sliderDots) {
      if (key.children[0].classList.contains('active_dot') && count === 0) {
        key.classList.add('not_active_dot');
        key.children[0].classList.remove('active_dot');
        key.previousElementSibling.classList.remove('not_active_dot');
        key.previousElementSibling.children[0].classList.add('active_dot');
        count += 1;
        if (countlength === 0) {
          currentArrow.classList.add('disabled');
        }
      }
      countlength += 1;
    }
    for (let key of sliderDots) {
      if (key.classList.contains('not_active_dot')) {
        key.classList.add('disabled');
      }
    }
    for (let i = 0; i < arrows.length; i += 1) {
      arrows[i].classList.add('disabled');
    }
    let currentLeft = styleOfImageContainer.left;
    sliderImagesContainer.style.left = `${
      Math.ceil(currentLeft.slice(0, -2)) +
      Math.ceil(styleOfImageContainer.width.slice(0, -2) / 5)
    }px`;
    setTimeout(() => {
      for (let i = 0; i < arrows.length; i += 1) {
        arrows[i].classList.remove('disabled');
      }
      let countDots = 0;
      for (let key of sliderDots) {
        countDots += 1;
        if (key.classList.contains('not_active_dot')) {
          key.classList.remove('disabled');
        } else if (
          key.children[0].classList.contains('active_dot') &&
          countDots === 1
        ) {
          currentArrow.classList.add('disabled');
          console.log(currentArrow);
          console.log('left-end');
        }
      }
    }, 1000);
  }
}

arrows.forEach((element) => {
  element.addEventListener('click', (event) => {
    moveSliderAboutSectionByArrows(event);
  });
});


function changeSlideOfBooks(event) {
  const currentInput = event.target;
  for (let i = 0; i < inputsSeasons.length; i += 1) {
    if (inputsSeasons[i].id !== currentInput.id) {
      inputsSeasons[i].checked = false;
    } else {
      inputsSeasons[i].checked = true;
      for (let j = 0; j < blocksSeasons.length; j += 1) {
        if (inputsSeasons[i].id === blocksSeasons[j].id) {
          blocksSeasons[j].classList.remove('no-opacity');
          blocksSeasons[j].classList.add('opacity');
        } else {
          blocksSeasons[j].classList.add('no-opacity');
          blocksSeasons[j].classList.remove('opacity');
        }
      }
    }
  }
}

inputsSeasons.forEach((element) => {
  element.addEventListener('input', (event) => {
    changeSlideOfBooks(event);
  });
});
