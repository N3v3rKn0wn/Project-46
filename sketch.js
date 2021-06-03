var target;
var mouse;
var mouseimg;
var targetimg;
var targetimg, mouseimg;
function preload(){
  mouseimg=loadImage("image/optics.jpg");
  targetimg=loadImage("image/target.jpg") ;
}
function setup() {
  createCanvas(1800,900);

  mouse=createSprite(100,100,20,20);
  target=createSprite(700,120,100,100);
  target.x=Math.round(random(50,1750));
  target.y=Math.round(random(50,850));
  mouse.shapeColor="red";

  mouse.addImage(mouseimg);
  target.addImage(targetimg);

 target.scale=0.3;
 mouse.scale=0.3;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  textSize(100);
 text("Aim practice",700,300)
 textSize(50);
 text("click on the targets",700,500);

 mouse.x=World.mouseX;
 mouse.y=World.mouseY;
 lastX = mouse.x; 
 lastY= mouse.y;
  target.depth=mouse.depth;
  mouse.depth=mouse.depth+1;

  if (mouse.isTouching(target)&&mouseDown("leftButton")){
    target.destroy;
    target.x=Math.round(random(50,1750));
    target.y=Math.round(random(50,850));
  }
  
}