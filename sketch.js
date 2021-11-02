let socket;

function setup() {
  createCanvas(600, 400);
  background('#fae');

  socket = io.connect('http://localhost:3000');

  socket.on('mouse', newDrawing);
}

function newDrawing() {
  noStroke();
  fill('#aae');
  ellipse(data.x, data.y, 25, 25);
}

function mouseDragged() {
  console.log('sending: ' + mouseX + ', ' + mouseY); //transmite coordonatele mouse-ului

  let data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);

  noStroke();
  fill('#fda');
  ellipse(mouseX, mouseY, 25, 25);
}

function draw() {

}
