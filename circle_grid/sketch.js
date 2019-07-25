function setup() {
  createCanvas(700, 700);
  background(245);
  fill(120);
  noStroke();
  noLoop();
}

function draw() {
  var r = 2.4
  var d = r * 2
  var m = 5;
  for (y = m; y < (height / d) - m; y++) {
    for (x = m; x < (width / d) - m; x++) {
      
      ran1 = random(0, 1.6);
      if (ran1 > 1) {
        var centerx = (x * d) + r;
        var centery = (y * d) + r;
        var ran3 = random(0, 2);
        if (ran3 > 1.8) {
        push();
        noFill()
        stroke(120);
        strokeWeight(.5);
        ellipse(centerx, centery, random(5, 12));
        pop();
      }

        ellipse(centerx, centery, d);
        ran2 = random(0, 2.5)
        if (ran2 > 1) {
          push();
          fill(255);
          ellipse(centerx, centery, random(0, r));
          pop();
        }
      }

    }
  }

}