song = "";
song2 = "";
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(600, 250);
    img = createCapture(VIDEO);
    img.hide();
}

function draw(){
    image(img, 0, 0, 300, 300);
}

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music.mp3");
}