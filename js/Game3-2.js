let bg; 
let bg2;
let resetImage;
var timerValue = 100;
let s1x1=200;  s1x2=325;  s1x3=385;  s1x4=325;  s1x5=200; s1x6=143;
let s1y1=480;  s1y2=480;  s1y3=585;  s1y4=692;  s1y5=692; s1y6=585;
let s2x1=634;  s2x2=750;  s2x3=704;  s2x4=563;  s2x5=518;
let s2y1=475;  s2y2=560;  s2y3=700;  s2y4=700;  s2y5=560;
let s3x1=1019; s3x2=1100; s3x3=1120; s3x4=1064; s3x5=975; s3x6=917; s3x7=937;
let s3y1=477;  s3y2=516;  s3y3=603;  s3y4=674;  s3y5=674; s3y6=603; s3y7=515;
let isFinish=false;
let shape1Correct=false; shape2Correct=false; 
let shape3Correct=false; stopTimer = false;
let s = 'That is correct!';
let j = 'Move the shapes to the dotted placeholders'
let sound1; let soundAll;
let shape1sound = false; shape3sound = false;
let shape2sound = false; allcorsound = false;
var gif_loadImg, gif_createImg;

function setup() {
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
      window.location.replace('/game3.html');
    } 
  
    btnNext = new Clickable();
    btnNext.strokeWeight = 0;        
    btnNext.stroke = "#000";      
    btnNext.textSize = 11;           
    btnNext.cornerRadius = 30;
    btnNext.textScaled = true;
    btnNext.text = "Go Home";
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
      window.location.replace('/index.html');
    } 
}

function preload() {
  resetImage = loadImage('/FMSGame1/images/reset.png');
  soundFormats('mp3', 'ogg');
  sound1 = loadSound('/FMSGame1/sounds/correct1.mp3');
  soundAll = loadSound ('/FMSGame1/sounds/correctAll.mp3');
  gif_createImg = createImg("/FMSGame1/images/200w.webp");
}

function draw() {
  background(bg2);
  noStroke();
//   fill("Salmon");
//   textSize(16);
//   textAlign(CENTER);
//   text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
  
  fill('#F6EAC2');
    beginShape();
	vertex(s1x1, s1y1);
	vertex(s1x2, s1y2);
	vertex(s1x3, s1y3);
	vertex(s1x4, s1y4);
    vertex(s1x5, s1y5);
	vertex(s1x6, s1y6);
	endShape(CLOSE); 
  
  fill("#FFAEA5");
    beginShape();
	vertex(s2x1, s2y1);
	vertex(s2x2, s2y2);
	vertex(s2x3, s2y3);
	vertex(s2x4, s2y4);
    vertex(s2x5, s2y5);
	endShape(CLOSE); 
  
  fill('#97C1A9');
    beginShape();
	vertex(s3x1, s3y1);
	vertex(s3x2, s3y2);
	vertex(s3x3, s3y3);
	vertex(s3x4, s3y4);
    vertex(s3x5, s3y5);
	vertex(s3x6, s3y6);
    vertex(s3x7, s3y7);
	endShape(CLOSE);
  gif_createImg.position(1070, -50); 
  resetbutton.draw();
  btnBack.draw();
  if (isFinish){
  btnNext.draw();
}
  
  if (shape1Correct && shape2Correct && shape3Correct){
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
}

function mousePressed() {
  
  if (
  mouseX>s1x6 && mouseX<s1x3&& 
  mouseY>s1y1 && mouseY<s1y5 
){
  overShape1 = true;
  offs1x1 = mouseX - s1x1;
  offs1y1 = mouseY - s1y1;
  offs1x2 = mouseX - s1x2;
  offs1y2 = mouseY - s1y2;
  offs1x3 = mouseX - s1x3;
  offs1y3 = mouseY - s1y3;
  offs1x4 = mouseX - s1x4;
  offs1y4 = mouseY - s1y4;
  offs1x5 = mouseX - s1x5;
  offs1y5 = mouseY - s1y5;
  offs1x6 = mouseX - s1x6;
  offs1y6 = mouseY - s1y6;
} else {
  overShape1 = false;
}
  
  if (
  mouseX>s2x5 && mouseX<s2x2&& 
  mouseY>s2y1 && mouseY<s2y3
  ){
    overShape2 = true;
    offs2x1 = mouseX - s2x1;
    offs2y1 = mouseY - s2y1;
    offs2x2 = mouseX - s2x2;
    offs2y2 = mouseY - s2y2;
    offs2x3 = mouseX - s2x3;
    offs2y3 = mouseY - s2y3;
    offs2x4 = mouseX - s2x4;
    offs2y4 = mouseY - s2y4;
    offs2x5 = mouseX - s2x5;
    offs2y5 = mouseY - s2y5;
} else {
    overShape2 = false;
}
  
  
  
  if (
  mouseX>s3x6 && mouseX<s3x3&& 
  mouseY>s3y1 && mouseY<s3y4
  ){
    overShape3 = true;
    offs3x1 = mouseX - s3x1;
    offs3y1 = mouseY - s3y1;
    offs3x2 = mouseX - s3x2;
    offs3y2 = mouseY - s3y2;
    offs3x3 = mouseX - s3x3;
    offs3y3 = mouseY - s3y3;
    offs3x4 = mouseX - s3x4;
    offs3y4 = mouseY - s3y4;
    offs3x5 = mouseX - s3x5;
    offs3y5 = mouseY - s3y5;
    offs3x6 = mouseX - s3x6;
    offs3y6 = mouseY - s3y6;
    offs3x7 = mouseX - s3x7;
    offs3y7 = mouseY - s3y7;
  } else {
    overShape3 = false;
    } 
}

function mouseReleased() {
  overShape1 = false; 
  overShape2 = false;
  overShape3 = false;
}

function mouseDragged(){
  if (overShape1) {
      s1x1 = mouseX-offs1x1; s1y1 = mouseY-offs1y1;
      s1x2 = mouseX-offs1x2; s1y2 = mouseY-offs1y2;
      s1x3 = mouseX-offs1x3; s1y3 = mouseY-offs1y3;
      s1x4 = mouseX-offs1x4; s1y4 = mouseY-offs1y4;
      s1x5 = mouseX-offs1x5; s1y5 = mouseY-offs1y5;
      s1x6 = mouseX-offs1x6; s1y6 = mouseY-offs1y6;
  if (((s1x1>570)&&(s1x1<590)) && ((s1y1>135)&&(s1y1<150))){
    s1x1=581;  s1x2=702;  s1x3=761;  s1x4=701;  s1x5=578; s1x6=518;
    s1y1=147;  s1y2=147;  s1y3=252;  s1y4=358;  s1y5=357; s1y6=252;
    shape1Correct = true;
  if(!shape1sound){
      sound1.play();
      shape1sound = true;
    } 
  }
}
  if (overShape2) {
    s2x1 = mouseX-offs2x1; s2y1 = mouseY-offs2y1;
    s2x2 = mouseX-offs2x2; s2y2 = mouseY-offs2y2;
    s2x3 = mouseX-offs2x3; s2y3 = mouseY-offs2y3;
    s2x4 = mouseX-offs2x4; s2y4 = mouseY-offs2y4;
    s2x5 = mouseX-offs2x5; s2y5 = mouseY-offs2y5; 
  if (((s2x1>250)&&(s2x1<265)) && ((s2y1>135)&&(s2y1<150))){
    s2x1=257;  s2x2=372;  s2x3=329;  s2x4=185;  s2x5=141; 
    s2y1=142;  s2y2=227;  s2y3=362;  s2y4=362;  s2y5=226; 
    shape2Correct = true; 
    if(!shape2sound){
    sound1.play();
    shape2sound = true;
    }
  }
}
  
  if (overShape3) {
    s3x1 = mouseX-offs3x1; s3y1 = mouseY-offs3y1;
    s3x2 = mouseX-offs3x2; s3y2 = mouseY-offs3y2;
    s3x3 = mouseX-offs3x3; s3y3 = mouseY-offs3y3;
    s3x4 = mouseX-offs3x4; s3y4 = mouseY-offs3y4;
    s3x5 = mouseX-offs3x5; s3y5 = mouseY-offs3y5;
    s3x6 = mouseX-offs3x6; s3y6 = mouseY-offs3y6;
    s3x7 = mouseX-offs3x7; s3y7 = mouseY-offs3y7;
  if (((s3x1>1010)&&(s3x1<1030)) && ((s3y1>135)&&(s3y1<160))){
    s3x1=1019;  s3x2=1100;  s3x3=1120;  s3x4=1063;  s3x5=973; s3x6=917; s3x7=939;
    s3y1=154;  s3y2=193;  s3y3=279;  s3y4=351;  s3y5=351; s3y6=282; s3y7=193;
    shape3Correct = true;
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
  isFinish = false;
  shape1sound = false; shape3sound = false;
  shape2sound = false; allcorsound = false;
  shape1Correct=false; shape2Correct=false; 
  shape3Correct=false; stopTimer = false;
  s1x1=200;  s1x2=325;  s1x3=385;  s1x4=325;  s1x5=200; s1x6=143;
  s1y1=480;  s1y2=480;  s1y3=585;  s1y4=692;  s1y5=692; s1y6=585;
  s2x1=634;  s2x2=750;  s2x3=704;  s2x4=563;  s2x5=518;
  s2y1=475;  s2y2=560;  s2y3=700;  s2y4=700;  s2y5=560;
  s3x1=1019; s3x2=1100; s3x3=1120; s3x4=1064; s3x5=975; s3x6=917; s3x7=937;
  s3y1=477;  s3y2=516;  s3y3=603;  s3y4=674;  s3y5=674; s3y6=603; s3y7=515;
  timerValue = 100;
  resetbutton.draw();
  btnBack.draw();
}