//Declaration of game1's global variables
let bg;
let resetImage;
let points;
let font;
let fontSize;
let letter;
let timer;
let isFinish;
let isStarted = false;

let score = 0;
let checkpoints;
let isTimerVisible = false;

let canvasWidth = 1280;
let canvasHeight = 720;

//anchor points 
const xFMS = canvasWidth / 2.3;
const yFMS = canvasHeight / 5;

let correctBell;
let incorrectBell;

let chosenLevels = -1;

function preload(){
  // font = loadFont('/arial.ttf');
  bg = loadImage('/FMSGame1/images/backgroundGame1.jpg');
  resetImage = loadImage('/FMSGame1/images/reset.png');
  opentype.load('/FMSGame1/arial.ttf', (err, f) => {
    if (err) {
      alert('Font could not be loaded: ' + err);
    } else {
      console.log('font ready')
      font = f
    }
  })

  correctBell = loadSound('sounds/correctBell.mp3')
  incorrectBell = loadSound('sounds/incorrectBell.mp3')
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
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
      if(!isStarted){
        window.location.href('https://dangtiendat288.github.io/FMSGame1/');        
      } else if(isFinish || isStarted){
        isFinish = false;
        isStarted = false;
        isTimerVisible = false;
      }
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
      switch (chosenLevels){
        case 0:
          setUpMediumLevel()
          break;
        case 1:
          setUpHardLevel()
          break;          
      }
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
      resetSketch(chosenLevels);
    }

   //Create game1Btn  
   btn_easy = new Clickable();
   btn_easy.strokeWeight = 0;        //Stroke width of the clickable (float)
   btn_easy.stroke = "#FFF";      //Border color of the clickable (hex number as a string)
   btn_easy.textSize = 12;           //Size of the text (integer)
   // game2Btn.textFont = "sans-serif"; //Font of the text (string)
   btn_easy.cornerRadius = 20;
   btn_easy.textScaled = true;
   btn_easy.text = "Easy";
   btn_easy.textColor = "white";
   btn_easy.locate(xFMS + 230, yFMS + 50);
   btn_easy.resize(200, 100);
   btn_easy.onOutside = function () {
    this.color = "#acb0e0";
  }
  btn_easy.onHover = function () {
    this.color = "#b7d4ff";
  }
   btn_easy.onPress = function () {
     // Easy level set-up
     setUpEasyLevel();
   }

   //Create game2Btn  
   btn_medium = new Clickable();
   btn_medium.strokeWeight = 0;        //Stroke width of the clickable (float)
   btn_medium.stroke = "#FFF";      //Border color of the clickable (hex number as a string)
   btn_medium.textSize = 45;           //Size of the text (integer)
   // game2Btn.textFont = "sans-serif"; //Font of the text (string)
   btn_medium.cornerRadius = 20;
  //  btn_medium.textScaled = true;
   btn_medium.text = "Medium";
   btn_medium.textColor = "white";
   btn_medium.locate(xFMS + 230, yFMS + 230);
   btn_medium.resize(200, 100);
   btn_medium.onOutside = function () {
     this.color = "#acb0e0";
   }
   btn_medium.onHover = function () {
     this.color = "#b7d4ff";
   }
   btn_medium.onPress = function () {
     setUpMediumLevel() 
   }

   //Create game3Btn  
   btn_hard = new Clickable();
   btn_hard.strokeWeight = 0;        //Stroke width of the clickable (float)
   btn_hard.stroke = "#FFF";      //Border color of the clickable (hex number as a string)
   btn_hard.textSize = 12;           //Size of the text (integer)
   // game2Btn.textFont = "sans-serif"; //Font of the text (string)
   btn_hard.cornerRadius = 20;
   btn_hard.textScaled = true;
   btn_hard.text = "Hard";
   btn_hard.textColor = "white";
   btn_hard.locate(xFMS + 230, yFMS + 410);
   btn_hard.resize(200, 100);
   btn_hard.onOutside = function () {
     this.color = "#acb0e0";
   }
   btn_hard.onHover = function () {
     this.color = "#b7d4ff";
   }
   btn_hard.onPress = function () {
    //  Hard level set-up
    setUpHardLevel()
   }
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

function resetSketch(chosenLevels){
  background(bg);
  switch(chosenLevels){
    case 0:
      // easy level reset
      setUpEasyLevel()
      break;
    case 1:
      // medium level reset
      setUpMediumLevel()
      break;
    case 2:
      // hard level reset
      setUpHardLevel()
      break;
  }
}

function drawLetter(path){
  background(bg)
  fill("white");
  noStroke();
  rect(150, 150, 980, 470, 20);
  
  drawingContext.setLineDash([0]);  
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
}

function draw() {
  btnBack.draw();
  fill("#f5f5eb");
  textStyle(BOLD)
  textAlign(LEFT)
  noStroke();
  textSize(80);
  text('Game 1', 150, 100);
  // console.log(isStarted)
  if(!isFinish && !isStarted){
    fill("white");
    noStroke();
    rect(150, 150, 980, 540, 20);
    
    fill("#ADB1E1");
    noStroke();
    rect(width * 0.160, 200, 420, 440, 20);

    fill("#F5F5EB");
    textStyle(BOLD);
    textAlign(CENTER)
    noStroke();
    textSize(60);
    text('Select a level then start tracing the letter :D', width * 0.2, 245, 335);
    btn_easy.draw()
    btn_medium.draw()
    btn_hard.draw()
  } 
  
  if(!isFinish){
    if(isTimerVisible){
      fill('#A8C4FE')
      noStroke()
      ellipse(1023, 255, 150);

      fill('white')
      textAlign(CENTER)
      text(timer, 1024, 275)
    }
  } else {
    if(chosenLevels != 2){
      btnNext.draw();
    }
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
  if(timer == 0 && isFinish == false){
    
    passCount = 0;
    percent = 0;

    checkpoints.forEach(item => {
      passCount += item.passed == true ? 1 : 0    
    })
  
  //end game notification
  if(isStarted){
  switch(chosenLevels){
    case 0:
    percent = passCount / 3 * 100
    
    if (score >= 4 && passCount >= 1){
      header = 'Congratulation!'
      correctBell.play();
    } else if (score < 4 && passCount >= 0) {
      header = 'Trace the paths please!'
      percent = passCount / 7 * 100 
      incorrectBell.play()
    } else {
      header = 'Try Again!'
      incorrectBell.play()
    }
    break;
    case 1:    
    percent = passCount / 5 * 100
    
    if (score >= 10 && passCount >= 3){
      header = 'Congratulation!'
      correctBell.play();
    } else if (score < 10 && passCount >= 1) {
      header = 'Trace the paths please!'
      percent = passCount / 13 * 100 
      incorrectBell.play()
    } else {
      header = 'Try Again!'
      incorrectBell.play()
    }
    break;
    case 2:
      percent = passCount / 6 * 100
    
      if (score >= 10 && passCount >= 4){
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
    break;
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
 
  isFinish = true;
  }
  }
}

function mouseDragged() {
  if (!isFinish && mouseX >= 175 && mouseX <= 1105 && mouseY >= 175 && mouseY <= 150 + 470 - 25){
    if (rayCasting([mouseX, mouseY], path.commands)){
      fill("green");
      score += 0.07;
      for(i = 0; i < checkpoints.length; i++){                
        if(checkpoints[i].x - 10 <= mouseX && mouseX <= checkpoints[i].x + 10
          && checkpoints[i].y - 10 <= mouseY && mouseY <= checkpoints[i].y + 10){
            checkpoints[i].passed = true;
            console.log(checkpoints[i].x, checkpoints[i].y, checkpoints[i].passed)
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

function setUpEasyLevel(){
      // Medium level set-up
      chosenLevels = 0
      isFinish = false;
      score = 0
      timer = 20
      checkpoints = [
        {x: 620,y: 215, passed: false},
        {x: 620,y: 380, passed: false},
        {x: 620,y: 545, passed: false},
      ];      

        fSize = 500
        msg = 'I'
        let x = canvasWidth / 2 - 90
        let y = canvasHeight / 2 + 200
        path = font.getPath(msg, x, y, fSize)    
        console.log(path.commands)      
      
      drawLetter(path)
      drawingContext.setLineDash([10, 20]);
      stroke("#AAAADE")
      strokeWeight(10);
      arrow(620, 545, 620, 215);  

      isTimerVisible = true
      isStarted =  true
     
}

function setUpMediumLevel(){
      // Medium level set-up
      chosenLevels = 1
      isFinish = false;
      score = 0
      timer = 15
      checkpoints = [
        {x: 520,y: 230, passed: false},
        {x: 643,y: 230, passed: false},
        {x: 770,y: 230, passed: false},
        {x: 643,y: 387, passed: false},
        {x: 643,y: 545, passed: false}
      ];      

        fSize = 500
        msg = 'T'
        let x = canvasWidth / 2 - 150
        let y = canvasHeight / 2 + 210
        path = font.getPath(msg, x, y, fSize)    
        console.log(path.commands)      
      
      drawLetter(path)

      drawingContext.setLineDash([10, 20]);
      stroke("#AAAADE")
      strokeWeight(10);
      arrow(770, 230, 500, 230);
      arrow(643, 545, 643, 215);

      isTimerVisible = true
      isStarted =  true
     
}

function setUpHardLevel(){
      // Hard level set-up
      chosenLevels = 2
      isFinish = false;
      score = 0
      timer = 10
      checkpoints = [
        {x: 520,y: 545, passed: false},
        {x: 575,y: 430, passed: false},
        {x: 635,y: 230, passed: false},
        {x: 665,y: 230, passed: false},
        {x: 730,y: 430, passed: false},
        {x: 790,y: 545, passed: false}
      ];      

        fSize = 500
        msg = 'A'
        let x = canvasWidth / 2 - 150
        let y = canvasHeight / 2 + 200
        path = font.getPath(msg, x, y, fSize)    
        console.log(path.commands)      
      
      drawLetter(path)

      drawingContext.setLineDash([10, 20]);
      stroke("#AAAADE")
      strokeWeight(10);
      arrow(635, 230, 520, 545);
      arrow(790, 545, 665, 230);
      arrow(730, 430, 575, 430);

      isTimerVisible = true
      isStarted =  true     
}