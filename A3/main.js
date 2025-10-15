const character = document.querySelector("#Character");

function CharacterPlay() {
  character.play();
}
function CharacterPause() {
  character.currentTime = 0;
  character.pause();
}
character.removeAttribute("controls");
character.addEventListener("mouseenter", CharacterPlay);
character.addEventListener("mouseleave", CharacterPause);
