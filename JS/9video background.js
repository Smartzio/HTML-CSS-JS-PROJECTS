const video = document.getElementById("heroVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸️";
  }
  else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
});

muteBtn.addEventListener("click", () => {
  if(video.muted) {
    video.muted = false;
    muteBtn.textContent = "🔇";
  }
  else {
    video.muted = true;
    muteBtn.textContent = "🔊";
  }
});