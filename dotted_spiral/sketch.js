var a = 0;


function setup() {
  createCanvas(700,700);
  background(245);
  // fill(100);
  noStroke();
  //strokeWeight(.25);
  //noFill();
}

function draw() {
  var s = 3.5*(sin(a*.9)+1.4);
  fill(120+(a*.8));
    var x = width / 2 + 10*cos(a)*(a*.2);
    var y = height / 2 + 10*sin(a)*(a*.2);

    ellipse(x, y, s*(x*.002), s*(x*.002));
        
    a = a + .05;
}