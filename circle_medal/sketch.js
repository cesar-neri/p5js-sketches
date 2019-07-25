var a = 0;
var r = 10;
var s = 80;

function setup() {
createCanvas(700,700);
background(245);
noFill();
strokeWeight(.25);
}

function draw() {
  var d = 30;
  var f = 0.05;
  var x = width / 2 + cos(a) * r;
  var y = height / 2 + sin(a) * r;
  push();
  stroke(s);
  ellipse(x, y, d, d);
  pop();

  a = a +f;
  r = r + .06
  s = s + .05
  if (s == 255) {
     noLoop();
  }
}