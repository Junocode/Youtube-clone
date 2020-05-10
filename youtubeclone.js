let videoTitleIcon = document.querySelector(".info__icon");
let videoTitle = document.querySelector(".videotitle__main");

videoTitleIcon.addEventListener("click", function () {
  videoTitle.classList.toggle("activeIcon");
  videoTitleIcon.classList.toggle("rotationIcon");
});
