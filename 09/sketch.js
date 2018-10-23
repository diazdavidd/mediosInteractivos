var duques = []; //variable que guarda la lista de Duques
var numDuques = 0; //numero de Duques creados
var estado = 0; //estado del juego
var x, y; //variable para la posicion de Colombia en x y en y;
var velx1, vely1; //variables para velocidad o cambio de posicion en el tiempo
var tam1 = 50; //variable tamaño de Colombia

function setup() {

  createCanvas(windowWidth, windowHeight); //crea un canvas de pantalla completa
  background(255);
  noStroke();
  //configura el texto para que se dibuje con respecto al centro
  textAlign(CENTER);
  
  //inicia las posiciones en el centro de la pantalla
  x = width/2;
  y = height-10;

  //la velocidad inicial es 0
  velx1 = 0;
  vely1 = 0;

}
//Carga las imágenes usadas en el juego
function preload(){
  duque = loadImage('assets/duque.png');
  colombia = loadImage('assets/colombia.png');
}

function draw() {

  //Estado 0 que es la pantalla inicial, muestra instrucciones 
    if (estado == 0) {
      fill (0);
      text("Toca la pantalla para comenzar", width / 2, height / 2.5);
  text("Inclina la pantalla para mover a Colombia", width / 2, height / 2.3);
  text("¡Salva a Colombia de Uri... Duque!", width / 2, height / 2.12);
      	fill(255, 220);
	rect(0, 0, width, height);
  rect(0, 0, width, height);
	
  }
  

  //Estado 1, acá comienza el juego 
  else if(estado == 1){
	fill(255, 220);
	rect(0, 0, width, height);
	comenzar();
    
    
  //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
  velx1 = map(rotationY, -90, 90, -20, 20);
  vely1 = map(rotationX, -90, 90, -20, 20);

  //Dibuja la imagen de Colombia
  image(colombia, x, y, tam1, tam1);

  //suma la velocidad en x y en y a 
  x = x + velx1;
  y = y + vely1;

  //evita que las posiciones se salgan del canvas
  x = constrain(x, tam1/2, width - tam1/2);
  y = constrain(y, tam1/2, height - tam1/2);
    
  } else if (estado == 2) {
		background(220);
    noStroke();
    fill(0);
		text("¡Ganaste!", width / 2, height / 2);

	} else if (estado == 3) {
		background(220);
    noStroke();
    fill(0);
		text("¡Perdiste!", width / 2, height / 2);
	}
  
  
  fill(255, 0, 0);

  //llama a las funciones mostrar, mover y morir de cada uno de los Duques en la lista
  for (var i = 0; i < numDuques; i++) {
    duques[i].mostrar();
    duques[i].mover();
    duques[i].morir();
        		if (dist(duques[i].x, duques[i].y, x, y) < duques[i].tam) {
			estado = 3;
		}
  }
  

  
}


//funcion Duque
function presidente(px, py) {

  //variables de posicion, Duque se crea entre 0 y el ancho de la ventana
  //y entre la posición 0-50 en Y
  this.x = random(0,windowWidth);
  this.y = random(0,50);
  
  //variables de velocidad que recibe la funcion
  this.velx = px;
  this.vely = py;

  //variable de tamano aleatorio entre 30 y 60
  this.tam = random(30, 60);


  //funcion que dibuja a Duque
  this.mostrar = function() {
    image(duque,this.x, this.y, this.tam, this.tam);
  }

  //funcion que mueve a Duque
  this.mover = function() {

    //el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely + 1;

    //aumenta la velocidad en Y constantemente para dar un efecto de gravedad
    this.vely += 0.5;

    //condicionales para que rebote Duque
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //reduce el tamano de Duque hasta llegar a 0
  this.morir = function() {
    if (this.tam >= 0) {
      this.tam -= 0.3;
    }
  }
}

//funcion que se activa si se acaba el toque en la pantalla
function touchEnded(){
  //comenzar el juego cuando se está en el estado inicial
	if (estado == 0) {
  	estado = 1;
  }
  //reiniciar el juego cuando ya se perdió
  if (estado == 3) {
    estado = 0;
  }
}

//Función para comenzar a dibujar Duques en la pantalla
function comenzar() {

  //solo se pueden crear Duques en frames multiplos de 10, 
  //esto hace que no se puedan crear Duques tan seguido
  if (frameCount % 30 != 0) {
    return;
  }

  //posicion actual del raton
  var x1 = 50;
  var y1 = 50;

  //posicion anterior del raton
  var x2 = 50;
  var y2 = 50;

  //la velocidad se mide restando la posicion guardada del mouse con la posición que se habia guardado de este
  var velx = x1 - x2;
  var vely = y1 - y2;

  // se crea un nuevo Duque que recibe por parametro las velocidades en x y y del mouse
  duques[numDuques] = new presidente(velx, vely);

  //aumenta el numero de Duques de la lista
  numDuques++;
}