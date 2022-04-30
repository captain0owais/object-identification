img = "";
STATUS = "";

function preload(){
    img = loadImage("desktop.jpg");
}

function setup(){
    canvas = createCanvas(450 , 350);
    canvas.center();

objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
}

function modelLoaded(){
console.log("cocossd INITIALIZED");
STATUS = true;
objectDetector.detect(img , gotResult);
}

function gotResult(error , result){
if(error){
    console.log(error);
}else{
    console.log(result);
}
}


function back(){
    window.location = "index.html";
}

function draw(){
    image( img , 0 , 0 , canvas.width , canvas.height);
}