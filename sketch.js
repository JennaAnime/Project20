var bullet,wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed= random(55,90)
  weight= random(30,50)
  thickness= random(22,83)
  bullet= createSprite(50,200,50,50)
  wall= createSprite (1500,200,60,height/2)
  bullet.velocityX= speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage > 10){

      wall.shapeColor= color('red');
    }
  else{wall.shapeColor='green'}
  
  }
  drawSprites();
}