// Variables
const imagesWrapper = document.querySelectorAll('.img__wrapper');
let firstColumn = document.querySelector('.img__wrapper__headerFirst');
let secondColumn = document.querySelector('.img__wrapper__headerSecond');
let thirdColumn = document.querySelector('.img__wrapper__headerThird');
let fourthColumn = document.querySelector('.img__wrapper__headerFourth');
let currentImg = 0;


//Slider function
let sliderShow = () => {
    imagesWrapper.forEach(image => {
        image.classList.add('slider__img_hide');
    })
    imagesWrapper[currentImg].classList.remove('slider__img_hide');
}
sliderShow();

// LeftArrow click function
let previosImg = () => {
    if (currentImg - 1 == -1) {
        currentImg = imagesWrapper.length - 1;
    }
    else {
        currentImg--;
    }
    sliderShow();
};

document.querySelector('.slider__arrow_left').onclick = previosImg;

// RightArrow click function
let nextImg = () => {
    if (currentImg + 1 == imagesWrapper.length) {
        currentImg = 0;
    }
    else {
        currentImg++;
    }
    sliderShow();
}

document.querySelector('.slider__arrow_right').onclick = nextImg;

// Auto load
let auto = () => {
    setInterval(nextImg, 4000)
}
auto();

// Equalize columns
let equalColumns = () => {
    firstColumn.style.height = 'auto';
    secondColumn.style.height = 'auto';
    thirdColumn.style.height = 'auto';
    fourthColumn.style.height = 'auto';

    let max = Math.max(firstColumn.offsetHeight, secondColumn.offsetHeight,
        thirdColumn.offsetHeight, fourthColumn.offsetHeight);

    firstColumn.style.height = max + 'px';
    secondColumn.style.height = max + 'px';
    thirdColumn.style.height = max + 'px';
    fourthColumn.style.height = max + 'px';
}
equalColumns();

window.onresize = equalColumns;



