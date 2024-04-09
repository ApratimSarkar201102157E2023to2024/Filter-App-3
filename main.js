leftEyeX=0;
rightEyeX=0;
leftEyeY=0;
rightEyeY=0;

function preload() {  
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
    if (results.length > 0) 
    {
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        console.log("right eye x = " + results[0].pose.rightEye.x);
        console.log("right eye y = " + results[0].pose.rightEye.y);
        console.log("left eye x = " + results[0].pose.leftEye.x);
        console.log("left eye y = " + results[0].pose.leftEye.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, leftEyeX, leftEyeY, 30, 30);
    image(clown_nose, rightEyeX, rightEyeY, 30, 30);
}


function take_snapshot() {
    save('myFilterImage.png');
}