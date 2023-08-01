document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".video-container");
  const videos = document.querySelectorAll(".slide-video");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function slideToLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      const currentVideo = videos[currentIndex];
      container.scrollLeft -= currentVideo.offsetWidth;
    }
  }

  function slideToRight() {
    if (currentIndex < videos.length - 1) {
      currentIndex++;
      const currentVideo = videos[currentIndex];
      container.scrollLeft += currentVideo.offsetWidth;
    }
  }

  videos.forEach((video, index) => {
    video.addEventListener("click", () => {
      currentIndex = index;
      const currentVideo = videos[currentIndex];
      container.scrollLeft = currentVideo.offsetLeft;
    });
  });

  prevBtn.addEventListener("click", slideToLeft);
  nextBtn.addEventListener("click", slideToRight);
});