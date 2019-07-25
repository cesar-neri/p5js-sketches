
var xspacing = 3.5;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 350.0; // Height of wave
var period = 200.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
  createCanvas(700, 700);
  w = width;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(245);
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(120);
  for (var x = 0; x < yvalues.length; x++) {
    for (var z = 0; z < 15; z++) {
    push();
    translate(width*.75,height*.25);
    rotate(PI/2);
    scale(.5);
    fill(z*10+100);
    ellipse(x*xspacing, height/2+(yvalues[x+(z*15)]*sqrt((x/(amplitude/2))*(x/(amplitude/2)))*sin(map(x, 0, yvalues.length, 0, PI))), 2.5);
    pop();
  }
}

}
