//Variables
var r, g, b;
var foto;
var foto2;
var miMusiquita;
var x = 150;
var y = 175;
var vol;

//Carga música y fotos
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
  
  //Colores aleatorios definidos para algunos textos y formas
  r = random(255);
  g = random(255);
  b = random(255);
  
    	if(keyIsDown(187)){
    if(miMusiquita.isPlaying()){
      miMusiquita.rate(vol)
    }
  }
  
  //Mensaje si el volumen está demasiado bajo
    if (miMusiquita.getVolume() >= 0.1 && miMusiquita.currentTime() > 14) {
    background(220, 150, 0)
        text('¿Estás escuchando algo?', 145, 170);
  }
  
  //Mensaje cuando el volumen está bajo
    if (miMusiquita.getVolume() >= 0.3 && miMusiquita.currentTime() > 14) {
    background(255, 0, 225)
        text('Volumen bajo', 175, 170);
  }
  
  //Mensaje cuando el volumen es moderado
      if (miMusiquita.getVolume() >= 0.5 && miMusiquita.currentTime() > 14) {
    background(0, 249, 225)
        text('Volumen moderado', 160, 170);
  }
  
  //Mensaje cuando el volumen es seguro
      if (miMusiquita.getVolume() >= 0.7 && miMusiquita.currentTime() > 14) {
    background(144, 255, 0)
        text('Volumen seguro', 175, 170);
  }
  
  //Mensaje cuando el volumen está demasiado alto
        if (miMusiquita.getVolume() >= 0.9 && miMusiquita.currentTime() > 14) {
    background(255, 104, 0)
          text('Cuidado con tus oidos', 155, 170);
  }
  
//Líneas que se dibujan con respecto a la posicion del mouse
line(mouseX, mouseY, pmouseX, pmouseY);
line(mouseX+2, mouseY+2, pmouseX+2,pmouseY+2);
line(mouseX-2, mouseY-2, pmouseX-2,pmouseY-2);

//Recibe la amplitud de onda del sonido y lo grafica en rectangulos
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
  
  //Elipses que van a los lados y se amplian dependiendo de la amplitud de onda
    if (nivel > 0.05) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, 400);
      var posY = random(0, 400);
      fill(0, 0, 0, 50);
      ellipse(posX, posY, 1, 1);
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
  
  //Puntos que aparecen aleatoriamente cuando la amplitud es mayor a 0.1
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

  //Cambiar volumen con respecto a la posicion del mouse en Y
    var miVol = map(mouseY, height, 0, 0, 1);
  miMusiquita.setVolume(miVol);
  
  //Si la tecla R esta presionada parar cancion
	if(keyIsDown(82)){
    if(miMusiquita.isPlaying()){
      miMusiquita.stop()
    }
  }
  
//Movimiento del logo de Daft Punk con las teclas arriba abajo izquierda derecha
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
  
  //Se muestra imagen de Daft Punk si el tiempo de la canción es mayor a 2 seg
    if (miMusiquita.currentTime() > 2) {
            image(foto, x , y);
  }
  
  //Imagen de reanudar cuando está pausada la canción
      if (miMusiquita.isPaused()) {
            image(foto2, 130 , y, 140, 90);
  }
  
  //Se cambia el pan con respecto a la posicion del logo de Daft Punk
  var miPan = map(x, 0, width, -1, 1);
  miMusiquita.pan(miPan);
	miMusiquita.rate(1);
  
  //Textos de apoyo para entender lo que se puede hacer
fill(0);
  textFont('Abel');
  text('Volumen:',120,280);
	text('Tiempo actual:',92,295);
  text('Reiniciar canción: "R" - Pausar/reanudar canción: "Clic izquierdo"',55,365);
  text('Usa las teclas "arriba,abajo,izquierda,derecha" del teclado',70,375);
	text('Dibuja pequeños trazos con el mouse, con él también podrás subir el volumen',30,385);

  //Textos informativos de volumen y tiempo
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



