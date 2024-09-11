var video = document.getElementById("video-bg");
var playPauseButton = document.getElementById("play-pause-btn");

playPauseButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = "Pause";
  } else {
    video.pause();
    playPauseButton.textContent = "Play";
  }
});