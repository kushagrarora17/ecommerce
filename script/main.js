let menuBar = document.getElementById("js-menu-bar");

// let bannerContainer = document.getElementsByClassName("banner-container");
// let sliderImg1 = document.getElementById("js-slider1");
// let sliderImg2 = document.getElementById("js-slider2");
// let sliderImg3 = document.getElementById("js-slider3");

console.dir(menuBar);

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

setInterval( function () {

  let menuOffset = menuBar.offsetTop;
  let currentScroll = document.documentElement.scrollTop;

  if(currentScroll > menuOffset) {
    if(!menuBar.classList.contains("fixed")) {
      menuBar.classList.add("fixed");
    }
  } else {
    if(menuBar.classList.contains("fixed")) {
      menuBar.classList.remove("fixed");
    }
  }
}, 500);

// setTimeout(function(){
//   var v = object.style.zIndex;

  
// },3000)
