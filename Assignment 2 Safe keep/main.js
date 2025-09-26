const BackgroundVideo = document.querySelector("#background");
const SongImage = document.querySelector("#image");
const ImageSource = document.querySelector("#imagesource");
const AudioControls = document.querySelector("#audiocontrols");
const AudioSource = document.querySelector("#audiosource");
const TotalTime = document.querySelector("#totaltime");
const CurrentTime = document.querySelector("#currenttime");
const TimeProgress = document.querySelector("#timeprogress");
const Play1 = document.querySelector("#play1");
const Play = document.querySelector("#play");
const VolumeSlider = document.querySelector("#volumeslider");
const SkipStart = document.querySelector("#skipstart");
const SkipEnd = document.querySelector("#skipend");
const Loop = document.querySelector("#loop");
BackgroundVideo.removeAttribute("controls");
SongImage.removeAttribute("controls");
AudioControls.removeAttribute("controls");
Play.addEventListener("click", playPause);
function playPause() {
  if (AudioControls.paused || AudioControls.ended) {
    AudioControls.play();
    Play1.src = "./assets/pause.png";
    Play1.alt = "pause";
  } else {
    AudioControls.pause();
    Play1.src = "./assets/play.png";
    Play1.alt = "play";
  }
}

AudioControls.addEventListener("canplay", updateTotalTime);

function updateTotalTime() {
  let AudioSeconds = AudioControls.duration.toFixed(0);
  let totalMin = Math.floor(AudioSeconds / 60);
  let totalSec = AudioSeconds % 60;
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  TotalTime.textContent = `${totalMin}:${totalSec}`;
}

function updateCurrentTime() {
  let AudioSeconds = AudioControls.currentTime;
  let totalMin = Math.floor(AudioSeconds / 60);
  let totalSec = Math.floor(AudioSeconds % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  CurrentTime.textContent = `${totalMin}:${totalSec}`;
}

function updateTimeline() {
  /* find percentage of total time */
  let timePercent = AudioControls.currentTime / AudioControls.duration;
  console.log(timePercent);
  TimeProgress.value = timePercent;
  updateCurrentTime();
}
AudioControls.addEventListener("timeupdate", updateTimeline);

function VolumeControl() {
  AudioControls.volume = VolumeSlider.value / 100;
}

VolumeSlider.addEventListener("input", VolumeControl);

function Forward() {
  AudioControls.currentTime = AudioControls.duration * 100;
}

SkipEnd.addEventListener("click", Forward);

function Back() {
  AudioControls.currentTime = AudioControls.duration * 0;
}

SkipStart.addEventListener("click", Back);



function LoopToggle() {
  AudioControls.loop = !AudioControls.loop;
   
  if (AudioControls.loop) {
        Loop.style.backgroundColor = ""
      } else {
        loopBtn.classList.remove("active");
}
}