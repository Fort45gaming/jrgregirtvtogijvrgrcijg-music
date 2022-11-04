function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function gotPoses(results){
    if(results.length>0){
        console.log(results);
     
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("leftWristx="+leftWristX+"leftWristy="+leftWristY+"rightWristx="+rightWristX+"rightWristy="+rightWristY);
    }
}

function draw(){
    image(video,0,0,600,500);
}
song="";
function preload(){
    song=loadSound("music.mp3");
}
function play(){
    song.play();
}