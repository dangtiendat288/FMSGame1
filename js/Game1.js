let bg;
let points;
let font;
let fontSize;
let letter;

function preload(){
  // font = loadFont('/arial.ttf');
  bg = loadImage('../images/backgroundGame1.jpeg');
}

function setup() {
  opentype.load('/arial.ttf', (err, f) => {
    if (err) {
      alert('Font could not be loaded: ' + err);
    } else {
      font = f
      console.log('font ready')

      fSize = 500
      msg = 'A'

      let x = width / 2 - 150
      let y = height / 2 + 200
      path = font.getPath(msg, x, y, fSize)
      console.log(path.commands)
    }
  })

  createCanvas(1280, 720);

  // fontSize = 500;
  // textFont(font);
  // textSize(fontSize);
  // letter = "A";
  // points = font.textToPoints(letter, 0, 0, fontSize, {
  //   sampleFactor: 0.1,
  //   simplifyThreshold: 0
  // });
  
  btnBack = new Clickable();
    btnBack.strokeWeight = 0;        //Stroke width of the clickable (float)
    btnBack.stroke = "#000";      //Border color of the clickable (hex number as a string)
    btnBack.textSize = 12;           //Size of the text (integer)
    // game2Btn.textFont = "sans-serif"; //Font of the text (string)
    btnBack.cornerRadius = 30;
    btnBack.textScaled = true;
    btnBack.text = "<";
    btnBack.textColor = "white";
    btnBack.locate(width / 50, height / 30);
    btnBack.resize(100, 100);
    btnBack.onOutside = function () {
      this.color = "#acb0e0";
    }
    btnBack.onHover = function () {
      this.color = "#b7d4ff";
    }
    btnBack.onPress = function () {
      window.location.replace('/index.html');
    } 

}

function draw() {
  background(bg);

  btnBack.draw();
  
  let title = 'Game 1';
  fill("#f5f5eb");
  noStroke();
  textSize(80);
  text(title, 150, 100);

  fill("white");
  noStroke();
  rect(150, 150, 980, 470, 20);

  drawingContext.setLineDash([10,20]);
  // stroke(100)
  fill("white");
  stroke("black")
  strokeWeight(10);
  for (let cmd of path.commands) {
    if (cmd.type === 'M') {
        beginShape()
        vertex(cmd.x, cmd.y)
    } else if (cmd.type === 'L') {
        vertex(cmd.x , cmd.y)
    } else if (cmd.type === 'C') {
        bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y)
    } else if (cmd.type === 'Q') {
        quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y)
    } else if (cmd.type === 'Z') {
        endShape(CLOSE)
    }
}

  // drawingContext.setLineDash([5,17]);
  // // stroke(100)
  // // line(0,0,100,100)
  // // push()
  // fill("white");
  // stroke("black")
  // strokeWeight(10);
  // beginShape()
  // for (let i = 0; i < points.length; i++) {
  //   const p = points[i]
  //   vertex(p.x + width / 2 - 150, p.y + height / 2 + 200)
  // }
  // endShape()
  // pop()
}