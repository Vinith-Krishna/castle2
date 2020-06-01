var pillar1,pillar2;
var wall;
var door;

function setup() {
  createCanvas(1000,600);
  
  wall = createSprite(550,400,400,200);

  pillar1 = createSprite(350,300,40,400);
  pillar2 = createSprite(760,300,40,400);

  door = createSprite(550,450,80,100);
}

function draw() {
  background("white");  
  door.shapeColor = "white";
  triangle(330,100,370,100,350,50);
  triangle(740,100,780,100,760,50);

  drawSprites();
}