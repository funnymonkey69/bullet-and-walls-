function setup() {
  createCanvas(1200,800);
 bullet= createSprite(50, 200, 20, 30);
 speed=random(55,120)
 weight=random(30,150)
 thickness=random(22,83)
 wall=createSprite(800,200,thickness,80)
 bullet.velocityX=speed
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2)
  {
    bullet.velocityX=0
    damage=0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage>10)
    {
      bullet.shapeColor="red"
    }
    
  
    if(damage<10)
    {
      bullet.shapeColor="green"
    }
  }
  drawSprites();
}