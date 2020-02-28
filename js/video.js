var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
	console.log("Play Video");
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.2;
  	console.log("Speed is "+ video.playbackRate);
} 

/*original attempt
function skipAhead() {
	var video = video.currentTime
	var skip = video.currentTime + 60
	skip = video.currentTime

	if(video.ended){
		video.currentTime = 0
		video.playbackRate = 1
	}

	console.log("Current location is "+ video.currentTime);
}
*/

function skipAhead() {
	var vid = document.getElementById("myVideo");
	vid.currentTime += 60;
	if (video.ended) {
		vid.currentTime = 0;
	}

	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted) {
  		console.log("Changing to Unmute");
  		video.muted = false;
  		document.getElementById("mute").innerHTML = "Unmute";
  	}
  	else {
      	console.log("Changing to Mute");
      	video.muted = true;
      	document.getElementById("mute").innerHTML = "Mute";
  	}
}

function changeVolume() {
	var volume = document.querySelector("#volume").value;
	video.volume = volumeSlider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("Volume is " + video.volume * 100);
}
    
function gray() { 
	video.classList.add("grayscale")
	console.log("In grayscale")
}        

function color() {
	video.classList.remove("grayscale")
	console.log("In color") 
}
