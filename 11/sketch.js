var progreso;
var progresos = [];
var numProgresos = 4;
var duques = []; //variable que guarda la lista de Duques
var numDuques = 0; //numero de Duques creados
var estado = 0; //estado del juego
var x, y; //variable para la posicion de Colombia en x y en y;
var velx1, vely1; //variables para velocidad o cambio de posicion en el tiempo
var tam1 = 50; //variable tamaño de Colombia
var x1, y1; //variables para posicion de la elipse
var tam; //variable para tamano de la elipse
var bolas = []; //variable que guarda la lista de bolas
var numBolas = 30; //numero de bolas creadas
var miliseg = 0;
var progressCount = 0;
var himno;
var fondo;
var win;
var lose;
var lvlup;
var tiempo; //crea una lista de tiempo para guardar el tiempo entre dos clics
var vel; //variable para guardar la velocidad de los clics
var tamBola; //tamaño de la bola
var mtam; //variable para suavizar el tamaño de la bola

//Carga todas las imagenes antes de comenzar a dibujar
function preload() {
  duque = loadImage('assets/duque.png');
  colombia = loadImage('assets/colombia.png');
  progresito = loadImage('assets/progreso.png');
  uribe = loadImage('assets/uribe.png');
  inicio = loadImage('assets/inicio.png');
  nivel1 = loadImage('assets/pantalla1.png');
  perdiste = loadImage('assets/perdiste1.png');
  nivel2 = loadImage('assets/nivel2.png');
  ganar = loadImage('assets/ganaste.png');
  himno = loadSound('assets/himno.mp3');
  fondo = loadSound('assets/fondo.mp3');
  win = loadSound('assets/ganaste.mp3');
  lose = loadSound('assets/perdiste.m4a');
  plop = loadSound('assets/plop.m4a');
  lvlup = loadSound('asset/level2.mp3');
  nivel3 = loadImage('assets/nivel3.png')
}

function setup() {
 
	imageMode(CENTER);
  //Tamaño del canvas es el tamaño de ventana
  createCanvas(768, 1024); //crea un canvas de pantalla completa
  background(255);
  noStroke();
  //configura el texto para que se dibuje con respecto al centro
  textAlign(CENTER);

  //inicia las posiciones "x" y "y" en el centro de la pantalla
  x = width / 2;
  y = height - 10;
  
  //inicia posiciones x2 y2 en el centro a la izquierda de la pantalla
  x2 = 10;
  y2 = height/2;

  //la velocidad inicial es 0
  velx1 = 0;
  vely1 = 0;

  //Crea los 4 progresos
  progreso = new progress();
  for (var i2 = 0; i2 < 10; i2 = i2 + 1) {
    progresos[i2] = new progress(progress.x, progress.y);

    //inicializa las variables de posicion y tamano
    x1 = width / 2;
    y1 = height / 2;
    tam = 60;

    //crea las bolas de la lista
    for (var i = 0; i < numBolas; i++) {
      bolas[i] = new bola();
    }

  }
  
  tiempoAnterior = millis();
  tiempoAnterior1 = second();
  
    tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
  vel = 0; //velocidad inicial es cero

  //tamaño inicial es 10px
  tamBola = 10;
  mtam = 10;

}
//Carga las imágenes usadas en el juego

function draw() {

  //Estado 0 que es la pantalla inicial, muestra instrucciones 
  if (estado == 0) {
tamBola = 10;
image(inicio,width/2,height/2,768,1024);
x2 = 10;
y2 = height/2;
x = width / 2;
y = height - 10;
  progressCount = 0;
          if (himno.isPlaying() == false) {
        himno.play(0);
      } 
  }



  //Estado 1, acá comienza el juego 
  else if (estado == 1) {
    image(nivel1,width/2,height/2,768,1024);
    fill(255, 150);
    rect(0, 0, width, height);
    fill(0);
    himno.pause();
    //Muestra el puntaje en pantalla
text(progressCount, width / 2, height / 2.5);
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
    x = constrain(x, 1, (windowWidth - tam1));
    y = constrain(y, 1, (windowHeight - tam1));

	  //Dibuja los progresos y los hace morir cuando se toca con Colombia,
    //crea un conteo cada vez que Colombia toca los progresos, cuando
    //haya tocado los 4, puede pasar de nivel (cambiar de estado)
    for (i2 = 0; i2 < 10; i2 = i2 + 1) {
        progresos[i2].mostrar();
      if (dist(progresos[i2].x, progresos[i2].y, x, y) < progresos[i2].tam) {
        progresos[i2].morir();
      }
      if(progresos[i2].estaVivo != progresos[i2].estaVivoAntes){
         progressCount = progressCount + 1;
         progresos[i2].estaVivoAntes = progresos[i2].estaVivo;
        	plop.play();
         }
      if (progressCount == 10){
      estado = 4; 
        lvlup.play();
      }

    }
if (fondo.isPlaying() == false) {
        fondo.play();
      } 
    //El estado 2 es cuando se gana
  } else if (estado == 2) {
    if (win.isPlaying() == false) {
        win.play();
      } 
    //Resetea los valores de progresos para que se muestren de nuevo
    for (i2 = 0; i2 < 10; i2 = i2 + 1) {
    progresos[i2].estaVivoAntes = true;
		progresos[i2].estaVivo = true;
    progresos[i2].mostrar();
 	 	//variables de posicion, los progresos se crean entre 0 y el ancho
  	//de ventana y entre el alto de ventana-200 y el alto - 50
  	progresos[i2].x = random(0, windowWidth);
  	progresos[i2].y = random(windowHeight - 200, windowHeight - 50);
     }
    fondo.pause();
    //Resetea el conteo de progresos a 0
    progressCount = 0;
    //Imagen donde dice que se ganó
	image(ganar,width/2,height/2,768,1024);
    //El estado 3 es cuando se pierde, si toca Duque a Colombia
  } else if (estado == 3) {
        if (lose.isPlaying() == false) {
        lose.play();
      } 
    //Resetea los valores de progresos para que se muestren de nuevo
            for (i2 = 0; i2 < 10; i2 = i2 + 1) {
		  progresos[i2].estaVivo = true;
      progresos[i2].mostrar();
      progresos[i2].estaVivoAntes = true;
 	 	//variables de posicion, los progresos se crean entre 0 y el ancho
  	//de ventana y entre el alto de ventana-200 y el alto - 50
  	progresos[i2].x = random(0, windowWidth);
  	progresos[i2].y = random(windowHeight - 200, windowHeight - 50);
     }
    //Resetea el conteo de progresos a 0
    progressCount = 0;
    //Imagen de pérdida
    fondo.pause();
	image(perdiste,width/2,height/2,768,1024);
    
    //Reinicia los Uribes para que creen en otros lugares random
    for (var i = 0; i < numBolas; i++) {
    bolas[i].x = random(tam1+10, width);
  	bolas[i].y = random(height);
    }

    
    
  	//El estado 5 es el segundo nivel
  } else if (estado == 5) {
      //texto   
	image(nivel1, width/2, height/2, 768,1024);
  fill(255);
  noStroke();
	miliseg = floor(millis() - tiempoAnterior);
	text(miliseg, width / 2, height / 2);

    //Dibuja la imagen de Co
    //El estado 6 es el tercer nivellombia
    image(colombia, x2, y2, tam1, tam1);


   //llama a las funciones mostrar y mover de cada una de las bolas en la lista
  for (var i = 0; i < numBolas; i++) {
    bolas[i].mostrar();
    bolas[i].mover();

    if (miliseg >= 20000){
  estado = 6;
}
    //revisa si se estaba tocando alguna bola y en tal caso la mata
    //se usa touches[0] porque se asume que solo hay un toque a la vez
    //si se tocan se pierde, o sea se va al estado 3
    if (dist(x2, y2, bolas[i].x, bolas[i].y) < bolas[i].tam) {
      estado = 3;
    }
  }
  }
  
  //El estado 4 son las instrucciones del nivel 2
  else if (estado == 4) {
 image(nivel2, width/2, height/2, 768, 1024);
  } else if (estado == 6) {
    image(nivel3,width/2,height/2,768,1024);
  }
  
  //El estado 6 es el tercer nivel
  else if (estado == 7) {
    
    
    	miliseg = floor(millis() - tiempoAnterior);

    		if (millis() - tiempoAnterior > 5000){
			estado = 3;
		}
    image(nivel1,width/2,height/2,768,1024);
    noFill();
    strokeWeight(3);
    stroke(255);
    ellipse(width/2,height/2, 200,200);
    noStroke();
    fill(255);
        	text(5000-floor((millis() - tiempoAnterior)), width / 2, height / 4);
     //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
  //tiempo[1] = tiempo en el que se hizo el primer clic
  //tiempo[0] = tiempo en el que se hizo el segundo clic
  var vel = 60000 / (tiempo[1] - tiempo[0]);

  //si han pasado mas de 200 millisegundos entre un clic y otro se asigna un valor de 0 a la velocidad
  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }

  //texto de la pantalla
  fill(255);
  noStroke();
  text("Hacer clic lo más rápido posible", width/2, height/5);

  //floor() redondea el numero de vel a un valor entero

  //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 clics por segundo
  if (vel != Infinity && floor(vel) > 200){

    //aumenta el tamaño de la elipse dependiendo de los clics por minuto
    tamBola+= vel/400;

  } else if (tamBola > 10){ //si la velocidad es menor a 200 y el tamaño de la elipse es mayor a 10

    //disminuye el tamaño de la elipse
    tamBola-= 3;

  } else {

    //establece 10 como el tamaño mínimo para la elipse
    tamBola = 10;

  }

  //esta parte del codigo permite suavizar el cambio de tamaño de la ellipse
  var dif = tamBola - mtam; //resta del tamaño actual de la bola con el nuevo tamaño

  //si la bola debe cambiar de tamaño lo hace pero de manera suave
  if(abs(dif) > 1.0) {
    mtam = mtam + dif/8.0;
  }

  image(colombia,width/2,height/2,tamBola,tamBola);
    if (tamBola >= 200) {
    estado = 2;
    }
  }


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


//función Duque
function presidente(px, py) {

  //variables de posicion, Duque se crea entre 0 y el ancho de la ventana
  //y entre la posición 0-50 en Y
  this.x = random(0, windowWidth);
  this.y = random(0, 50);

  //variables de velocidad que recibe la funcion
  this.velx = px;
  this.vely = py;

  //variable de tamano aleatorio entre 30 y 60
  this.tam = random(30, 60);


  //función que dibuja a Duque
  this.mostrar = function() {
    image(duque, this.x, this.y, this.tam, this.tam);
  }

  //función que mueve a Duque
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
function touchStarted() {
  //comenzar el juego cuando se está en el estado inicial
  if (estado == 0) {
    estado = 1;
    tiempoAnterior1 = second();
    himno.stop();
    tiempoAnterior = millis();
  } 
  //Pasar de las instrucciones al nivel 2 con un toque
  else if (estado == 4) {
    estado = 5;
    tiempoAnterior = millis();
    plop.play();
  }
  //Reiniciar el juego cuando ganó
  else if (estado == 2) {
    estado = 0;
    win.stop();
    tiempoAnterior = millis();
  }
  
  //reiniciar el juego cuando ya se perdió
  if (estado == 3) {
    estado = 0;
    lose.stop();
    tiempoAnterior = millis();
  }
  
  if (estado == 6) {
   estado = 7;
  tiempoAnterior = millis();
  }
  
  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
  
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



//función progreso
function progress(px, py) {

  this.estaVivo = true;
  //variables de posicion, los progresos se crean entre 0 y el ancho
  //de ventana y entre el alto de ventana-200 y el alto - 50
  this.x = random(0, windowWidth);
  this.y = random(windowHeight - 200, windowHeight - 50);

  //variable de tamano aleatorio entre 30 y 60
  this.tam = random(30, 60);
	
  
  
  this.estaVivoAntes = true  
  
  //función que dibuja los progresos
  this.mostrar = function() {
    if (this.estaVivo == true) {
      image(progresito, this.x, this.y, this.tam, this.tam);
    }
  }
  this.morir = function() {
    this.estaVivo = false;
  }
}
//esta funcion se activa cuando el dispositivo reconoce que se movio un toque en la pantalla
function touchMoved() {

    //revisa si se estaba tocando la bola
    //se usa touches[0] porque se asume que solo hay un toque a la vez
    if (dist(touches[0].x, touches[0].y, x2, y2) < tam) {

      //actualiza la posicion de la elipse con la posicion del toque
      x2 = touches[0].x;
      y2 = touches[0].y;
    }
  //para no mover la pantalla del explorador
  return false;
}

//funcion bola
function bola() {

  //variable que indica si esta viva o muerta
  this.viva = true;

  //variables de posicion, la bola se crea en una posicion aleatoria en X y Y
  this.x = random(tam1+10, width);
  this.y = random(height);

  //asigna valores de velocidad a la bola. aleatorios entre -2 y 2
  this.velx = random(-2, 2);
  this.vely = random(-2, 2);

  //variable de tamano
  this.tam = 50;

  //funcion que muestra la bola
  this.mostrar = function() {
    image(uribe,this.x, this.y, this.tam, this.tam);
  }

  //funcion que mueve la bola
  this.mover = function() {

    //solo se mueve si esta viva

      //el movimiento se asigna por la posicion + la velocidad
      this.x = this.x + this.velx;
      this.y = this.y + this.vely;

      //condicionales para que rebote la bola
      if (this.x > width - this.tam / 2 || this.x < this.tam / 2) {
        this.velx *= -1;
      }
      if (this.y > height - this.tam / 2 || this.y < this.tam / 2) {
        this.vely *= -1;
      }
    }
}

function mouseDragged() {
  //prevent default

  return false;

}
