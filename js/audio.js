let audio = document.getElementById("audio");

let icon_on = document.getElementById("music-on");
let icon_off = document.getElementById("music-off");

icon_off.style.display = "none";

function playAudio() {
  if (audio.paused) {
    icon_on.style.display = "none";
    icon_off.style.display = "block";
    audio.play();
  } else {
    icon_off.style.display = "none";
    icon_on.style.display = "block";
    audio.pause();
  }
}
