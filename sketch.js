var car ,wall;
var speed,weight;
var background;
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(200, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  //backround=createSprite(100,200,30,30);
  car=createSprite(1400,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
  }
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor=color(0,255,0)
  }
  
}

function draw() {
  background("black"); 
 // car.shapeColor(r,g,b); 
  drawSprites();
 // background.display();
  car.display();
  wall.display();
 
}
function hasCollided(lbullet,lwall){
  bulletRig(lbullet.x+bullet.width);
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLefttEdge){
    return true 
  }
  return false; 
}