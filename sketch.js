//The setup function only happens once
var newnew=mouseX
var newnew2=mouseY

function setup() {
  createCanvas(600, 600);
  // Change Colors
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(1);
  stroke(b, b, b);
  fill(b, b, b, 127);
  ellipse(newnew,newnew2,100, 100, 100, 100);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(newnew, newnew2, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
