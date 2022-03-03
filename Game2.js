// Click and Drag an object

let shape1;
let shape2;

function setup() {
  createCanvas(800, 533);
  shape1 = new DraggableRect(450, 50, 30, 30);
  shape2 = new DraggableRect(485, 50, 60, 30);
}

function draw() {
  background(200, 400, 500);
  
  let title = 'Game 2';
  fill(255, 275, 150);
  stroke(0);
  textSize(60);
  text(title, 70, 90);
  
  let directions = 'Copy the building on the left!'
  fill(300, 0, 255);
  textSize(24);
  text(directions, 200, 175, 200, 200);
  
  let block = 'Blocks:';
  fill(0);
  textSize(20);
  text(block, 460, 40);
  
  fill("orange");
  stroke(400, 150, 0);
 
  rect(50, 300, 30, 30);
  
  
  shape1.over();
  shape1.update();
  shape1.show();
  shape2.over();
  shape2.update();
  shape2.show();

}

function mousePressed() {
  shape1.pressed();
  shape2.pressed();
}

function mouseReleased() {
  shape1.released();
  shape2.released();
}