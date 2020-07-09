var bullets;
var wall;
var speed;
var weight;
var thickness;


function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
 weight=random(30,52);
 bullets=createSprite(50,200,50,20);
 bullets.shapeColor="white";
 wall=createSprite(1500,200,thickness,height/2);
 wall.shapeColor=(80,80,80);
thickness=random(22,83);

 bullets.velocityX=speed;
}

function draw() {
  background(0);  


if(hascollided(bullets,wall)){
  bullets.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


  drawSprites();
}


function hascollided(lbullet,lwall){

  bulletsRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletsRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}