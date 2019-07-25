var blob = [];
var t = 0;

function setup() {
  createCanvas(700, 700);
  background(245);
  colorMode(HSB, 100);
  for (var i = 0; i < 1; i++) {
    blob[i] = {
      c: 0.01,
      f: .012,
      s: 110,
      r: 0,
      j: 0,
      k: random(1, 1.2),
      negX: random(-1, 1),
      negY: random(-1, 1),
      a: random(TWO_PI),
      ma: .001,
      init: function() {
        if (this.negX > 0) this.negX = 1;
        else this.negX = -1;
        if (this.negY > 0) this.negY = 1;
        else this.negY = -1;
      },
      drawblob: function() {
        push();
        translate(height/2,width/2);
        rotate(this.a);
        this.a += this.ma;
        stroke(60,50);
        strokeWeight(.2);
        noFill();
        tempX = [];
        tempY = [];
        beginShape();
        for (var i = 0; i < this.s; i++) {
          var ang = map(i, 0, this.s, 0, TWO_PI);
          var piRad = map(i, 0, this.s, 0, PI);
          var rad = 3* this.s * noise(i*.009*(sin(piRad)), t * this.f); //decimal = disparity in distance between points
          var x = rad * cos(ang);
          var y = rad * sin(ang);
          curveVertex(x, y);
          tempX.push(x);
          tempY.push(y);
        }
        for (var i = 0; i < this.s/4; i++) {
          curveVertex(tempX[i], tempY[i]);
        }
        endShape();
        pop();
        if ((width / 2) + this.r > width) {
          this.negX = -1;
        }
        if ((width / 2 + this.r < 0)) {
          this.negX = 1;
        }
        this.r += .03*(this.negX * (noise(t + random(1, 5))));
        if ((height / 2) + this.j > height) {
          this.negY = -1;
        }
        if ((height / 2 + this.j < 0)) {
          this.negY = 1;
        }
        this.j += .3*(this.negY * (noise(t + random(1, 5)) * 2));
        this.c += .005;
      }
    }
  }
  for (var i = 0; i < blob.length; i++) {
    blob[i].init();
  }
}

function draw() {
  fill(255, 1.5);
  noStroke();
  rect(0, 0, width, height);
  if (frameCount % 10 == 0) {
    fill(245, 8);
    rect(0, 0, width, height);
  }
  for (var i = 0; i < blob.length; i++) {
    blob[i].drawblob();
  }
  t += .35;
}
