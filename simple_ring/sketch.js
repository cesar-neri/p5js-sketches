var a = 0;
var r = 90;
var s = 150;
var t = 0;

function setup() {
createCanvas(700,700);
background(245);
noFill();
strokeWeight(.25);
stroke(200);
}

function draw() {
  var d = 30;
  var f = 0.04;
  var x = width / 2 + cos(a) * r;
  var y = height / 2 + sin(a) * r;
  push();
  stroke(s);
  ellipse(x, y, d, d);
  pop();

  a = a + f;
  //r = r + .06
  //s = s + .05
  if (a > TWO_PI - f) {
     noLoop();
     spin();
  }
}

function spin(){
  while (t<TWO_PI){
  push();
  translate(width/2, height/2);
  rotate(t);
  t = t + .1;
  pop();
  }
}
