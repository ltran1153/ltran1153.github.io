const character = document.querySelector("#Character");
const hover1 = document.querySelector("#Hover1");
const bat = document.querySelector("#Bat");
const hover2 = document.querySelector("#Hover2");
const bat2 = document.querySelector("#Bat2");
const hover5 = document.querySelector("#Hover5");
const pumpkin = document.querySelector("#Pumpkin");
const hover8 = document.querySelector("#Hover8");
function CharacterPlay() {
  character.play();
}
function CharacterPause() {
  character.currentTime = 0;
  character.pause();
}
character.removeAttribute("controls");
hover1.addEventListener("mouseenter", CharacterPlay);
hover1.addEventListener("mouseleave", CharacterPause);

function BatPlay() {
  bat.play();
}
bat.removeAttribute("controls");
function BatPause() {
  bat.currentTime = 0;
  bat.pause();
}

hover2.addEventListener("mouseenter", BatPlay);
hover2.addEventListener("mouseleave", BatPause);

function Bat2Play() {
  bat2.play();
}
function Bat2Pause() {
  bat2.currentTime = 0;
  bat2.pause();
}
bat2.removeAttribute("controls");
hover5.addEventListener("mouseenter", Bat2Play);
hover5.addEventListener("mouseleave", Bat2Pause);

function PumpkinPause() {
  pumpkin.style.animation = "none";
}
function PumpkinPlay() {
  pumpkin.style.animation = "";
}
hover8.addEventListener("mouseenter", PumpkinPlay);
hover8.addEventListener("mouseleave", PumpkinPause);
