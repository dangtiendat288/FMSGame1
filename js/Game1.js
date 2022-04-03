let bg;
let resetImage;
let points;
let font;
let fontSize;
let letter;
let timer
let finish
let score
let checkpoints

let canvasWidth = 1280;
let canvasHeight = 720;

let correctBell;
let incorrectBell;

function preload(){
  // font = loadFont('/arial.ttf');
  bg = loadImage('../images/backgroundGame1.jpeg');
  resetImage = loadImage('../images/reset.png');
  opentype.load('/arial.ttf', (err, f) => {
    if (err) {
      alert('Font could not be loaded: ' + err);
    } else {
      font = f
      console.log('font ready')

      fSize = 500
      msg = 'A'
      let x = canvasWidth / 2 - 150
      let y = canvasHeight / 2 + 200
      path = font.getPath(msg, x, y, fSize)    
      console.log(path.commands)
    }
  })

  correctBell = loadSound('sounds/correctBell.mp3')
  incorrectBell = loadSound('sounds/incorrectBell.mp3')
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
   resetSketch()
}

  function arrow(x1, y1, x2, y2){  
  dx = (x2 - x1);
  dy = (y2 - y1);

  norm = Math.sqrt(dx * dx + dy * dy)
  udx = dx / norm
  udy = dy / norm

  ax = udx * Math.sqrt(3)/2 - udy * 1/2

  ay = udx * 1/2 + udy * Math.sqrt(3)/2

  bx = udx * Math.sqrt(3)/2 + udy * 1/2

  by =  - udx * 1/2 + udy * Math.sqrt(3)/2

  line(x1, y1, x2, y2);
  line(x1, y1, x1 + 20 * ax, y1 + 20 * ay);
  line(x1, y1, x1 + 20 * bx, y1 + 20 * by);
}

function resetSketch(){
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

    btnNext = new Clickable();
    btnNext.strokeWeight = 0;        //Stroke width of the clickable (float)

    btnNext.cornerRadius = 30;
    btnNext.textScaled = true;
    btnNext.text = ">";
    btnNext.textColor = "white";
    btnNext.locate(width / 2 + 70, height * 0.685);
    btnNext.resize(135, 135);
    btnNext.onOutside = function () {
      this.color = "#acb0e0";
    }
    btnNext.onHover = function () {
      this.color = "#b7d4ff";
    }
    btnNext.onPress = function () {
      window.location.replace('/index.html');
    }   

    btnReset = new Clickable();
    btnReset.strokeWeight = 0;        //Stroke width of the clickable (float)
    // game2Btn.textFont = "sans-serif"; //Font of the text (string)
    btnReset.cornerRadius = 30;
    btnReset.textScaled = true;
    btnReset.text = "";
    btnReset.textColor = "white";
    btnReset.locate(width / 3, height * 0.685);
    btnReset.resize(135, 135);
    btnReset.image = resetImage;
    btnReset.fitImage = true;
    btnReset.imageScale = 0.45;
    btnReset.onOutside = function () {
      this.color = "#acb0e0";
    }
    btnReset.onHover = function () {
      this.color = "#b7d4ff";
    }
    btnReset.onPress = function () {
      resetSketch();
    }

  finish = false;
  score = 0
  timer = 5
  checkpoints = [
    {x: 520,y: 545, passed: false},
    {x: 575,y: 430, passed: false},
    {x: 635,y: 230, passed: false},
    {x: 665,y: 230, passed: false},
    {x: 730,y: 430, passed: false},
    {x: 790,y: 545, passed: false}
  ];
  background(bg);

  fill("#f5f5eb");
  textStyle(BOLD)
  textAlign(LEFT)
  noStroke();
  textSize(80);
  text('Game 1', 150, 100);

  fill("white");
  noStroke();
  rect(150, 150, 980, 470, 20);

  drawingContext.setLineDash([0]);
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

  drawingContext.setLineDash([10, 20]);
  stroke("#AAAADE")
  strokeWeight(10);
  arrow(635, 230, 520, 545);
  arrow(790, 545, 665, 230);
  arrow(730, 430, 575, 430);
}

function draw() {
  btnBack.draw();

  if(!finish){
    fill('#A8C4FE')
    noStroke()
    ellipse(1023, 255, 150);

    fill('white')
    textAlign(CENTER)
    text(timer, 1024, 275)
  } else {
    btnNext.draw();
    btnReset.draw();

  }

  fill("#ADB1E1");
  noStroke();
  rect(width * 0.543, 20, 420, 110, 20);
  
  fill("#F5F5EB");
  textStyle(BOLD);
  textAlign(LEFT)
  noStroke();
  textSize(65);
  text('Score: ', width * 0.57, 100);
  
  fill("#F5F5EB");
  textStyle(NORMAL);
  noStroke();
  textAlign(CENTER)
  textSize(65);
  text(Math.round(score), width * 0.79, 100);
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

  //score calculation
  if(timer == 0 && finish == false){
    
    passCount = 0;
    percent = 0;

    checkpoints.forEach(item => {
      passCount += item.passed == true ? 1 : 0    
    })
  
  //end game notification
  
  percent = passCount / 6 * 100

  if (score >= 0 && passCount >= 4){
    header = 'Congratulation!'
    correctBell.play();
  } else if (score < 10 && passCount >= 1) {
    header = 'Trace the paths please!'
    percent = passCount / 16 * 100 
    incorrectBell.play()
  } else {
    header = 'Try Again!'
    incorrectBell.play()
  }

  fill("white");
  noStroke();
  rect(150, 150, width - 300, height - 200, 20);

  fill("#ADAFE0");
  noStroke();
  rect(150, 150, width - 300, height - 550, 20);
    
  fill('white')
  noStroke();
  textSize(80);
  textStyle(BOLD);
  textAlign(CENTER)
  text(header, width / 2, 270);

  fill('#ADAFE0')
  noStroke();
  textSize(65);
  textStyle(NORMAL);
  text(`You got ${Math.round(percent)}%`, width / 2, 450);
 
  finish = true;
  }
}

function mouseDragged() {
  if (!finish && mouseX >= 175 && mouseX <= 1105 && mouseY >= 175 && mouseY <= 150 + 470 - 25){
    if (rayCasting([mouseX, mouseY], path.commands)){
      fill("green");
      score += 0.07;
      for(i = 0; i < checkpoints.length; i++){                
        if(checkpoints[i].x - 10 <= mouseX && mouseX <= checkpoints[i].x + 10
          && checkpoints[i].y - 10 <= mouseY && mouseY <= checkpoints[i].y + 10){
            checkpoints[i].passed = true;
            console.log(checkpoints[i].x, checkpoints[i].passed)
          }
        }
      }
      else {
        fill("red");
        score -= 0.07;
      }
      noStroke();
      ellipse(mouseX, mouseY, 40);
    }
    
    // console.log(rayCasting([mouseX, mouseY], path.commands))
  }
  
  function rayCasting(point, letter){
    let n = letter.length;
    let count = 0;
    let x = point[0];
    let y = point[1];
    
    for (let i = 0; i < n - 1; i++){
      let side = {
        a: {
          x: letter[i].x,
          y: letter[i].y,
        },
        b: {
          x: letter[i + 1].x,
          y: letter[i + 1].y,
        }
      }
      
      let x1 = side.a.x,
      x2 = side.b.x,
      y1 = side.a.y,
      y2 = side.b.y;
      
      if(y < y1 != y < y2 &&
        x < (x2 - x1) * (y - y1) / (y2 - y1) + x1){
          count += 1;
        }
      }
      return count % 2 != 0;
    }

    // function mousePressed() {  
    //   console.log(mouseX);
    //   fill("green");
    //   noStroke();
    //   ellipse(150, 150, 50, 50, 20);
    // }