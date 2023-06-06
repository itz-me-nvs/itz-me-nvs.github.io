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


/* Dialog box */

function openDialog() {
  var dialog = document.getElementById("dialog");
  dialog.showModal();
}

function closeDialog() {
  var dialog = document.getElementById("dialog");
  dialog.close();
}


// document.getElementById('profile-btn').addEventListener('click', showDialog);
// document.getElementById('close-btn').addEventListener('click', hideDialog);