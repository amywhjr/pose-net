noseX=0;
noseY=0;
difference=0;
rightWristX=0
leftWristX=0
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("#00ff00");
    //document.getElementById("squarqe_")
    fill("red");
    stroke("orange");
    square(noseX,noseY,difference);
}
function modelLoaded()
{
    console.log("pose net is initialized")
}
function gotPoses(results)
{
    if (results.length>0) 
    {
     console.log(results)
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;  
     console.log("noseX"+noseX);
     console.log("noseY"+noseY);

     leftWristX=results[0].pose.leftWrist.x;
     rightWristX=results[0].pose.rightWrist.x;
     console.log("leftWristX"+leftWristX);
     console.log("rightWristX"+rightWristX);
     difference=floor(leftWristX-rightWristX);

    }
}