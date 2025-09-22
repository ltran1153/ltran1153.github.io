const popButton = document.querySelector("#popButton")
const popAudio = document.querySelector("#popAudio")
/* this function plays the popping sound*/
function playPop(){
    popAudio.play();
}

/*run playPop on click*/
popButton.addEventListener("click", playPop);

/* Play/puase button behavior:
onclick Play
onclick again pause
feedback:
toggle icon based on playing state
cursor change on hover */

/* Timeline Behvavior:
update to show current media time
click on timeline to jump to certain time
*/

/* find element I want to interact with */
const videoElement = document.querySelector("#videoplayer");
const playPauseButton = document.querySelector("#popButton");
/* when JS loads remove default controls */
videoElement.removeAttribute("controls");

function Kekw() {
    if(videoElement.paused || videoElement.ended) {
        videoElement.play
        playPauseButton.src ="<img src="./assets/playbutton.png" />
        playPauseButton.src = "<img src="./assets/pausebutton.png"/>
    }
    else {
        videoElement.pause()
    }
}
playPauseButton.addEventListener("click", Kekw)

function updateTimeline(){
    console.log("hey")
    console.log (videoElement.currentTime);
    let timePercent = (videoElement.currentTime / videoElement.duration * 100)
    timeline.value =0;

}

function