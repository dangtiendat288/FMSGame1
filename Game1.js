let points;
let bounds;
let font;
let fontSize;
let letter;

function preload(){
  font = loadFont('arial.ttf');
  // bg = loadImage('backgroundGame1.jpeg');
}

function setup() {
  createCanvas(1280, 720);
  fontSize = 500;
  textFont(font);
  bg = loadImage('backgroundGame1.jpeg');
  // textSize(fontSize);
  letters = "A";
  points = font.textToPoints(letters[0], 0, 0, fontSize, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });
  console.log(points);

}

function draw() {
  // background("#8dc53d");
  background(bg);
  
  drawingContext.setLineDash([0]);
  let title = 'Game 1';
  fill("#fcf0af");
  noStroke();
  textSize(80);
  text(title, 150, 100);

  fill("white");
  noStroke();
  rect(150, 150, 980, 470);

  // stroke(100)
  drawingContext.setLineDash([5,17]);
  // line(0,0,100,100)

  // push()
  // translate(475, fontSize + 65)
  fill("white");
  stroke("black")
  strokeWeight(10);
  beginShape()
  for (let i = 0; i < points.length; i++) {
    const p = points[i]
    vertex(p.x + width / 2 - 150, p.y + height / 2 + 200)
  }
  endShape()
  // pop()

  // beginShape();
  // translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  // for (let i = 0; i < points.length; i++) {
  //   let p = points[i];
  //   vertex(
  //     p.x * width / bounds.w +
  //       sin(20 * p.y / bounds.h + millis() / 1000) * width / 30,
  //     p.y * height / bounds.h
  //   );
  // }
  // endShape(CLOSE);
}