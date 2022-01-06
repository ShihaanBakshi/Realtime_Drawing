var noseX = 0;
var noseY = 0;
diffrence = 0;
rightwristX = 0;
leftwristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',getPoses); 
}

function getPoses(results){
if(results.length>0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = "+noseX+"noseY = "+noseY);

leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;
diffrence = floor(leftwristX-rightwristX);
console.log("left wristx = "+leftwristX+"right wristx = "+rightwristX+"diffrence = "+diffrence);
}
}

function modelLoaded(){
console.log('poseNet Is Initialized');
}

function draw(){
background('#969A97');
fill('#000000');
stroke('#FFFFFF');
circle(noseX,noseY,diffrence);

}