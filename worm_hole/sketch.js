var y = 0;
var z = 0;
var speed = 1.5

function setup() {
  createCanvas(700, 700);
  background(245);
  noFill();
  
}

function draw() {
  y = y + .04;
  z = 392*sin(y);
  if (y < 0) { 
  y = height; 
  } 
  colorMode(HSB);
  //stroke((0+(y*40))%255,30,100,(-80+y*70)/800);
  stroke(50,((-80+y*70)/700)%.8);
  strokeWeight(.8);
  //fill(0,.1);
  console.log(((-80+y*70)/700)%.5);
  ellipse(-80+y*70,0+y*90,z*.5+200,z*.5+200); 
  //ellipse(-80+y*100,0+y*100,(z+200)*.2,(z+200)*.2); 
  
}