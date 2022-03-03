let img; // Declare variable 'img'.

function preload(){
  // img = loadImage('background.jpg');
}

function setup() {
  createCanvas(800, 533);
  // loadImage('assets/laDefense.jpg', img => {
  //   image(img, 0, 0);
  // });
  background('#d5e6e9');

  fill('rgba(0,255,0, 0.00)');
  let a = rect(200, 100, 200, 100, 20);

  fill('white')
  textSize(32);
  text('Game 1', 240, 160);
}

// function drawACircle(){
//   rect(100,100,100,100);
// }

function draw() {
  // image(img, 0, 0);
  
}
