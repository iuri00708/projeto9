var box = createSprite(200,200)
function setup() {
  createCanvas(400,400);
  
}

function draw() 
{
  background("yellow")
  if(keyIsDown(RIGHT_ARROW)) {
    background("red")
  }
  drawSprites()
}




