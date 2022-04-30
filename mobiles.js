img3 = "";
STATUS = "";

function preload(){
    img3 = loadImage("mobiles.jpg");
}

function setup(){
    canvas = createCanvas(450 , 350);
    canvas.center();
}

function back(){
    window.location = "index.html";
}

function draw(){
    image( img3 , 0 , 0 , canvas.width , canvas.height);
}