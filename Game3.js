let bg;
let cirX = 1040;
let cirY = 570;
let recX = 150;
let recY = 470;
const triRadius = 100;
const triDiameter = triRadius*2;
let shapeMove = false;
let shape2Move = false;

function setup() {
  bg = loadImage('images/backgroundGame3.png');
  createCanvas(1280, 720);

  btnBack = new Clickable();
    btnBack.strokeWeight = 0;        //Stroke width of the clickable (float)
    btnBack.stroke = "#000";      //Border color of the clickable (hex number as a string)
    btnBack.textSize = 12;           //Size of the text (integer)
    // game2Btn.textFont = "sans-serif"; //Font of the text (string)
    btnBack.cornerRadius = 30;
    btnBack.textScaled = true;
    btnBack.text = "<";
    btnBack.textColor = "white";
    btnBack.locate(width / 60, height / 100);
    btnBack.resize(100, 100);
    btnBack.onOutside = function () {
      this.color = "#7989a3";
    }
    btnBack.onHover = function () {
      this.color = "#c0dacc";
    }
    btnBack.onPress = function () {
      window.location.replace('index.html');
    }
}

function draw() {
  background(bg);
  noStroke();
  btnBack.draw();

  let title = 'Game 3';
  fill(255, 275, 150);
  stroke(0);
  textSize(80);
  text(title, 150, 100);
  
  fill('#F6EAC2');
  rect (recX,recY,triDiameter,triDiameter);
  
  fill("#FFAEA5");
  triangle (540,660,760,660,650,470);
  
  fill('#97C1A9');
  circle(cirX,cirY,triDiameter);
}

function mousePressed(){
  let d = dist (mouseX, mouseY, cirX, cirY);
  let e = dist (mouseX, mouseY, recX, recY);
  if (d<triRadius){
    shapeMove = true;
  } else {
    shapeMove = false;
  }
  if (e<triRadius){
    shape2Move = true;
  } else {
    shape2Move = false;
  }
  
}

function mouseReleased(){
  shapeMove = false;
  shape2Move = false;
}

function mouseDragged(){
  if (shapeMove){
    cirX = mouseX;
    cirY = mouseY;
  }
  if (shape2Move){
    recX = mouseX;
    rexY = mouseY;
  }
}