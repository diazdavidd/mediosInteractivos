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
