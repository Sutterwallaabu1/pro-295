function setup (){
  createCanvas(400,400)
}
function draw () {
  background(mouseX,mouseY,mouseX)
  ellipse(mouseX,mouseY,250,100)
  rect.x=mouseX
  rect.y=mouseY
}
