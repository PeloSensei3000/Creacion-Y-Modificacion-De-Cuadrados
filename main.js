xNose=0;
yNose=0;
diferencia=0;
xWristL=0;
xWristR=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 90);
    postNet=ml5.poseNet(video, modelLoaded);
    postNet.on('pose', gotPoses);
}
function draw(){
    background("gray");
    fill('crimson');
    stroke('purple');
    square(xNose, yNose, diferencia);
    document.getElementById("square_side").innerHTML="Ancho Y Alto Del Cuadrado Es De: "+diferencia+"px";
}
function modelLoaded(){
    console.log("Modelo Cargado?")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        xNose=results[0].pose.nose.x;
        yNose=results[0].pose.nose.y;
        console.log("cordenada narizx= "+xNose+"cordenada narizy= "+yNose);
        xWristL=results[0].pose.leftWrist.x;
        xWristR=results[0].pose.rightWrist.x;
        diferencia=floor(xWristL - xWristR);
        console.log("leftWrist="+xWristL+"rightWrist="+xWristR+", diferencia="+diferencia);
    }
}