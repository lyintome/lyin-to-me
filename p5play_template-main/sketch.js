var square
function setup() {
  createCanvas(1000,1000);
  square=createSprite (200,200,20,20);
}

function draw()
{
  background(30);
  if (keyDown("up")){square.y=square.y-3};
  if (keyDown("down")){square.y=square.y+3};
  if (keyDown("left")){square.x=square.x-3};
  if (keyDown("right")){square.x=square.x+3};
drawSprites();
}




