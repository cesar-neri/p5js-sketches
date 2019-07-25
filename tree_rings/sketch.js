r = 10 //inital radius
p = 0

function setup() {
  createCanvas(700, 700);
  background(245);
  noFill();
  //stroke(60);
  //strokeWeight(.25);
}

function draw() {
  while (r<width*1.5){
    var s = random (2, 7);
    var a = random(0, TWO_PI);
    push();
    strokeWeight(random(.25,1.5));
    stroke(random(100,200));
    arc(width/2, height/2, r, r , p, a);
    pop();
    r = r + s;
    p = p + .25;
  }
  
}