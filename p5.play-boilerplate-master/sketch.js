var fixedRect
var movingRect
var Object1


function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="lime"

 movingRect=createSprite(800, 500, 150, 50);
 movingRect.shapeColor="lime"

 Object1=createSprite(100,100,50,50)
 Object1.shapeColor="lime"

 movingRect.velocityX = -5
 Object1.velocityX = +5 

 movingRect.debug=true
 fixedRect.debug=true
}

function draw() {
  background(255,255,255);  
  // movingRect.x = World.mouseX
  // movingRect.y = World.mouseY

  // if(isTouching(Object1,movingRect)){
  // Object1.destroy()
  // movingRect.shapeColor="yellow"
  // }

  // else{
  // Object1.shapeColor="lime"
  // movingRect.shapeColor="lime"
  // }

  bounceOff(object1,movingRect)

  drawSprites();
}
