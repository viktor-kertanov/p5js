let t=0

function setup() {
  createCanvas(600, 600);
}

function draw() {
  translate(height/2, width/2)
  for (i=0; i<5; i++){
    rect(100, 100, 50, 50)
    rotate(radians(360/5))
  }
  t += 1
}