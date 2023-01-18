function setup() {
  createCanvas(1000, 1000, SVG);
  strokeWeight(0.5);
  stroke(0,0,0);
  noFill();
  rectMode(CENTER)
}

function draw() {
  translate(width/2 ,height/2)
  let num_triangles = 720
  for (i=0; i <num_triangles; i ++){
    rotate(radians(360/num_triangles))
    push()
    // translate(200, 0)
    rotate(radians(4*i*360/num_triangles))
    for (radius = 0; radius < 200; radius +=50){
      ellipse(radius, radius, radius , radius/3)
    }
    pop()
  }
  save("radius.svg");
  noLoop();
}

function tri(length){
  noFill()
  triangle(
    0, -length, 
    -length*sqrt(3)/2, length/2, 
    length*sqrt(3)/2, length/2)
}