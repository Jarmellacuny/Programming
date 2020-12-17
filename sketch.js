//The setup function only happens once

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
  ellipse(mouseX,mouseY,100, 100, 100, 100);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

