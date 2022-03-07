//declare background img variable
let img;

// declare three clickables
var game1Btn;
var game2Btn;
var game3Btn;


function preload(){
  img = loadImage('./HPbackground.jpg');
}

function setup() {
  createCanvas(1280, 720);
  background(img);

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
    game1Btn.locate(250, 130);
    game1Btn.resize(200, 100);
    game1Btn.onOutside = function () {
      this.color = "#659e57";
    }
    game1Btn.onHover = function () {
      this.color = "#90e57f";
    }
    game1Btn.onPress = function () {
      window.location.replace('game1.html');
    }   
}

function draw() {
  let gameName = 'FMS';
  textSize(70);
  fill("#fff0ad");
  stroke("black");
  strokeWeight(5);
  text(gameName, width / 2.2, height / 5);
  
  // fill('rgba(145, 243, 139, 50)');
  // noStroke()
  // rect(250, 130, 200, 100, 20);

  // fill('white')
  // noStroke()
  // textSize(32);
  // text('Game 1', 295, 190);
  
  //Game 2 button
  fill('rgba(157, 125, 241, 50)');
  noStroke()
  rect(250, 270, 200, 100, 20);

  fill('white')
  noStroke()
  textSize(32);
  text('Game 2', 295, 330);

  //Game 3 button
  fill('rgba(255, 179, 58, 50)');
  noStroke()
  rect(250, 410, 200, 100, 20);

  fill('white')
  noStroke()
  textSize(32);
  text('Game 3', 295, 470);
  
  game1Btn.draw();
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