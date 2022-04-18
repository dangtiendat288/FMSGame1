//declare background img variable
let img;

// declare three clickables
var game1Btn;
var game2Btn;
var game3Btn;

//x and y of FMS
let xFMS;
let yFMS;

function preload(){
  img = loadImage('./images/HPbackground.jpg');
}

function setup() {
  createCanvas(1280, 720);
  background(img);

  xFMS = width / 2.3;
  yFMS = height / 5;

    //Create game1Btn  
    game1Btn = new Clickable();
    game1Btn.strokeWeight = 0;        //Stroke width of the clickable (float)
    game1Btn.stroke = "#FFF";      //Border color of the clickable (hex number as a string)
    game1Btn.textSize = 12;           //Size of the text (integer)
    // game2Btn.textFont = "sans-serif"; //Font of the text (string)
    game1Btn.cornerRadius = 20;
    game1Btn.textScaled = true;
    game1Btn.text = "Game 1";
    game1Btn.textColor = "white";
    game1Btn.locate(xFMS, yFMS + 70);
    game1Btn.resize(200, 100);
    game1Btn.onOutside = function () {
      this.color = "#615855";
    }
    game1Btn.onHover = function () {
      this.color = "#c09e82";
    }
    game1Btn.onPress = function () {
      window.location.replace('/game1.html');
    }

    //Create game2Btn  
    game2Btn = new Clickable();
    game2Btn.strokeWeight = 0;        //Stroke width of the clickable (float)
    game2Btn.stroke = "#FFF";      //Border color of the clickable (hex number as a string)
    game2Btn.textSize = 12;           //Size of the text (integer)
    // game2Btn.textFont = "sans-serif"; //Font of the text (string)
    game2Btn.cornerRadius = 20;
    game2Btn.textScaled = true;
    game2Btn.text = "Game 2";
    game2Btn.textColor = "white";
    game2Btn.locate(xFMS, yFMS + 250);
    game2Btn.resize(200, 100);
    game2Btn.onOutside = function () {
      this.color = "#615855";
    }
    game2Btn.onHover = function () {
      this.color = "#c09e82";
    }
    game2Btn.onPress = function () {
      window.location.replace('/game2.html');
    }

    //Create game3Btn  
    game3Btn = new Clickable();
    game3Btn.strokeWeight = 0;        //Stroke width of the clickable (float)
    game3Btn.stroke = "#FFF";      //Border color of the clickable (hex number as a string)
    game3Btn.textSize = 12;           //Size of the text (integer)
    // game2Btn.textFont = "sans-serif"; //Font of the text (string)
    game3Btn.cornerRadius = 20;
    game3Btn.textScaled = true;
    game3Btn.text = "Game 3";
    game3Btn.textColor = "white";
    game3Btn.locate(xFMS, yFMS + 430);
    game3Btn.resize(200, 100);
    game3Btn.onOutside = function () {
      this.color = "#615855";
    }
    game3Btn.onHover = function () {
      this.color = "#c09e82";
    }
    game3Btn.onPress = function () {
      window.location.replace('/game3.html');
    }
}

function draw() {
  let gameName = 'FMS';
  textSize(100);
  textStyle(BOLD);
  fill("#ffdf80");
  stroke("#c09e82");
  strokeWeight(5);
  text(gameName, xFMS, yFMS);
  
  game1Btn.draw();
  game2Btn.draw();
  game3Btn.draw();
}

    // //Create, style and resize clickables.
    // click1 = new Clickable();
    // click1.locate(20, 20);
    // //This function is ran when the clickable is hovered but not pressed.
    // click1.onHover = function () {
    //   this.color = "#AAAAFF";
    //   this.textColor = "#FFFFFF";
    //   this.text = "Yay!";
    // }
    // //This function is ran when the clickable is NOT hovered.
    // click1.onOutside = function () {
    //   this.color = "#EEEEEE";
    //   this.text = "Hello there!";
    //   this.textColor = "#000000";
    // }
    // //This function is ran when the clickable is pressed.
    // click1.onPress = function () {
    //   this.stroke = "#FF0000";
    // }
    // //This funcion is ran when the cursor was pressed and then
    // //rleased inside the clickable. If it was pressed inside and
    // //then released outside this won't work.
    // click1.onRelease = function () {
    //   this.x += 50;
    // }
    // click3 = new Clickable();
    // click3.image = clickImg;
    // click3.locate(280,250);
    // click3.resize(100,100);
    // click3.text = "";
    // click3.onHover = function () {
    //   this.color = "#AA33AA";
    //   this.noTint = false;
    //   this.tint = "#FF0000";
    // }
    // click3.onOutside = function () {
    //   this.color = "#FFFFFF";
    //   this.noTint = true;
    // }
  
    // // image will stretch to fill button by default
    // click4 = new Clickable();
    // click4.image = clickImg;
    // click4.imageScale = 1;
    // click4.text = "";
    // click4.locate(10, 200);
    // click4.resize(120, 90);
    // click4.onHover = function () {
    //   click4.imageScale = 1.1;
    // }
    // click4.onOutside = function () {
    //   click4.imageScale = 1;
    // }
  
    // // centered and fitted
    // click5 = new Clickable();
    // click5.image = clickImg;
    // click5.fitImage = true; // no stretching!
    // click5.imageScale = 1;
    // click5.text = "";
    // click5.locate(140, 200);
    // click5.resize(120, 90);
    // click5.onHover = function () {
    //   click5.imageScale = 1.1;
    // }
    // click5.onOutside = function () {
    //   click5.imageScale = 1;
    // }
