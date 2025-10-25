const character = document.querySelector("#Character");
const hover1 = document.querySelector("#Hover1");
const bat = document.querySelector("#Bat");
const hover2 = document.querySelector("#Hover2");
const bat2 = document.querySelector("#Bat2");
const hover5 = document.querySelector("#Hover5");
const pumpkin = document.querySelector("#Pumpkin");
const hover8 = document.querySelector("#Hover8");
const pumpkin2 = document.querySelector("#Pumpkin2");
const hover9 = document.querySelector("#Hover9");
const hover6 = document.querySelector("#Hover6");
const hover7 = document.querySelector("#Hover7");
const H1 = document.querySelector("h1");
const H2 = document.querySelector("h2");
const hover3 = document.querySelector("#Hover3");
const hover4 = document.querySelector("#Hover4");
const batsong = document.querySelector("#Batsong");
const charactersong = document.querySelector("#Charactersong");
const ghostsong = document.querySelector("#Ghostsong");
const pumpkinsong = document.querySelector("#Pumpkinsong");
const spookysong = document.querySelector("#Spookysong");
const hover10 = document.querySelector("#Hover10");
const Start = document.querySelector("#start");

ghostsong.removeAttribute("controls");
charactersong.removeAttribute("controls");
batsong.removeAttribute("controls");
spookysong.removeAttribute("controls");
pumpkinsong.removeAttribute("controls");

function RemoveStart() {
  Start.remove();
}
Start.addEventListener("click", RemoveStart);
function CharacterPlay() {
  character.play();
  charactersong.load();
  charactersong.play();
}
function CharacterPause() {
  character.currentTime = 0;
  character.pause();
  charactersong.pause();
  charactersong.currentTime = 0;
}
character.removeAttribute("controls");
hover1.addEventListener("mouseenter", CharacterPlay);
hover1.addEventListener("mouseleave", CharacterPause);
hover10.addEventListener("mouseenter", CharacterPlay);
hover10.addEventListener("mouseleave", CharacterPause);

function BatPlay() {
  bat.play();
  bat.style.animation = "";
  batsong.load();
  batsong.play();
}
bat.removeAttribute("controls");
function BatPause() {
  bat.currentTime = 0;
  bat.pause();
  bat.style.animation = "none";
  batsong.pause();
  batsong.currentTime = 0;
}

hover2.addEventListener("mouseenter", BatPlay);
hover2.addEventListener("mouseleave", BatPause);
hover10.addEventListener("mouseenter", BatPlay);
hover10.addEventListener("mouseleave", BatPause);

function Bat2Play() {
  bat2.play();
  bat2.style.animation = "";
  batsong.load();
  batsong.play();
}
function Bat2Pause() {
  bat2.currentTime = 0;
  bat2.pause();
  bat2.style.animation = "none";
  batsong.pause();
  batsong.currentTime = 0;
}
bat2.removeAttribute("controls");
hover5.addEventListener("mouseenter", Bat2Play);
hover5.addEventListener("mouseleave", Bat2Pause);
hover10.addEventListener("mouseenter", Bat2Play);
hover10.addEventListener("mouseleave", Bat2Pause);

function PumpkinPause() {
  pumpkin.style.animation = "none";
  pumpkinsong.pause();
  pumpkinsong.currentTime = 0;
}
function PumpkinPlay() {
  pumpkin.style.animation = "";
  pumpkinsong.load();
  pumpkinsong.play();
  setTimeout(PumpkinsongTrim, 2000);
}
function PumpkinsongTrim() {
  pumpkinsong.pause();
}
hover8.addEventListener("mouseenter", PumpkinPlay);
hover8.addEventListener("mouseleave", PumpkinPause);
hover10.addEventListener("mouseenter", PumpkinPlay);
hover10.addEventListener("mouseleave", PumpkinPause);

function Pumpkin2Pause() {
  pumpkin2.style.animation = "none";
  pumpkinsong.pause();
  pumpkinsong.currentTime = 0;
}
function Pumpkin2Play() {
  pumpkin2.style.animation = "";
  pumpkinsong.load();
  pumpkinsong.play();
  setTimeout(PumpkinsongTrim, 2000);
}
hover9.addEventListener("mouseenter", Pumpkin2Play);
hover9.addEventListener("mouseleave", Pumpkin2Pause);
hover10.addEventListener("mouseenter", Pumpkin2Play);
hover10.addEventListener("mouseleave", Pumpkin2Pause);

function h1Pause() {
  H1.style.animation = "none";
  spookysong.pause();
  spookysong.currentTime = 0;
}
function h1Play() {
  H1.style.animation = "";
  spookysong.load();
  spookysong.play();
}

hover6.addEventListener("mouseenter", h1Play);
hover6.addEventListener("mouseleave", h1Pause);
hover10.addEventListener("mouseenter", h1Play);
hover10.addEventListener("mouseleave", h1Pause);

function GhostPause() {
  ghostsong.pause();
  ghostsong.currentTime = 0;
}
function GhostPlay() {
  ghostsong.load();
  ghostsong.play();
}
hover3.addEventListener("mouseenter", GhostPlay);
hover3.addEventListener("mouseleave", GhostPause);
hover4.addEventListener("mouseenter", GhostPlay);
hover4.addEventListener("mouseleave", GhostPause);
hover10.addEventListener("mouseenter", GhostPlay);
hover10.addEventListener("mouseleave", GhostPause);

function h2Pause() {
  H2.style.animation = "none";
  spookysong.pause();
  spookysong.currentTime = 0;
}

function h2Play() {
  H2.style.animation = "";
  spookysong.load();
  spookysong.play();
}

hover7.addEventListener("mouseenter", h2Play);
hover7.addEventListener("mouseleave", h2Pause);
hover10.addEventListener("mouseenter", h2Play);
hover10.addEventListener("mouseleave", h2Pause);
