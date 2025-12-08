function playAudioAndChangeImage() {
    var image = document.getElementById("player");
    var audio = document.getElementById("audioRadio");
    audio.play();
    image.src = "images/play.png"; 
}