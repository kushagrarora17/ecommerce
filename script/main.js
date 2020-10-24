// Utility Start

function throttle(inputFn, delay) {
  let lastTime = 0;
  let timerRef = null;

  return function (...args) {
    let currentTime = new Date();
    clearTimeout(timerRef);

    if (currentTime.getTime() - lastTime > delay) {
      inputFn.apply(null, args);
      lastTime = currentTime.getTime();
    } else {
      timerRef = setTimeout(function () {
        inputFn.apply(null, args);
        lastTime = currentTime.getTime();
      }, delay);
    }
  };
}

// Utility End

let menuBar = document.getElementById("js-menu-bar");
let menuOffset = menuBar.offsetTop;

function setMenuBar() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > menuOffset) {
    if (!menuBar.classList.contains("fixed")) {
      menuBar.classList.add("fixed");
    }
  } else {
    if (menuBar.classList.contains("fixed")) {
      menuBar.classList.remove("fixed");
    }
  }
}

const throttledSetMenuBar = throttle(setMenuBar, 500);

window.addEventListener("scroll", throttledSetMenuBar);

// let bannerContainer = document.getElementsByClassName("banner-container");
// let sliderImg1 = document.getElementById("js-slider1");
// let sliderImg2 = document.getElementById("js-slider2");
// let sliderImg3 = document.getElementById("js-slider3");

// window.addEventListener("scroll", function(ev) {
//   let menuOffset = menuBar.offsetTop;
//   let currentScroll = document.documentElement.scrollTop;

//   if(currentScroll > menuOffset) {
//     if(!menuBar.classList.contains("fixed")) {
//       menuBar.classList.add("fixed");
//     }
//   } else {
//     if(menuBar.classList.contains("fixed")) {
//       menuBar.classList.remove("fixed");
//     }
//   }
// });

// setInterval( function () {

//   , 500);

// setTimeout(function(){
//   var v = object.style.zIndex;

// },3000)
