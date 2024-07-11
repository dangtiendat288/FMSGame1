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

let maxStrikes = 3;

// let block1 = false;
// let block2 = false;
// let block3 = false;
// let block4 = false;
// let block5 = false;
// let block6 = false;
//Means that game has not yet been won
let block7 = false;
//Means there are no blocks currently placed
let currentBlock = 0;


//counting variables used so strike sound won't play forever (see where strike sound is played for more information)
let m = 0;
let n = 0;
let o = 0;
let p = 0;

//how many strikes does the user start with
let strikes = 0;

// let strike1 = false;
// let strike2 = false;
// let strike3 = false;

//All of the sound variables (strikesm winning, etc.)
let strikeText;
let strikeSound;
let playsound;
let winSound;
let gameOver;

//Instructions and or Game Over/win screen
let directions;

//What loads before the game even appears
function preload() {
  strikeSound = loadSound("/FMSGame1/sounds/Family feud-buzzer.mp3");
  winSound = loadSound("/FMSGame1/sounds/ding.mp3");
  gameover = loadSound("/FMSGame1/sounds/Gameover.mp3");
}

//what happens when reset button is pressed
function reset() {
  bg = loadImage("/FMSGame1/images/bgGame2.png");
  //set all variables and counts back to their initial values upon reset.
  strikes = 0;
  block7 = false;
  currentBlock = 0;
  m = 0;
  n = 0;
  o = 0;
  p = 0;
  
  // background(bg);
  // bg = loadImage("bgGame2.png");

  //game text (set all game text back to initial values)
  let title = "Game 2";
  fill(255, 275, 150);
  stroke(0);
  textSize(80);
  text(title, width / 8.53, height / 7.2);
  //bank setup (Blocks go back to spawn positions upon reset)
  //small blocks
  shape1 = new DraggableRect(width / 1.68, height / 12, 45, 45);
  shape3 = new DraggableRect(width / 1.57, height / 12, 45, 45);
  shape4 = new DraggableRect(width / 1.471, height / 12, 45, 45);
  shape5 = new DraggableRect(width / 1.383, height / 12, 45, 45);
  shape6 = new DraggableRect(width / 1.306, height / 12, 45, 45);
  shape7 = new DraggableRect(1035, height / 12, 45, 45);
  shape8 = new DraggableRect(1090, height / 12, 45, 45);

  //long blocks
  shape2 = new DraggableRect(760, height / 6, 90, 45);
  shape9 = new DraggableRect(860, height / 6, 90, 45);
  shape10 = new DraggableRect(960, height / 6, 90, 45);

  //set blocks-in-position back to false upon restart
  //  block1 = false;
  // block2 = false;
  // block3 = false;
  // block4 = false;
  // block5 = false;
  // block6 = false;
  // block7 = false;
  // block8 = false;

  //the actual reset button
  btnReset = new Clickable();
  btnReset.strokeWeight = 0; //Stroke width of the clickable (float)
  btnReset.stroke = "#000"; //Border color of the clickable (hex number as a string)
  btnReset.textSize = 30; //Size of the text (integer)
  // game2Btn.textFont = "sans-serif"; //Font of the text (string)
  btnReset.cornerRadius = 30;
  // btnReset.textScaled = true;
  btnReset.text = "Restart";
  btnReset.textColor = "pink";
  btnReset.locate(width * 0.395, height * 0.75);
  btnReset.resize(200, 100);
  btnReset.onOutside = function () {
    this.color = 95;
  };
  btnReset.onHover = function () {
    this.color = "#67e2c5";
  };
  //call the reset function when reset button is pressed
  btnReset.onPress = function () {
    // window.location.replace("/index.html");
    reset();
  };
}

function setup() {
  createCanvas(1280, 720);
  // bg = loadImage("../images/backgroundGame2.png");
  //         bg = loadImage("bgGame2.png");

  //   // background(bg);
  //       // bg = loadImage("bgGame2.png");

  //   //game text
  //   let title = "Game 2";
  //   fill(255, 275, 150);
  //   stroke(0);
  //   textSize(80);
  //   text(title, width / 8.53, height / 7.2)
  //   //bank setup
  //   //small blocks
  //   shape1 = new DraggableRect(760, 60, 45, 45);
  //   shape3 = new DraggableRect(815, 60, 45, 45);
  //   shape4 = new DraggableRect(870, 60, 45, 45);
  //   shape5 = new DraggableRect(925, 60, 45, 45);
  //   shape6 = new DraggableRect(980, 60, 45, 45);
  //   shape7 = new DraggableRect(1035, 60, 45, 45);
  //   shape8 = new DraggableRect(1090, 60, 45, 45);

  //   //long blocks
  //   shape2 = new DraggableRect(760, 120, 90, 45);
  //   shape9 = new DraggableRect(860, 120, 90, 45);
  //   shape10 = new DraggableRect(960, 120, 90, 45);

  //button to go back to app homescreen
  btnBack = new Clickable();
  btnBack.strokeWeight = 0; //Stroke width of the clickable (float)
  btnBack.stroke = "#000"; //Border color of the clickable (hex number as a string)
  btnBack.textSize = 12; //Size of the text (integer)
  // game2Btn.textFont = "sans-serif"; //Font of the text (string)
  btnBack.cornerRadius = 30;
  btnBack.textScaled = true;
  btnBack.text = "<";
  btnBack.textColor = "white";
  btnBack.locate(width / 100, height / 50);
  btnBack.resize(100, 100);
  btnBack.onOutside = function () {
    this.color = "#025954";
  };
  btnBack.onHover = function () {
    this.color = "#67e2c5";
  };
  btnBack.onPress = function () {
    window.location.href = 'https://dangtiendat288.github.io/FMSGame1/';
  };
  
  //button to set game to easy mode
  btnEz = new Clickable();
  btnEz.strokeWeight = 0; //Stroke width of the clickable (float)
  btnEz.stroke = "#000"; //Border color of the clickable (hex number as a string)
  btnEz.textSize = 12; //Size of the text (integer)
  // game2Btn.textFont = "sans-serif"; //Font of the text (string)
  btnEz.cornerRadius = 30;
  btnEz.textScaled = true;
  btnEz.text = "Easy";
  btnEz.textColor = "white";
  btnEz.locate(width / 1.1, height / 2.9);
  btnEz.resize(100, 100);
  btnEz.onOutside = function () {
    this.color = "Green";
  };
  btnEz.onHover = function () {
    this.color = "#67e2c5";
  };
  btnEz.onPress = function () {
    maxStrikes = 3;
  };
  //button to set mode to Medium
  btnMedium = new Clickable();
  btnMedium.strokeWeight = 0; //Stroke width of the clickable (float)
  btnMedium.stroke = "#000"; //Border color of the clickable (hex number as a string)
  btnMedium.textSize = 20; //Size of the text (integer)
  // game2Btn.textFont = "sans-serif"; //Font of the text (string)
  btnMedium.cornerRadius = 30;
  btnMedium.textScaled = true;
  btnMedium.text = "Medium";
  btnMedium.textColor = "white";
  btnMedium.locate(width / 1.1, height / 2);
  btnMedium.resize(100, 100);
  btnMedium.onOutside = function () {
    this.color = "Orange";
  };
  btnMedium.onHover = function () {
    this.color = "#df3a01";
  };
  btnMedium.onPress = function () {
    maxStrikes = 2;
  };
  
  //button to set mode to hard
   btnHard = new Clickable();
  btnHard.strokeWeight = 0; //Stroke width of the clickable (float)
  btnHard.stroke = "#000"; //Border color of the clickable (hex number as a string)
  btnMedium.textSize = 12; //Size of the text (integer)
//Font of the text (string)
  btnHard.cornerRadius = 30;
  btnHard.textScaled = true;
  btnHard.text = "Hard";
  btnHard.textColor = "white";
  btnHard.locate(width / 1.1, height / 1.5);
  btnHard.resize(100, 100);
  btnHard.onOutside = function () {
    this.color = "Red";
  };
  btnHard.onHover = function () {
    this.color = "#df3a01";
  };
  btnHard.onPress = function () {
    maxStrikes = 1;
  };
  reset();
}


function draw() {
  // background(200, 400, 500);
  background(bg);

  btnReset.draw();
  btnBack.draw();
  btnEz.draw();
  btnMedium.draw();
  btnHard.draw();
  
  //game text
  
  //which mode is user in?
  let modeText;
  if (maxStrikes == 3) {
    modeText = "Easy";
    fill("Green");
    stroke(0);
    textSize(52);
    text(modeText, width / 2.3, height / 5.9)
    }
  else if(maxStrikes == 2) {
    modeText = "Medium"
     fill("Orange");
    stroke(0);
    textSize(52);
    text(modeText, width / 2.5, height / 5.9)
  }
  else {
    modeText = "Hard"
    fill("Red");
    stroke(0);
    textSize(52);
    text(modeText, width / 2.4, height / 5.9)
  }
  
  //game title
  let title = "Game 2";
  fill(255, 275, 150);
  stroke(0);
  textSize(80);
  text(title, width / 8.53, height / 7.2);
  text(title, 150, 100);

  noStroke();
  fill("black");
  rect(width / 2.6, height / 2.4, 224, 220, 35);

  fill("#fcfcc5");
  stroke("black");
  rect(width * 0.594, height * 0.25, 350, 500);
  
  //label the build zone
  let buildZone = "^ Build Zone ^";
  stroke(0);
  textSize(40);
  text(buildZone, width / 1.58, height / 1)

  

  //win screen (when game has been won)
  if (block7 == true) {
    while (o == 0) {
      winSound.play();
      o++;
    }
    textSize(40);
    directions = "Correct!";
    fill("#82e133");
    textAlign(CENTER);
    text(directions, width / 2.62 + 20, 390, 200, 200);
    //text(directions, width / 2.6 + 20, 335 )
    fill("#82e133");

    
  } else if (strikes >= maxStrikes) {
    while (p == 0) {
      gameover.play();
      p++;
    }

    textSize(40);
    directions = "Game Over";
    fill("#f76767");
    textAlign(CENTER);
    text(directions, width / 2.62 + 20, 365, 200, 200);
    // playsound = true;
    // while (playsound && m <= 1) {
    //   gameOver.playSound();
    //   }
  } else {
    directions = "Copy the structure on the left!";
    fill("white");
    textSize(40);

    text(directions, width / 2.6 + 20, 335, 200, 200);
    //textAlign(RIGHT)
    // textSize(40);
    //text(directions, width / 2.6 + 20, 335, 200, 200);
  }

  textAlign(LEFT);
  // text(directions, width / 2.6 +20, height / 2, 200, 200);
  if (strikes == 1 && strikes != maxStrikes) {
    while (m == 0) {
      strikeSound.play();
      m++;
    }
    textSize(40);
    strikeText = "X";
    fill("red");
    text(strikeText, width * 0.42, height * 0.0694, 200, 200);
  } else if (strikes == 2 && strikes != maxStrikes) {
    while (n == 0) {
      strikeSound.play();
      n++;
    }
    textSize(40);
    strikeText = "X  X";
    fill("red");
    text(strikeText, width * 0.42, height * 0.0694, 200, 200);
  } else if (strikes == 3) {
    textSize(40);
    strikeText = "X  X  X";
    fill("red");
    text(strikeText, width * 0.42, height * 0.0694, 200, 200);
  }

  let block = "Blocks:";
  fill(0);
  noStroke();
  textSize(35);
  text(block, 880, 40);

  //Example structure Home
  fill("#cfcfcf");
  stroke("black");
  rect(100, 180, 350, 500);

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
  fill("#fcfcc5");
  stroke("black");
  rect(width * 0.594, height * 0.25, 350, 500);

  strikes = 0;
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

  // line(800, height * 0.25 + 400, 1200, height * 0.25 + 400);
  // line(800, height * 0.25 + 600, 1000, height * 0.25 + 600);
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