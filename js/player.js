function playAudioAndChangeImage() {
    var image = document.getElementById("player");
    var audio = document.getElementById("audioRadio");

    if (audio.paused) {
        audio.play();  
        image.src = "images/play.png"; 
    } else {
        audio.pause(); 
        image.src = "images/pause.png"; 
    } 
}