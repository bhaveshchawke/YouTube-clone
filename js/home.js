// Sidebar Toggle
const slidebar = document.getElementById("slidbar");
let sl = document.querySelectorAll(".sl");
let slide = document.querySelector(".sidebar");
let home = document.querySelector(".home");
const content = document.querySelector(".Content");

slidebar.addEventListener("click", (e) => {
  e.preventDefault();

  sl.forEach((element) => {
    element.classList.toggle("extend");
  });

  slide.classList.toggle("extend-width");

  home.style.backgroundColor =
    home.style.backgroundColor === "rgba(255, 255, 255, 0.17)"
      ? ""
      : "rgba(255, 255, 255, 0.17)";

  content.style.marginRight =
    content.style.marginRight === "19px" ? "auto" : "19px";
});

// Text Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".text-slider");
  let leftBtn = document.querySelector(".text-slider .left");
  let rightBtn = document.querySelector(".text-slider .right");
  let scrollAmount = 300;

  rightBtn.addEventListener("click", function () {
    slider.scrollLeft += scrollAmount;
  });

  leftBtn.addEventListener("click", function () {
    slider.scrollLeft -= scrollAmount;
  });
});

// Video Hover Effect
const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.style.borderRadius = "0";
    video.style.transform = "scale(1.03)";
  });

  video.addEventListener("mouseleave", () => {
    video.style.borderRadius = "10px";
    video.style.transform = "";
  });
});

// Create Section Toggle
const create = document.getElementById("create");
const createSection = document.querySelector(".createSection");

create.addEventListener("click", (e) => {
  e.stopPropagation();
  createSection.classList.toggle("csDisplayNone");
});

document.body.addEventListener("click", () => {
  if (!createSection.classList.contains("csDisplayNone")) {
    createSection.classList.add("csDisplayNone");
  }
});

createSection.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Prevent Videos from Auto-Playing
document.addEventListener("DOMContentLoaded", () => {
  videos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
    video.removeAttribute("autoplay");
  });
});

// Video Click - Fullscreen & Play
videos.forEach((video) => {
  video.addEventListener("click", (e) => {
    e.stopPropagation();
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }

    video.play();
    video.classList.add("show-control");
  });
});

// Exit Fullscreen - Pause Video & Remove Controls
document.addEventListener("fullscreenchange", () => {
  videos.forEach((video) => {
    if (!document.fullscreenElement) {
      video.pause();
      video.classList.remove("show-control");
    }
  });
});

// Video Play/Pause Event Handlers
videos.forEach((video) => {
  video.addEventListener("play", () => {
    video.classList.add("show-control");
  });

  video.addEventListener("pause", () => {
    video.classList.remove("show-control");
  });

  video.addEventListener("ended", () => {
    video.classList.remove("show-control");
  });
});
const Account = document.querySelector(".myAccount");
const profile = document.getElementById("profile");
profile.addEventListener("click", () => {
  if (Account.style.display == "flex") {
    Account.style.display = "none";
  } else {
    Account.style.display = "flex";
  }
});
document.body.addEventListener("click", (e) => {
  const Isclicked = Account.contains(e.target) || profile.contains(e.target);
  if (!Isclicked && Account.style.display === "flex") {
    Account.style.display = "none";
  }
});
Account.addEventListener("click", (e) => {
  e.stopPropagation();
});

const micSection = document.querySelector(".microphpne");
const mic = document.getElementById("mic");
var popM = new Audio("sounds/pop.mp3"); //audio
mic.addEventListener("click", (e) => {
  e.stopPropagation();
  if (window.getComputedStyle(micSection).display === "none") {
    micSection.style.display = "block";
    popM.play();
  } else {
    micSection.style.display = "none";
    popM.pause();
  }
});
document.body.addEventListener("click", (e) => {
  if (!mic.contains(e.target) && !micSection.contains(e.target)) {
    micSection.style.display = "none";
  }
});
micSection.addEventListener("click", (e) => {
  e.stopPropagation();
});

const notification = document.getElementById("bell");
const notificationS = document.querySelector(".notification");
notification.addEventListener("click", (e) => {
  e.stopPropagation();
  if (notificationS.style.display === "none") {
    notificationS.style.display = "block";
  } else {
    notificationS.style.display = "none";
  }
});

document.body.addEventListener('click',(e)=>{
  if(!notification.contains(e.target) && !notificationS.contains(e.target)){
     notificationS.style.display='none';
  }

})
