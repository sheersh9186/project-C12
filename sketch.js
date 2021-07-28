var runner, coin, bomb, energyDrink, track;
var boundarie1,  boundarie2;


function preload(){
  //pre-load images
  runner_run=loadAnimation("Runner-1.png", "Runner-2.png")
  coin=loadImage("coin.png")
  bomb=loadImage("bomb.png")
  energyDrink=loadImage("energyDrink.png")
  trackImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200, 200)
  track.addImage(trackImg)
  track.scale=1.2
  track.velocityY=10
  runner=createSprite(200, 170)
  runner.addAnimation("runing",runner_run)
  runner.scale=0.08
  boundarie1=createSprite(390, 200, 10, 390)
  boundarie1.visible=false
  boundarie2=createSprite(10, 200, 10, 390)
  boundarie2.visible=false
}

function draw() {
  background(0);

if(track.y>=400){
  track.y=height/2
}

if(runner.isTouching(boundarie1)){
  runner.setVelocity(0, 0)
  track.setVelocity(0, 0)
}

runner.x=mouseX
drawSprites()
}
