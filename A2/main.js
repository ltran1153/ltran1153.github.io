//This is the list of html elements that is scripted for interactivity
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
const Shuffle = document.querySelector("#shuffle");
const Audio1 = document.querySelector("#audio1");
const Audio2 = document.querySelector("#audio2");
const Audio3 = document.querySelector("#audio3");
const Audio4 = document.querySelector("#audio4");

// This removes the default browser controls on my media.
BackgroundVideo.removeAttribute("controls");
AudioControls.removeAttribute("controls");
SongImage.removeAttribute("controls");

//class code: This allows my button to play and pause a video on click
// this is important for users to play and pause a song at will. Important for when users need to pause the song for another task and not lose progress.
Play.addEventListener("click", playPause); //The "click" event triggers when user clicks a specific thing
function playPause() {
  if (AudioControls.paused || AudioControls.ended) {
    // "||" means if one is true
    AudioControls.play(); // plays audio
    Play1.src = "./assets/pause.png"; // this switches the play Icon into pause Icon when audio is playing
    Play1.alt = "pause";
  } else {
    AudioControls.pause(); // pauses audio
    Play1.src = "./assets/play.png"; //switches Icon into play when audio is paused
    Play1.alt = "play";
  }
}
//class code that lets span show the total time of an audio source.
// this is important for users to visualize how long the song is going to last.
AudioControls.addEventListener("canplay", updateTotalTime); // "canplay" automatically triggers the function as long as it is logically possible

function updateTotalTime() {
  let AudioSeconds = AudioControls.duration.toFixed(0); //I used "toFixed" here to remove decimals from my audio. The ".duration" attribute lets you edit the media total duration
  let totalMin = Math.floor(AudioSeconds / 60); // this equation lets span display numbers by minutes and seconds
  let totalSec = AudioSeconds % 60;
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  TotalTime.textContent = `${totalMin}:${totalSec}`;
}
// class code that lets span show the current time of an audio source
// this is important for users to visualize how much time has passed on the song. Often listeners have favorite song parts timestamped
function updateCurrentTime() {
  let AudioSeconds = AudioControls.currentTime; // The .currentTime attribute lets you edit the media's current duration
  let totalMin = Math.floor(AudioSeconds / 60);
  let totalSec = Math.floor(AudioSeconds % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  CurrentTime.textContent = `${totalMin}:${totalSec}`;
}
// Class code that shows percentage of song that has played in the form of a progress bar
// this is important for users to more easily visualize how much of a song is left.
function updateTimeline() {
  //this finds percentage of current time compared to total time of audio
  let timePercent = AudioControls.currentTime / AudioControls.duration;
  console.log(timePercent);
  TimeProgress.value = timePercent; // the ".value" attribute lets you edit the value number of html inputs
  updateCurrentTime();
}
AudioControls.addEventListener("timeupdate", updateTimeline); //"timeupdate" event triggers based on "currentTime" attribute

//this function allows me to set audio volume based on slider value
//this is important so that users can change audio output of player without affecting other websites. I opted for sliders because I believe they are more accessibile than buttons
function VolumeControl() {
  AudioControls.volume = VolumeSlider.value / 100; // the .volume attribute lets me edit a media's volume output
}

VolumeSlider.addEventListener("input", VolumeControl); // The "input" event triggers when the user interacts with a html input

//This function skips to the end of audio, essentially playing the next audio
//This is important for users who want to skip the current song
function Forward() {
  AudioControls.currentTime = AudioControls.duration * 100; // current time of audio is 100% of audio duration
}
SkipEnd.addEventListener("click", Forward);
//this function brings user back to start of audio
//this is important for users who want to play the song again from the beginning, although there are other options for that in this media player.
function Back() {
  AudioControls.currentTime = AudioControls.duration * 0; // current time of audio is 0% of audio duration
}

SkipStart.addEventListener("click", Back);

// class code that allows user to skip directly to a specific time on audio based on progress bar value.
// this is important for users who want to listen to a specific part of a song
TimeProgress.addEventListener("click", jumpToTime);

function jumpToTime(ev) {
  // find how far from the left we clicked
  let clickX = ev.offsetX;
  // find how wide my timeline is
  let timeLineWidth = TimeProgress.offsetWidth;
  // find the ratio of click to width
  let clickPercent = clickX / timeLineWidth;
  // update the current time
  AudioControls.currentTime = AudioControls.duration * clickPercent;
}
// This function toggles a button that loops a song.
// This is important for users who wants to only listen to the same song.
function LoopToggle() {
  AudioControls.loop = !AudioControls.loop; // the ".loop" attribute lets me edit a media's loop abillity. This is a statement, and an opposite statement. !AudioControls.loop is the opposite of AudioControls.loop, meaning not loop

  if (AudioControls.loop) {
    Loop.style.backgroundColor = "rgba(173, 173, 173, 0.21)"; //changes color of button based on current state of loop.
  } else {
    Loop.style.backgroundColor = "rgb(255,255,255)";
  }
}

Loop.addEventListener("click", LoopToggle); //clicking this button will change the audio state between loop and not loop

//Classcode that automatically play the next song when current song ends.
// This is important because this player will likely be background tab that plays when user is doing something else
let currentSongNumber = 0;

// The group of songs that will be played
const songArray = [
  "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Hes.mp3",
  "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Dry-Down-feat-Ben-Snaath.mp3",
  "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Leapt.mp3",
  "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3",
];

function updateCurrentSong(songNumber) {
  // based on the input number, change out the src of our source
  AudioSource.src = songArray[songNumber];

  AudioControls.load(); // ".load" loads a specified source
  AudioControls.play(); // ".play" starts playing the loaded source
}

AudioControls.addEventListener("ended", playNextOnEnd); // "ended" is an event that triggers when a media ends

//  In this section I will match an image to a song using the same logic and scripts that I used for the songs.
// To do this, I converted my images into mp4 format and matched their durations with the images.
// Matching an image to a song is important because every song needs a visual indentity to accompany it so that people know what they are or will listen to. Images are easier to process than words, thats why every song has a cover in addition to its name.
function playNextOnEnd() {
  if (currentSongNumber < songArray.length - 1) {
    updateCurrentSong(currentSongNumber + 1);
    currentSongNumber += 1;
  } else {
    // loop back to start of array
    updateCurrentSong(0);
    currentSongNumber = 0;
  }
}
let currentImageNumber = 0;
const ImageArray = [
  "./assets/Cover1.mp4",
  "./assets/Cover2.mp4",
  "./assets/Cover3.mp4",
  "./assets/Cover4.mp4",
];

function updateCurrentImage(ImageNumber) {
  ImageSource.src = ImageArray[ImageNumber];
  SongImage.load();
  // then begin playback
  SongImage.play();
}

SongImage.addEventListener("ended", playNextImage);
function playNextImage() {
  if (currentImageNumber < ImageArray.length - 1) {
    updateCurrentImage(currentImageNumber + 1);
    currentImageNumber += 1;
  } else {
    updateCurrentImage(0);
    currentImageNumber = 0;
  }
}
Play.addEventListener("click", playPauseImage);
function playPauseImage() {
  if (AudioControls.paused || AudioControls.ended) {
    SongImage.pause();
    Play1.src = "./assets/play.png";
    Play1.alt = "play";
  } else {
    SongImage.play();
    Play1.src = "./assets/pause.png";
    Play1.alt = "pause";
  }
}
TimeProgress.addEventListener("click", jumpToTimeImage);

function jumpToTimeImage(ev) {
  let clickX = ev.offsetX;
  let timeLineWidth = TimeProgress.offsetWidth;
  let clickPercent = clickX / timeLineWidth;
  SongImage.currentTime = SongImage.duration * clickPercent;
}

function ForwardImage() {
  SongImage.currentTime = SongImage.duration * 100;
}

SkipEnd.addEventListener("click", ForwardImage);

function BackImage() {
  SongImage.currentTime = SongImage.duration * 0;
}

SkipStart.addEventListener("click", BackImage);

function LoopToggleImage() {
  SongImage.loop = !SongImage.loop;
}

Loop.addEventListener("click", LoopToggleImage);
// this function would've been important for people who are bored of the same playlist structure.
//shuffle function: I could not get the shuffle function to work as intended
/*

//this is the Fisher Yates script that is widely used when wanting to shuffle an array. It is widely regarded to be very effective when programming randomness.
function fisherYatesShuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // When there are elements to shuffle, this function will pick a random element and swap it out with a current element
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// I could not get this function to work how I want for this project. Although this works in randomizing the songs and images, I want specific pairs of songs and images which I could not figure out.

Shuffle.addEventListener("click", fisherYatesShuffle(songArray)); */

//This function will allow users to play the exact song they want when they press the buttons on the sidebar.
//This function is important for users who want to select a specific song to hear
// This function manually loads and plays the specific source on click
function PlaySong1() {
  AudioSource.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Hes.mp3";
  ImageSource.src = "./assets/Cover1.mp4";
  ImageSource.alt = "Cover1";
  AudioControls.load();
  AudioControls.play();
  SongImage.load();
  SongImage.play();
  Play1.src = "./assets/pause.png"; //The pause Icon has to manually be changed, because original  PlayPause function does not change when button is pressed.
  Play1.alt = "pause";
  updateCurrentImage(0);
  currentImageNumber = 0; //this is to fix the issue where clicking the button disrupts the playlist cycle of the song, not playing the next intended song
  updateCurrentSong(0);
  currentSongNumber = 0;
}
function PlaySong2() {
  AudioSource.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Dry-Down-feat-Ben-Snaath.mp3";
  ImageSource.src = "./assets/Cover2.mp4";
  ImageSource.alt = "Cover2";
  AudioControls.load();
  AudioControls.play();
  SongImage.load();
  SongImage.play();
  Play1.src = "./assets/pause.png";
  Play1.alt = "pause";
  updateCurrentImage(1);
  currentImageNumber = 1;
  updateCurrentSong(1);
  currentSongNumber = 1;
}

function PlaySong3() {
  AudioSource.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Leapt.mp3";
  ImageSource.src = "./assets/Cover3.mp4";
  ImageSource.alt = "Cover3";
  AudioControls.load();
  AudioControls.play();
  SongImage.load();
  SongImage.play();
  Play1.src = "./assets/pause.png";
  Play1.alt = "pause";
  updateCurrentImage(2);
  currentImageNumber = 2;
  updateCurrentSong(2);
  currentSongNumber = 2;
}
function PlaySong4() {
  AudioSource.src =
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3";
  ImageSource.src = "./assets/Cover4.mp4";
  ImageSource.alt = "Cover4";
  AudioControls.load();
  AudioControls.play();
  SongImage.load();
  SongImage.play();
  Play1.src = "./assets/pause.png";
  Play1.alt = "pause";
  updateCurrentImage(3);
  currentImageNumber = 3;
  updateCurrentSong(3);
  currentSongNumber = 3;
}

Audio1.addEventListener("click", PlaySong1);
Audio2.addEventListener("click", PlaySong2);
Audio3.addEventListener("click", PlaySong3);
Audio4.addEventListener("click", PlaySong4);
/*
// this was my final attempt in trying to link the image with the song, so that It would still pair up when it was shuffled
function LinkSongAndImage() {
  if (updateCurrentSong(0)) {
    ImageSource.src = "./assets/Cover1.mp4";
    ImageSource.alt = "Cover1";

    SongImage.load();
    SongImage.Play();
  }
  if (updateCurrentSong(2)) {
    ImageSource.src = "./assets/Cover2.mp4";
    ImageSource.alt = "Cover2";

    SongImage.load();
    SongImage.Play();
  }

  if (updateCurrentSong(3)) {
    ImageSource.src = "./assets/Cover3.mp4";
    ImageSource.alt = "Cover3";

    SongImage.load();
    SongImage.Play();
  }
  if (updateCurrentSong(1)) {
    ImageSource.src = "./assets/Cover4.mp4";
    ImageSource.alt = "Cover4";
    SongImage.load();
    SongImage.Play();
  }
}*/
