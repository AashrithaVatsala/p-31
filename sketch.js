var ground1, ground2, ground3, ground4;

function setup() {
  createCanvas(480 ,800);

  ground1  = new Ground(240, 780, 480, 20)
 
}

function draw() {
  background(0);  
  drawSprites();

  ground1.display();

}