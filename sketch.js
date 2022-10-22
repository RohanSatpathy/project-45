var ball, wall1, wall2, wall3, wall4, bottom, goal, bg, oppPaddle1, oppPaddle2, shoe, shoeImg;

function preload() {
  bg = loadImage("bg.png");
  ballImg = loadImage("bball.png");
  shoeImg = loadImage("shoe.png")
}

function setup() {
  createCanvas(850, 750);
  shoe = createSprite(425, 670, 75, 75);
  shoe.addImage("shoe", shoeImg);
  shoe.scale = 0.55;
  wall1 = createSprite(0, 0, 20, 1500);
  wall1.shapeColor = "black";
  wall2 = createSprite(850, 0, 20, 1500);
  wall2.shapeColor = "black";
  wall3 = createSprite(0, 0, 600, 20);
  wall3.shapeColor = "black";
  wall4 = createSprite(860, 0, 600, 20);
  wall4.shapeColor = "black";
  ball = createSprite(425, 300, 1, 1)
  ball.addImage("ball", ballImg);
  ball.scale = 0.4;
  bottom = createSprite(0, 750, 1700, 20);
  bottom.shapeColor = "red";
  goal = createSprite(430, 0, 260, 10);
  goal.shapeColor = "lightgreen";
}

function draw() {
  background(bg);
  shoe.x = mouseX;
  shoe.collide(wall1);
  shoe.collide(wall2);
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  ball.bounceOff(shoe);
  mousePressed();
  //if (ball.isTouching(goal)){}
  drawSprites();
}

function mousePressed(){
  ball.velocityX = 4;
  ball.velocityY = 5;
}