// * Slider
// Slider variables
let slider = document.getElementById("slider");
let slideCount = slider?.childElementCount;
let slides = slider?.children;
let currentSlide = 0;

// Slider function
let changeSlide = (slideNumber) => {
  slides[slideNumber].classList.remove("slide--down");
  slides[slideNumber].classList.remove("slide--up");
  changeActive(slideNumber);
  for (let i = 0; i < slideCount; i++) {
    if (i < slideNumber) {
      slides[i].classList.add("slide--up");
      slides[i].classList.remove("slide--down");
    } else if (i > slideNumber) {
      slides[i].classList.add("slide--down");
      slides[i].classList.remove("slide--up");
    }
  }
};

//  * Timeline
// Timeline variables
let timelineItems = document.getElementsByClassName("timeline-section__item");
let timelineActive = document.getElementById("timeline-section__active");

// Timeline function
let changeActive = (itemNumber) => {
  timelineActive.style.top = 1 + 45 * itemNumber + "px";
};

// Timeline Events
for (let i = 0; i < timelineItems.length; i++) {
  for (let i = 0; i < timelineItems.length; i++) {
    timelineItems[i].addEventListener("click", () => {
      changeActive(i);
      changeSlide(i);
    });
  }
}

// * Scroll event
slider.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    // Scroll up
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    }
    changeSlide(currentSlide);
  } else if (event.deltaY > 0) {
    // Scroll down
    currentSlide++;
    if (currentSlide >= slideCount) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
  }
});

// * Touchscreen scroll event
// Touch start point
let touchStart;
slider.addEventListener("touchstart", (e) => {
  touchStart = e.targetTouches[0].clientY;
});

slider.addEventListener("touchend", function (e) {
  // Touch end position
  let touchEnd = e.changedTouches[0].clientY;
  // Breakpoint for activating touch event
  let deltaTouch = 10;
  if (Math.abs(touchEnd - touchStart) > deltaTouch) {
    if (touchStart < touchEnd) {
      // Scroll up
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slideCount - 1;
      }
      changeSlide(currentSlide);
    } else if (touchStart > touchEnd) {
      // Scroll down
      currentSlide++;
      if (currentSlide >= slideCount) {
        currentSlide = 0;
      }
      changeSlide(currentSlide);
    }
  }
});
