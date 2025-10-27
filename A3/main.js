//list of all html elements that will be part of interactive scripting
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
const attributions = document.querySelector("#Attributions");
const attributions2 = document.querySelector("#Attributions2");
const Footer = document.querySelector("footer");
//removing default browser controls from all video and songs
ghostsong.removeAttribute("controls");
charactersong.removeAttribute("controls");
batsong.removeAttribute("controls");
spookysong.removeAttribute("controls");
pumpkinsong.removeAttribute("controls");
//This function removes the "start" div, once it is clicked. The "start" div acts as an opening menu and not part of the main project experience. Making users click to remove this div will allow video and audio to start being playable.
function RemoveStart() {
  Start.remove();
}
Start.addEventListener("click", RemoveStart);

//this will play or pause the character video based on whether mouse is on or off the trigger
function CharacterPlay() {
  character.play();
  charactersong.load(); //there will be a sound clip that plays with each image hovered that fits the theme of that image.
  charactersong.play();
}
function CharacterPause() {
  character.currentTime = 0; //resets the animation back to start once mouse leaves the trigger to keep the artwork neat and consistent.
  character.pause();
  charactersong.pause();
  charactersong.currentTime = 0;
}
//mouseenter makes video play, mouseleave makes video pause and reset
//hover10 is the "moon" image, it will have the ability to play every single animation at once
character.removeAttribute("controls");
hover1.addEventListener("mouseenter", CharacterPlay);
hover1.addEventListener("mouseleave", CharacterPause);
hover10.addEventListener("mouseenter", CharacterPlay);
hover10.addEventListener("mouseleave", CharacterPause);
//CSS animations still have to be reset once mouse leaves trigger. animation = "none" disables the animation and resets it to its default position, meanwhile animation = "" changes animation state back to default
function BatPlay() {
  bat.play();
  bat.style.animation = ""; //this means that the css animation state is default
  batsong.load();
  batsong.play();
}
bat.removeAttribute("controls");
function BatPause() {
  bat.currentTime = 0;
  bat.pause();
  bat.style.animation = "none"; //this means that the css animation is disabled
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
  setTimeout(PumpkinsongTrim, 2000); //I only wanted to play the first 2 seconds of this soundclip. setTimeout will trigger a function that pauses song after 2000 milliseconds (2seconds)
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

// I could not use a regular hover function for the footer because users won't be able to click on the links since it will disappear once mouse leaves.
// These set of functions make it so that when cursor is over trigger, the footer display will not change states until cursor is not over trigger a second time.
function FooterReveal() {
  Footer.style.display = "block";
}
function Remove() {
  attributions.style.display = "none";
  Footer.style.display = "block";
}
function Remove2() {
  attributions.style.display = "block";
  Footer.style.display = "none";
}
function FooterDisappear() {
  Footer.style.display = "none";
}
//function works by having 2 identical looking triggers stacked on top of 1 another.
// When mouse leaves the top "attributions", the top "attributions" will disappear. Footer display ="block"
// When mouse leaves the bottom "attributions2", the top "attributions" will reappear. Footer display = "none"
//essentially toggling between two different states.

attributions.addEventListener("mouseenter", FooterReveal);
attributions.addEventListener("mouseleave", Remove);
attributions2.addEventListener("mouseleave", Remove2);
attributions2.addEventListener("mouseenter", FooterDisappear);

//Reflection:
// I believe that my use of Javascript in this project was very effective in achieving what I wanted to do. As I accounted for all of the possible interactivity issues that might have presented itself in my project.
// I had a hard time figuring out how to appropriately add the attributions to artists in this project because of my using position: fixed and project not having the abillity to scroll.
//I think implementing the footer and giving the user abillity to click links in a "hover" context was the most difficult part, and I am happy I found a creative and project appropriate solution to the issue.
