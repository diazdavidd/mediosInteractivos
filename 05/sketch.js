//Variables
var miHora;


function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);

  //Texto explicando qué es cada cosa
  noStroke();
  textSize(12);
  textStyle(BOLD);
  text('Agua tomada en el día', 37, 180)
  text('Energía', 250, 180)
  var miHora = hour();
  //Texto 6 am a 7 am - Despertar
  push();
  if (miHora >= 6 && miHora <= 7) {
    textSize(18);
    text('Despierta, es un nuevo día', 75, 30);
  }
  //Texto 8 am a 11 am - Universidad
    if (miHora >= 8 && miHora <= 11) {
    textSize(18);
    text('Estudia y trabaja con esfuerzo', 60, 30);
  }
  //Texto de 12 m a 2 pm - Almuerzo
      if (miHora >= 12 && miHora <= 14) {
    textSize(18);
    text('¡Hora del almuerzo!', 90, 30);
  }
  //Texto de motivación para terminar el día
      if (miHora >= 15 && miHora <= 18) {
    textSize(18);
    text('Sigue, ya casi acaba el día', 65, 30);
  }
  //Texto para la casa - Realizar trabajos
        if (miHora >= 19 && miHora <= 20) {
    textSize(18);
    text('Termina tus trabajos', 85, 30);
  }
  //Texto para recordar darle una hora al entretenimiento
          if (miHora >= 21 && miHora <= 22) {
    textSize(18);
    text('Hora del ocio y el entretenimiento', 50, 30);
  }
  //Texto para dormir
            if (miHora >= 23 && miHora == 24) {
    textSize(18);
    text('zZzzzZZzzzzzzZzzzzzz', 85, 30);
  }
  //Texto para dormir
              if (miHora >= 0 && miHora <= 5) {
    textSize(18);
    text('zZzzzZZzzzzzzZzzzzzz', 85, 30);
  }
  pop();

  //Agua necesaria para el día
  push();
  fill(255);
  noStroke();
  //Vaso base
  rect(50, 190, 100, 300, 5, 5, 40, 40);
  //Agua a las 6 am
  miHora = hour();
  if (miHora >= 6) {
    fill(185, 212, 225);
    noStroke();
    arc(100.5, 430, 80, 80, 0, PI);
  }
  //Agua a las 7 am
  if (miHora >= 7) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 420, 80, 10);
  }
  //Agua a las 8 am
  if (miHora >= 8) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 410, 80, 10);
  }
  //Agua a las 9 am
  if (miHora >= 9) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 400, 80, 10);
  }
  //Agua a las 10 am
  if (miHora >= 10) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 390, 80, 10);
  }
  //Agua a las 11 am
  if (miHora >= 11) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 380, 80, 10);
  }
  //Agua a las 12 am
  if (miHora >= 12) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 370, 80, 10);
  }
  //Agua a la 1 pm
  if (miHora >= 13) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 340, 80, 30);
  }
  //Agua a las 2 pm
  if (miHora >= 14) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 330, 80, 10);
  }
  //Agua a las 3 pm
  if (miHora >= 15) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 320, 80, 10);
  }
  //Agua a las 4 pm
  if (miHora >= 16) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 310, 80, 10);
  }
  //Agua a las 5 pm
  if (miHora >= 17) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 300, 80, 10);
  }
  //Agua a las 6 pm
  if (miHora >= 18) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 270, 80, 30);
  }
  //Agua a las 7 pm
  if (miHora >= 19) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 260, 80, 10);
  }
  //Agua a las 8 pm
  if (miHora >= 20) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 250, 80, 10);
  }
  //Agua a las 9 pm
  if (miHora >= 21) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 240, 80, 10);
  }
  //Agua a las 10 pm - Fin de ciclo, se va a dormir
  if (miHora >= 22) {
    fill(185, 212, 225);
    noStroke();
    rect(60.5, 220, 80, 20);
  }
  //Agua a la 12 pm - Se reinicia la cantidad de agua del vaso
  //porque es un nuevo día
  if (miHora == 24) {
    noFill();
    noStroke();
    rect(60.5, 220, 80, 20);
  }
  pop();
  //Energía para el día
  push();
  strokeWeight(1);
  stroke(0);
  fill(132, 244, 113);
  //Energía de 6 am a 9 am - Nuevo día, energía renovada
  if (miHora >= 6 && miHora <= 9) {
    rect(205, 195, 140, 45, 10, 10, 10, 10);
    rect(205, 243, 140, 45, 10, 10, 10, 10);
    rect(205, 291, 140, 45, 10, 10, 10, 10);
    rect(205, 339, 140, 45, 10, 10, 10, 10);
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 9 am a 12 m
  if (miHora >= 9 && miHora <= 12) {
    rect(205, 243, 140, 45, 10, 10, 10, 10);
    rect(205, 291, 140, 45, 10, 10, 10, 10);
    rect(205, 339, 140, 45, 10, 10, 10, 10);
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 12 m a 3 pm
  if (miHora >= 12 && miHora <= 15) {
    rect(205, 291, 140, 45, 10, 10, 10, 10);
    rect(205, 339, 140, 45, 10, 10, 10, 10);
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 3 pm a 6 pm
  if (miHora >= 15 && miHora <= 18) {
    rect(205, 339, 140, 45, 10, 10, 10, 10);
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 6 pm a 9 pm
  if (miHora >= 18 && miHora <= 21) {
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 9 pm a 11 pm - Se acaba la energía
  if (miHora >= 21 && miHora <= 23) {
    noFill();
    noStroke();
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 11 pm a 2 am - Recargando energía
  if (miHora >= 23 && miHora <= 2) {
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 2 am a 3 am - Recargando energía
  if (miHora >= 2 && miHora <= 3) {
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 3 am a 4 am - Recargando energía
  if (miHora >= 3 && miHora <= 4) {
    rect(205, 339, 140, 45, 10, 10, 10, 10);
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Energía de 4 pm a 5 am - Recargando energía
  if (miHora >= 4 && miHora <= 5) {
    rect(205, 291, 140, 45, 10, 10, 10, 10);
    rect(205, 339, 140, 45, 10, 10, 10, 10);
    rect(205, 387, 140, 45, 10, 10, 10, 10);
    rect(205, 435, 140, 45, 10, 10, 10, 10);
  }
  //Batería base para la energía del día
  noFill();
  stroke(46, 79, 42);
  strokeWeight(3);
  rect(200, 190, 150, 300, 5, 5, 5, 5);
  //Icono de energía - rayo
  rect(200, 190, 150, 300, 5, 5, 5, 5)
  fill(46, 79, 42);
  beginShape();
  vertex(295, 296);
  vertex(280, 325);
  vertex(300, 325);
  vertex(262, 363);
  vertex(276, 335);
  vertex(257, 335);
  endShape(CLOSE);
  miHora = hour();
  pop();
}
