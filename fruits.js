img4 = "";
STATUS = "";

function preload(){
    img4 = loadImage("fruit-basket.jpg");
}

function setup(){
    canvas = createCanvas(450 , 350);
    canvas.center();
}

function back(){
    window.location = "index.html";
}

function draw(){
    image( img4 , 0 , 0 , canvas.width , canvas.height);
}