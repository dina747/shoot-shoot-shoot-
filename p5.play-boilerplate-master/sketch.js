var car1;
var speed,weight;
var two ;
var three ;
var four ;
var wall2 ;
var wall3 ;
var wall4 ;


function setup() {
  createCanvas(1600,400);
 
 
  wall1 = createSprite(1060,45,20,30);
  wall2 = createSprite(1060,130,20,30);
  wall3 = createSprite(1060,235,20,30);
  wall4 = createSprite(1060,350,20,30);

 car1 = createSprite(1041,45,20,10);

 
car1.velocityX =speed;


speed=random(55,90)
weight=random(400,1500)

if(wall1.x-car1.x < (car1.width+wall1.width)/2)
{
  car1.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
{
  car1.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car1.shapeColor=color(96,255,128);
}
if(deformation<100) 
{
  car1.shapeColor=color(80,208,255);
 } 

}

}
function draw() {

background("black");

drawSprites();
}
