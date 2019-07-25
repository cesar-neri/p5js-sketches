var s = 80

function setup() {
  createCanvas(700,700);
  background(245);
  //stroke(100);
  noFill();
  strokeWeight(.5);
  noLoop();
}

function draw() {
  for (y=0; y<80; y++){
    //noFill();
    push();
    stroke(s);
    strokeWeight(.25);
    rotate(radians(y*.28));
    scale(.75);
    translate(300/2,260/2);
    rect((width/2)-(80-y)*5, (height/2)-(80-y)*5, (80-y)*9, (80-y)*9);
    //console.log(y*5);
    s = s+1.2;
    pop();
  }
  
}