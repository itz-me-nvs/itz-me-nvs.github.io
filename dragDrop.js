// Get the image list container and images
const carousel = document.querySelector('.carousel');
const itemList = document.querySelectorAll('.carousel-item');
const carouselWrap = document.querySelector('.carousel-wrap');


const angleList = [
  0,
  32,
  65,
  98,
  130,
  163,
  196,
  229,
  261,
  294,
  327,
  360
]

const btn = document.querySelector('.btn');
let currentPositionX = 0;
let translateX = 0;

// Add event listeners to each image for dragstart and dragend events
// itemList.forEach((image, index) => {
//     // console.log(image);
//   image.addEventListener('dragstart',handleDragStart);
//   image.addEventListener('dragend', handleDragEnd);
//     image.addEventListener('dragover', handleDragOver);
// });

// Handle dragstart event
// function handleDragStart(event) {
//   console.log('started');
//     currentPositionX = event.clientX;
//   }

//   function handleDragOver (event) {
//     event.preventDefault();

//   }


//   function handleDragEnd(event) {

// let isLeftToRight = false;
//     // check if the direction is left to right or right to left
//     if(event.clientX > currentPositionX) {
//       isLeftToRight = true;
//     }
//     let deltaX = event.clientX - currentPositionX;

//     if(isLeftToRight) {
//       translateX = (translateX - deltaX);
//     }
//     else {
//       translateX = (translateX + Math.abs(deltaX));
//     }
//     carouselWrap.style.transform = `translateZ(943px) rotateZ(6deg) rotateY(${translateX / 4}deg)`

//   }