let menuBar = document.getElementById("js-menu-bar");

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