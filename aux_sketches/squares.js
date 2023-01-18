function setup() {
  createCanvas(600, 600, SVG);
}

function draw() {
  t = 0
  translate(width/2 ,height/2)
  for (i=0; i <12; i ++){
    translate(50, 0)
    rotate(radians(t))
    rect(0, 0, 50, 50)
    rotate(radians(360/12))
  }
  t+=0.1
  
}