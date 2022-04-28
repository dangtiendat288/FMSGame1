// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>
let block1;
class DraggableRect {
  constructor(x, y, w, h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.block = false;
    this.correct = true;
  }

  over() {
    // Is mouse over object
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke("black");
    strokeWeight(2);
    // Different fill based on state
    if (this.dragging) {
      fill(115);
    } else if (this.rollover) {
      fill(115);
    } else {
      fill(175, 200);
    }
    if (this.block) {
      stroke("green");
      strokeWeight(6);
    } else if (!this.correct) {
      stroke("red");
      strokeWeight(6);
      ++strikes;
      
    }
    rect(this.x, this.y, this.w, this.h);
    stroke("black");
    strokeWeight(2);
  }

  pressed() {
    // Did I click on the rectangle?
    if(this.block == false){
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
    }
  }

  released() {
    if (this.dragging) {
      if (
       // block1 == false &&
        currentBlock == 0 && 
        this.x >= width * 0.594 &&
        this.x <= width * 0.87 &&
        this.y >= height * 0.25 &&
        this.y <= height * 0.944
      ) {
        this.x = width * 0.594 + 100;
        this.y = height * 0.25 + 376;
        // block1 = true;
        currentBlock++;
        this.block = true;
        // if (strikes > 0) {
        //   --strikes;
        // }
      } else if (
        //block1 == true &&
        currentBlock == 1 && 
        this.x >= width * 0.594 + 90 &&
        this.x <= width * 0.594 + 145 &&
        this.y >= height * 0.25 + 316 &&
        this.y <= height * 0.25 + 376
      ) {
        this.x = width * 0.594 + 100;
        this.y = height * 0.25 + 331;
        // block2 = true;
        currentBlock++;
        this.block = true;
        //  if (strikes > 0) {
        //   --strikes;
        // }
      } else if (
        //block2 == true &&
        currentBlock == 2 && 
        this.x >= width * 0.594 + 90 &&
        this.x <= width * 0.594 + 145 &&
        this.y >= height * 0.25 + 271 &&
        this.y <= height * 0.25 + 331
      ) {
        this.x = width * 0.594 + 100;
        this.y = height * 0.25 + 286;
        // block3 = true;
        currentBlock++;
        this.block = true;
        //  if (strikes > 0) {
        //   --strikes;
        // }
      } else if (
        //block3 == true &&
        currentBlock == 3 && 
        this.x >= width * 0.594 + 90 &&
        this.x <= width * 0.594 + 145 &&
        this.y >= height * 0.25 + 196 &&
        this.y <= height * 0.25 + 286
      ) {
        this.x = width * 0.594 + 100;
        this.y = height * 0.25 + 241;
        // block4 = true;
        currentBlock++; 
        this.block = true;
        //  if (strikes > 0) {
        //   --strikes;
        // }
      } else if (
        //block4 == true &&
        currentBlock == 4 && 
        this.x >= width * 0.594 + 90 &&
        this.x <= width * 0.594 + 145 &&
        this.y >= height * 0.25 + 151 &&
        this.y <= height * 0.25 + 241
      ) {
        this.x = width * 0.594 + 100;
        this.y = height * 0.25 + 196;
        // block5 = true;
        currentBlock++;
        this.block = true;
        //  if (strikes > 0) {
        //   --strikes;
        // }
      } else if (
        //block5 == true &&
        currentBlock == 5 && 
        this.x >= width * 0.594 + 90 &&
        this.x <= width * 0.594 + 145 &&
        this.y >= height * 0.25 + 106 &&
        this.y <= height * 0.25 + 196 &&
        this.w == 90
      ) {
        this.x = width * 0.594 + 100;
        this.y = height * 0.25 + 151;
        // block6 = true;
        currentBlock++;
        this.block = true;
        //  if (strikes > 0) {
        //   --strikes;
        // }
      } else if (
        //block6 == true &&
        currentBlock == 6 && 
        this.x >= width * 0.594 + 125 &&
        this.x <= width * 0.594 + 180 &&
        this.y >= height * 0.25 + 61 &&
        this.y <= height * 0.25 + 151
      ) {
        this.x = width * 0.594 + 145;
        this.y = height * 0.25 + 106;
        block7 = true;
        currentBlock++;
        this.block = true;
        //  if (strikes > 0) {
        //   --strikes;
        // }
       } else {
         this.correct = false;
      //   ++strikes;
       }

      // Quit dragging
      this.dragging = false;
    }
  }
}