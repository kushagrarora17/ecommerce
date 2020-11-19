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

if(document.body.clientWidth > 380) {
  window.addEventListener("scroll", throttledSetMenuBar);
}


// TABS start

const tabBtns = document.getElementsByClassName("js-tab-btn");
const tabContainers = document.getElementsByClassName("js-tab-container");
let lastActiveTabIndex = 0;

for (let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click", function (ev) {
    tabBtns[lastActiveTabIndex].classList.remove("active");
    tabContainers[lastActiveTabIndex].classList.remove("active");

    const target = ev.target;

    target.classList.add("active");
    lastActiveTabIndex = Number(target.getAttribute("data-id"));

    tabContainers[lastActiveTabIndex].classList.add("active");
  });
}

// TABS end
