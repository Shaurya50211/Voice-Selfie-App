var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textBox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie...");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    var speakData = "Taking your selfie in 5 seconds";
    var speakThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(speakThis);
    Webcam.attach(camara);
    setTimeout(function () {
        takeSelfie();
        save();
    }, 50000);
}

var camara = document.getElementById("Webcam");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

function takeSelfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}