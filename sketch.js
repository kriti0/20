var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createCanvas(1500,200,60,height/2);

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width+wall.width?2)){
    car.velocityX = 0;
    var deformation = o.5 * weight * speed * speed/22509
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
  
  }
  drawSprites();
}