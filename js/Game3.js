let bg; 
let bg2;
let resetImage;
var timerValue = 100;
let cirX = 1040; cirY = 570 ; radius = 190;
let bx = 150; by = 470; boxSize = 185;
let x1=540; x2=760; x3=650; y1=660; y2=660; y3 =470; 
let level = -1;
let isFinish=false;
let triCorrect=false; cirCorrect=false; 
let recCorrect=false; stopTimer = false;
let s = 'That is correct!';
let j = 'Move the shapes to the dotted placeholders'
let sound1; let soundAll;
let shape1sound = false; shape3sound = false;
let shape2sound = false; allcorsound = false;


function setup() {
  bg = loadImage('/FMSGame1/images/backgroundGame3-1.png');
  bg2 = loadImage('/FMSGame1/images/backgroundGame3-2.jpg');
  createCanvas(1280, 720);  
  setInterval(timeIt, 1000);
  resetbutton = new Clickable();
    resetbutton.strokeWeight = 0;
    resetbutton.cornerRadius = 30;
    resetbutton.textScaled = true;
    resetbutton.text = "";
    resetbutton.textColor = "white";
    resetbutton.locate(15,120);
    resetbutton.resize(75, 75);
    resetbutton.image = resetImage;
    resetbutton.fitImage = true;
    resetbutton.imageScale = 0.45;
    resetbutton.onOutside = function () {
      this.color = "#A2B29F";
    }
    resetbutton.onHover = function () {
      this.color = "#BDD2B6";
    }
    resetbutton.onPress = function () {
    resetSketch();
    }
  
  btnBack = new Clickable();
    btnBack.strokeWeight = 0;        
    btnBack.stroke = "#000";      
    btnBack.textSize = 11;           
    btnBack.cornerRadius = 30;
    btnBack.textScaled = true;
    btnBack.text = "<";
    btnBack.textColor = "white";
    btnBack.locate(18, 24);
    btnBack.resize(76, 76);
    btnBack.onOutside = function () {
      this.color = "#A2B29F";
    }
    btnBack.onHover = function () {
      this.color = "#BDD2B6";
    }
    btnBack.onPress = function () {
      window.location.href = 'https://dangtiendat288.github.io/FMSGame1/';        
    } 
  
    btnNext = new Clickable();
    btnNext.strokeWeight = 0;        
    btnNext.stroke = "#000";      
    btnNext.textSize = 11;           
    btnNext.cornerRadius = 30;
    btnNext.textScaled = true;
    btnNext.text = "Next Level";
    btnNext.textColor = "white";
    btnNext.locate(550, 500);
    btnNext.resize(200, 76);
    btnNext.onOutside = function () {
      this.color = "#A2B29F";
    }
    btnNext.onHover = function () {
      this.color = "#BDD2B6";
    }
    btnNext.onPress = function () {
      level = 2;
      //nextlevel();
      window.location.replace('game3-2.html');
    } 
}

function preload() {
  resetImage = loadImage('/FMSGame1/images/reset.png');
  soundFormats('mp3', 'ogg');
  sound1 = loadSound('/FMSGame1/sounds/correct1.mp3');
  soundAll = loadSound ('/FMSGame1/sounds/correctAll.mp3');
}

function draw() {
  background(bg);
  noStroke();
   
  fill('#F6EAC2');
  rect(bx, by, boxSize, boxSize);
  
  fill("#FFAEA5");
  triangle (x1,y1,x2,y2,x3,y3);
  
  fill('#97C1A9');
  circle(cirX,cirY,radius);
  
  resetbutton.draw();
  btnBack.draw();
    if (isFinish){
  btnNext.draw();
  }
  
  if (triCorrect && recCorrect && cirCorrect){
    stopTimer = true;
    isFinish = true;
    stroke (20);
    fill('white');
    beginShape();
    vertex(830,75)  ; vertex(1100, 75);
    vertex(1100,110); vertex(1110,120);
    vertex(1100,130); vertex(830, 130);
    endShape();
    
    fill('green');
    textSize(32);
    text(s, 770, 90, 400, 200);
  } else {
    fill('#EEEEEE');
    textSize(20);
    text(j, 480, 80, 350, 200);
  }
  
    if (timerValue > 0) {
    fill ('#B4CFB0');
    textAlign(CENTER);
    text('Your Scores: ' + timerValue, width / 2, 50);
  } 
  // circle(260,274,190);
  // rect(548,171,185,185);
  // rect (1125,360,100,100);
}

function mousePressed() {
  let d = dist (mouseX, mouseY, cirX, cirY);
    if (d < radius){
    cirMove = true;
  } else {
    cirMove = false;
  } 
  
  if (
    mouseX > bx &&
    mouseX < bx + boxSize &&
    mouseY > by &&
    mouseY < by + boxSize
  ) {
    overRect = true;
    xOffset = mouseX - bx;
    yOffset = mouseY - by;
    } else {
    overRect = false;
    }
  
  if (mouseX > x1 &&
      mouseX < x2 &&
      mouseY > y3 &&
      mouseY < y1) 
  {
    overTri = true;
    offsetx1 = mouseX - x1;
    offsety1 = y1 - mouseY;
    offsetx2 = x2 - mouseX;
    offsety2 = y2 - mouseY;
    offsetx3 = x3 - mouseX;
    offsety3 = mouseY - y3;
  } else {
    overTri = false;
    } 
}


function mouseReleased() {
  cirMove  = false; 
  overRect = false;
  overTri  = false;
}

function mouseDragged(){
   if (cirMove) {
    cirX = mouseX;
    cirY = mouseY;
    if (((cirX>250)&&(cirX<270)) && ((cirY>264)&&(cirY<284))){
    cirX = 260;
    cirY = 274;
    cirCorrect = true;
      
    if(!shape1sound){
    sound1.play();
    shape1sound = true;
    } 
    }
  } 
  
   if (overRect) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
    if (((bx>538)&&(bx<558)) && ((by>161)&&(by<181))){
    bx = 548;
    by = 171;
    recCorrect = true; 
    if(!shape2sound){
    sound1.play();
    shape2sound = true;
    }
    }
  }
  
  if (overTri) {
    x1 = mouseX - offsetx1;
    y1 = mouseY + offsety1;
    x2 = mouseX + offsetx2;
    y2 = mouseY + offsety2;
    x3 = mouseX + offsetx3;
    y3 = mouseY - offsety3;
    if (((x3>1000)&&(x3<1030)) && ((y3>150)&&(y3<190))){
    x1 = 903;  y1 = 360;
    x2 = 1125; y2 = 360;
    x3 = 1015; y3 = 170;
    triCorrect = true;
    if(!shape3sound){
    sound1.play();
    shape3sound = true;
    }
    }
  }
}

  function timeIt() {
  if ((timerValue > 0) && (!stopTimer)) {
  timerValue = timerValue - 2;
    } if (stopTimer){
  timerValue = timerValue;
    if(!allcorsound){
    soundAll.play();
    allcorsound = true;
    //resetSketch();
    } 
    }
  }

function resetSketch() {
  background(bg);
  noStroke(); 
  isFinish = false;
  shape1sound = false; shape3sound = false;
  shape2sound = false; allcorsound = false;
  triCorrect=false; cirCorrect=false; 
  recCorrect=false; stopTimer = false;
  bx = 150; by = 470;
  x1=540; x2=760; x3=650; y1=660; y2=660; y3 =470;
  cirX = 1040; cirY = 570 ;
  timerValue = 100;
  resetbutton.draw();
  btnBack.draw();
}



  



