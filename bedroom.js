img2 = "";
STATUS = "";

function preload(){
    img2 = loadImage("Master-bedroom.jpg");
}

function setup(){
    canvas = createCanvas(450 , 350);
    canvas.center();
}

function back(){
    window.location = "index.html";
}

function draw(){
    image( img2 , 0 , 0 , canvas.width , canvas.height);
}