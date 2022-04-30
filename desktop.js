img = "";
STATUS = "";

function preload(){
    img = loadImage("desktop.jpg");
}

function setup(){
    canvas = createCanvas(450 , 350);
    canvas.center();
}

function back(){
    window.location = "index.html";
}

function draw(){
    image( img , 0 , 0 , canvas.width , canvas.height);
}