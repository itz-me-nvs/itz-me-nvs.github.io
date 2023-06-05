const galleryItem = document.querySelectorAll(".grid-item");
const nameContainer = document.querySelector(".name-container");
let currentIndex = 0;

const titleList = [
  {
    title: "Total Campus Solutions",
    subtitle: "Angular | Rxjs | Bootstrap",
  },
  {
    title: 'Total Campus Department',
    subtitle: 'Angular | Rxjs | Bootstrap'
  },
  {
    title: 'Meshil Help App',
    subtitle: 'React | Context | Formik | Tailwind'
  },
  {
    title: 'Hotelhunt',
    subtitle: 'React Native | Firebase | Spring Animation | React Navigation'
  }
]

galleryItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    currentIndex = i;
    nameContainer.classList.add('active');
    // item.classList.toggle("active");
    nameContainer.firstElementChild.textContent =
      titleList[currentIndex].title;
    nameContainer.children[1].textContent = titleList[currentIndex].subtitle

    // display none other than active
    galleryItem.forEach((item, i) => {
      item.style.display = "none";
      if (i == currentIndex) {
        document.querySelector(`.project-${i}`).classList.add("active");

        /* project title interception observer */
const imageGalleryContainer = document.querySelector(`.project-content-wrapper-${currentIndex}`);

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // Margin around the root
  threshold: 0.1, // Visible amount of item shown in relation to root
};


const callback = (entries, observer) => {
  console.log('calling');
    entries.forEach((entry) => {
        if (
            entry.isIntersecting
        ) {
            nameContainer.style.opacity = "0";
            nameContainer.style.visibility = "hidden";
        } else {
          console.log(window.innerWidth, document.body.scrollTop);
            nameContainer.style.opacity = "1";
            nameContainer.style.visibility = "visible";
        }
    });

};

const observer = new IntersectionObserver(callback, options);

observer.observe(imageGalleryContainer);
      }
    });
  });
});

const nextProject = () => {
  console.log('here');
  window.scrollTo(0, 0);
  document.querySelector(`.project-background-${currentIndex}`).style.opacity = '0'
  currentIndex =  currentIndex + 1 > galleryItem.length - 1 ? 0 : currentIndex + 1;

  nameContainer.firstElementChild.textContent =
  titleList[currentIndex].title;
nameContainer.children[1].textContent = titleList[currentIndex].subtitle


console.log(document.querySelector(`.project-background-${currentIndex}`));


  var layerClass = "." + 'left'+ "-layer";
  var layers = document.querySelectorAll(layerClass);
  for (const layer of layers) {
    layer.classList.toggle("active");
  }

 setTimeout(() => {
  document.querySelector(`.project-background-${currentIndex}`).style.opacity = '0.5'

    // display none other than active
    galleryItem.forEach((item, i) => {
      if (i == currentIndex) {
        document.querySelector(`.project-${i}`).classList.add("active");
        nameContainer.classList.add('active');
      }
      else {
        document.querySelector(`.project-${i}`)?.classList.remove("active");
      }
    });


    const imageGalleryContainer = document.querySelector(`.project-content-wrapper-${currentIndex}`);

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // Margin around the root
  threshold: 0.1, // Visible amount of item shown in relation to root
};


const callback = (entries, observer) => {
  console.log('calling');
    entries.forEach((entry) => {
        if (
            entry.isIntersecting
        ) {
            nameContainer.style.opacity = "0";
            nameContainer.style.visibility = "hidden";
        } else {
          console.log(window.innerWidth, document.body.scrollTop);
            nameContainer.style.opacity = "1";
            nameContainer.style.visibility = "visible";
        }
    });

};

const observer = new IntersectionObserver(callback, options);

observer.observe(imageGalleryContainer);
 }, 1500);
};


const previousProject = () => {
  console.log('here');
  window.scrollTo(0, 0);
  document.querySelector(`.project-background-${currentIndex}`).style.opacity = "0"
 currentIndex = currentIndex - 1 < 0 ? galleryItem.length - 1 : currentIndex - 1;

  nameContainer.firstElementChild.textContent =
  titleList[currentIndex].title;
nameContainer.children[1].textContent = titleList[currentIndex].subtitle




  var layerClass = "." + 'right'+ "-layer";
  var layers = document.querySelectorAll(layerClass);
  for (const layer of layers) {
    layer.classList.toggle("active");
  }

 setTimeout(() => {
  document.querySelector(`.project-background-${currentIndex}`).style.opacity = '0.5'

    // display none other than active
    galleryItem.forEach((item, i) => {
      if (i == currentIndex) {
        document.querySelector(`.project-${i}`).classList.add("active");
        nameContainer.classList.add('active');
      }
      else {
        document.querySelector(`.project-${i}`)?.classList.remove("active");
      }
    });


    const imageGalleryContainer = document.querySelector(`.project-content-wrapper-${currentIndex}`);

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // Margin around the root
  threshold: 0.1, // Visible amount of item shown in relation to root
};


const callback = (entries, observer) => {
  console.log('calling');
    entries.forEach((entry) => {
        if (
            entry.isIntersecting
        ) {
            nameContainer.style.opacity = "0";
            nameContainer.style.visibility = "hidden";
        } else {
          console.log(window.innerWidth, document.body.scrollTop);
            nameContainer.style.opacity = "1";
            nameContainer.style.visibility = "visible";
        }
    });

};

const observer = new IntersectionObserver(callback, options);

observer.observe(imageGalleryContainer);
 }, 1500);
};



window.onload = function () {
  const header = document.querySelector(".name-container");
  let id = setTimeout(() => {
    header.style.opacity = "1";
    header.style.transform = "translate(-50%, -50%)";
  }, 500);

  setTimeout(() => {
    clearTimeout(id);
  }, 500);
};

// scroll project content on mouse wheel event body is overflow hidden
const projectContent = document.querySelector(".project-content");
const projectHeader = document.querySelector(".project-header");
const container = document.querySelector(".container");
const gallery = document.querySelector(".gallery");
const scrollContainer = document.querySelector(".scroll-container");
const scrollItems = document.querySelectorAll(".gallery");

// Smooth scrolling on mouse scroll
function smoothScroll(event) {
  // event.preventDefault();

  console.log(event.deltaY);

  const scrollStep = event.deltaX || event.detail || -event.wheelDelta;
  const scrollSpeed = 1;

  if (
    document
      .querySelector(`.project-${currentIndex}`)
      .classList.contains("active")
  ) {
    if (scrollStep < 0) {
      // document.getElementById("TCS_IMG").scrollIntoView({
      //   behavior: "smooth",
      //   inline: "center",
      // });
      // nameContainer.style.opacity = "0";
    } else {
      // document.getElementById("TCS").scrollIntoView({
      //   behavior: "smooth",
      //   inline: "center",
      // });
      document.querySelector(".container").scrollLeft += 100;
    }
  } else {
    // ON the main page
    // container.scrollLeft += scrollStep * scrollSpeed;
    container.scrollBy({
      top: 0,
      left: scrollStep * scrollSpeed,
      behavior: "smooth",

    });
  }
}

// Attach smooth scrolling function to the mousewheel event
document.addEventListener("wheel", smoothScroll, {
  passive: true, // browser handling the event
});





// 3D view

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

function hideDialog() {
  document.getElementById('dialog').style.display = 'none';
}

function showDialog() {
  document.getElementById("dialog").style.display = "block";
}


document.getElementById('profile-btn').addEventListener('click', showDialog);
document.getElementById('close-btn').addEventListener('click', hideDialog);