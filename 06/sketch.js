var r, g, b;
var foto;
var foto2;
var miMusiquita;
var x = 150;
var y = 175;

function preload(){
  miMusiquita = loadSound('assets/DaftPunk.mp3');
  foto = loadImage ('assets/daft.png');
  foto2 = loadImage ('assets//foto2.png');
}

function setup(){
  var canvas = createCanvas(400,400);
  canvas.mouseClicked(togglePlay);
  miAnalizador = new p5.Amplitude();
  miAnalizador.setInput(miMusiquita);
	dur = miMusiquita.duration();
  
}

function draw(){
  background(220);
  r = random(255);
  g = random(255);
  b = random(255);
  
  
  
    if (miMusiquita.getVolume() >= 0.1 && miMusiquita.currentTime() > 14) {
    background(220, 150, 0)
        text('¿Estás escuchando algo?', 145, 170);
  }
  
    if (miMusiquita.getVolume() >= 0.3 && miMusiquita.currentTime() > 14) {
    background(255, 0, 225)
        text('Volumen bajo', 175, 170);
  }
  
      if (miMusiquita.getVolume() >= 0.5 && miMusiquita.currentTime() > 14) {
    background(0, 249, 225)
        text('Volumen moderado', 160, 170);
  }
  
      if (miMusiquita.getVolume() >= 0.7 && miMusiquita.currentTime() > 14) {
    background(144, 255, 0)
        text('Volumen seguro', 175, 170);
  }
        if (miMusiquita.getVolume() >= 0.9 && miMusiquita.currentTime() > 14) {
    background(255, 104, 0)
          text('Cuidado con tus oidos', 155, 170);
  }
  

line(mouseX, mouseY, pmouseX, pmouseY);
line(mouseX+2, mouseY+2, pmouseX+2,pmouseY+2);
line(mouseX-2, mouseY-2, pmouseX-2,pmouseY-2);


  var nivel = miAnalizador.getLevel();
  fill(200, 200, b);
  rect(0,0 / 2, 40, nivel * 400);
  rect(40,0 / 2, 40, nivel * 500);
  rect(80,0 / 2, 40, nivel * 300);
  rect(120,0 / 2, 40, nivel * 350);
  rect(160,0 / 2, 40, nivel * 200);
  rect(200,0 / 2, 40, nivel * 420);
  rect(240,0 / 2, 40, nivel * 520);
  rect(280,0 / 2, 40, nivel * 190);
  rect(320,0 / 2, 40, nivel * 270);
  rect(360,0 / 2, 40, nivel * 380);
  rect(400,0 / 2, 40, nivel * 430);
  
    if (nivel > 0.05) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, 400);
      var posY = random(0, 400);
      fill(0, 0, 0, 50);
      ellipse(posX, posY, 1, 1);
    }
  }
  push();
      if (nivel > 0.1) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, 400);
      var posY = random(0, 400);
      stroke(255);
      fill(255);
      point (posX, posY);
    }
  }
  pop();
    push();
      if (nivel > 0.2) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, 400);
      var posY = random(330, 400);
      noStroke();
      fill(255,255,255);
      ellipse (350, 350, 20, 20);
    }
  }
  pop();
  
    var miVol = map(mouseY, height, 0, 0, 1);
  miMusiquita.setVolume(miVol);
  

  
      if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
    if (miMusiquita.currentTime() > 2) {
            image(foto, x , y);
  }
      if (miMusiquita.isPaused()) {
            image(foto2, 130 , y, 140, 90);
  }
  var miPan = map(x, 0, width, -1, 1);
  miMusiquita.pan(miPan);
	miMusiquita.rate(1);
  
fill(0);
  textFont('Abel');
  text('Volumen:',120,280);
	text('Tiempo actual:',92,295);
  text('Usa las teclas "arriba,abajo,izquierda,derecha" del teclado',70,375);
	text('Dibuja pequeños trazos con el mouse, con él también podrás subir el volumen',30,385);
text(miMusiquita.getVolume(), 170, 280);
text(miMusiquita.currentTime(),170,295);
//Color y forma de la figura que sigue el mouse y
//que sigue la amplitud de la onda de la canción
  fill(r, g, b);
  ellipse(270, 210, nivel*400, nivel*400);
  fill(r, g, b);
  ellipse(130, 210, nivel*400, nivel*400);
}

//Reproducir y pausar musica
function togglePlay() {
  if (miMusiquita.isPlaying()) {
    miMusiquita.pause();
   
  } else {
    miMusiquita.loop();
  }
  
  
}



