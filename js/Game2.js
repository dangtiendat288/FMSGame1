// // Click and Drag an object

let shape1;
let shape2;
let shape3;
let shape4;
let shape5;
let shape6;
let shape7;
let shape8;
let shape9;
let shape10;


function setup() {
  createCanvas(1280, 720);
  bg = loadImage("../images/backgroundGame2.png");
//   bg = loadImage("bgGame2.png");
  //bank setup
  //small blocks
  shape1 = new DraggableRect(760, 60, 45, 45);
  shape3 = new DraggableRect(815, 60, 45, 45);
  shape4 = new DraggableRect(870, 60, 45, 45);
  shape5 = new DraggableRect(925, 60, 45, 45);
  shape6 = new DraggableRect(980, 60, 45, 45);
  shape7 = new DraggableRect(1035, 60, 45, 45);
  shape8 = new DraggableRect(1090, 60, 45, 45);
  
  //long blocks
  shape2 = new DraggableRect(760,120, 90, 45);
  shape9 = new DraggableRect(860, 120, 90, 45);
  shape10 = new DraggableRect(960, 120, 90, 45);
  
  btnBack = new Clickable();
  btnBack.strokeWeight = 0;        //Stroke width of the clickable (float)
  btnBack.stroke = "#000";      //Border color of the clickable (hex number as a string)
  btnBack.textSize = 12;           //Size of the text (integer)
  // game2Btn.textFont = "sans-serif"; //Font of the text (string)
  btnBack.cornerRadius = 30;
  btnBack.textScaled = true;
  btnBack.text = "<";
  btnBack.textColor = "white";
  btnBack.locate(width / 100, height / 50);
  btnBack.resize(100, 100);
  btnBack.onOutside = function () {
    this.color = "#025954";
  }
  btnBack.onHover = function () {
    this.color = "#67e2c5";
  }
  btnBack.onPress = function () {
    window.location.replace('/index.html');
  }
}

function draw() {
  // background(200, 400, 500);
  background(bg);

  btnBack.draw();
  
  //game text
  let title = 'Game 2';
  fill(255, 275, 150);
  stroke(0);
  textSize(80);
  text(title, 150, 100);
  
  noStroke();
  fill("#025954");
  rect(width / 2.6, height / 2.4, 224, 220, 35);

  let directions = 'Copy the structure on the left!'
  fill("white");
  textSize(40);
  text(directions, width / 2.6 + 20, 335, 200, 200);
  
  let block = 'Blocks:';
  fill(0);
  noStroke()
  textSize(35);
  text(block, 880, 40);
  
  fill("#cfcfcf")
  stroke("black")
  rect(100, 180, 350, 500)
  
  
  //example structure
    fill("orange");
  stroke("#cf8215");
 rect(245, 280, 45, 45);
  
    fill("orange");
  stroke("#cf8215");
 rect(200, 326, 90, 45);
  
    fill("orange");
  stroke("#cf8215");
 rect(200, 372, 45, 45);
  
  fill("orange");
  stroke("#cf8215");
 rect(200, 418, 45, 45);
  
  fill("orange");
  stroke("#cf8215");
 rect(200, 464, 45, 45);
  
  fill("orange");
  stroke("#cf8215");
 rect(200, 510, 45, 45);
  
    fill("orange");
  stroke("#cf8215");
 rect(200, 556, 45, 45);
  
  
  //build area
  fill("#fcfcc5")
  stroke("black")
  rect(760, 180, 350, 500)
  
  shape1.over();
  shape1.update();
  shape1.show();
  shape2.over();
  shape2.update();
  shape2.show();
  shape3.over();
  shape3.update();
  shape3.show();
   shape4.over();
  shape4.update();
  shape4.show();
   shape5.over();
  shape5.update();
  shape5.show();
   shape6.over();
  shape6.update();
  shape6.show();
   shape7.over();
  shape7.update();
  shape7.show();
   shape8.over();
  shape8.update();
  shape8.show();
   shape9.over();
  shape9.update();
  shape9.show();
  shape10.over();
  shape10.update();
  shape10.show();
  

}

function mousePressed() {
  shape1.pressed();
  shape3.pressed();
  shape4.pressed();
  shape5.pressed();
  shape6.pressed();
  shape7.pressed();
  shape8.pressed();
  
  shape2.pressed();
  shape9.pressed();
  shape10.pressed();
  
  
}

function mouseReleased() {
  shape1.released();
  shape3.released();
  shape4.released();
  shape5.released();
  shape6.released();
  shape7.released();
  shape8.released();
  
  shape2.released();
  shape9.released();
  shape10.released();
}