var progreso;
var progresos = []; //variable que guarda la lista de progresos
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
var trans = 0;
var trans1= 0;
var progressCount = 0;
var himno;
var fondo;
var win;
var lose;
var lvlup;
var tiempo; //crea una lista de tiempo para guardar el tiempo entre dos toques
var vel; //variable para guardar la velocidad de los clics
var tamBola; //tamaño de bola Colombia en 3 nivel
var mtam; //variable para suavizar el tamaño de Colombia
var cuentaPlay = 1; //Número de veces que se ha reproducido un sonido

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
  lvlup = loadSound('assets/level2.mp3');
  nivel3 = loadImage('assets/nivel3.png');
  colombiared = loadImage('assets/colombiared.png');
  pasaste = loadImage('assets/nivel1superado.png');
  ganador = loadImage('assets/ganador.png');
  tesalvaste = loadImage('assets/tesalvaste.png');
	niveluribe = loadImage('assets/perdlvl2.png');
  niveluribe2 = loadImage('assets/perdistelvl2.png');
  pasaslvl2 = loadImage('assets/nivel3pasaste.png');
  pasaslvl22 = loadImage('assets/nivel3pasaste2.png')
}

function setup() {
	//Hace que todas las imagenes se alineen al centro
  imageMode(CENTER);
  //Tamaño del canvas es el tamaño de ventana
  createCanvas(768, 1024); //crea un canvas de pantalla completa
  background(255);
  noStroke();
  //configura el texto para que se dibuje con respecto al centro
  textAlign(CENTER);

  //inicia las posiciones del nivel 1 "x" y "y" las cuales son de Colombia, en el centro de la pantalla
  x = width / 2;
  y = height - 10;
  x10 = width/2+10;
  y10 = height - 10;

  //inicia posiciones x2 y2 del nivel 2, es Colombia en el centro a la izquierda de la pantalla
  x2 = 10;
  y2 = height / 2;

  //la velocidad inicial de Colombia
  velx1 = 0;
  vely1 = 0;

  //Crea los 4 progresos (libros)
  progreso = new progress();
  for (var i2 = 0; i2 < 10; i2 = i2 + 1) {
    progresos[i2] = new progress(progress.x, progress.y);

    //inicializa variables de posición y tamaño
    x1 = width / 2;
    y1 = height / 2;
    tam = 60;

    //crea los Uribes de la lista
    for (var i = 0; i < numBolas; i++) {
      bolas[i] = new bola();
    }

  }
	//Variable de milisegundos para el score
  tiempoAnterior = millis();
  tiempoAnterio = second();
  tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
  vel = 0; //velocidad inicial es cero

  //tamaño inicial es 10px
  tamBola = 10;
  mtam = 10;

}

function draw() {

  //Estado 0 que es la pantalla inicial, muestra instrucciones 
  if (estado == 0) {
    //Sonido de ganar se detiene, pues hay cuando se gana se devuelve a esta pantalla 
    //y no se quiere tener ese sonido de fondo
    if (win.isPlaying() == true) {
    win.stop();
    }
    //Sonido de perder se detiene, pues hay cuando se pierde se devuelve a esta pantalla 
    //y no se quiere tener ese sonido de fondo
    if (lose.isPlaying() == true) {
    lose.stop();
    }
    //Reinicia el tamaño de Colombia para el nivel 3, pues se quiere comenzar con Colombia
    //pequeña de nuevo para que sea igual de difícil ganar cuando se pierda o se gane.
    tamBola = 10;
    //Imagen de fondo, donde se enuncian instrucciones
    image(inicio, width / 2, height / 2, 768, 1024);
    //Devolver los valores de posición de Colombia en los niveles 1 y 2 para no volver
    //a la posición que estaba cuando se juegue de nuevo
    x2 = 10;
    y2 = height / 2;
    x = width / 2;
    y = height - 10;
    x10 = width/2+10;
    y10 = height - 10;
    //Se reinicia el conteo de progresos recogidos para el primer nivel
    progressCount = 0;
    //Se reproduce el himno nacional, música temática del inicio.
    y = height - 10;
    y = height - 10;
    if (himno.isPlaying() == false) {
      himno.play(0);
    }
    //Se reinicia la cuenta de las reproducciones que se han hecho
    //de los sonidos de ganar y perder, para que se reproduzcan
    //de nuevo solo una vez cuando gane/pierda.
		cuentaPlay = 1; 
    

  }
  //Estado 10 que es la pantalla inicial jugador 2, muestra instrucciones 
  if (estado == 10) {
    //Sonido de ganar se detiene, pues hay cuando se gana se devuelve a esta pantalla 
    //y no se quiere tener ese sonido de fondo
    if (win.isPlaying() == true) {
    win.stop();
    }
    //Sonido de perder se detiene, pues hay cuando se pierde se devuelve a esta pantalla 
    //y no se quiere tener ese sonido de fondo
    if (lose.isPlaying() == true) {
    lose.stop();
    }
    //Reinicia el tamaño de Colombia para el nivel 3, pues se quiere comenzar con Colombia
    //pequeña de nuevo para que sea igual de difícil ganar cuando se pierda o se gane.
    tamBola = 10;
    //Imagen de fondo, donde se enuncian instrucciones
    image(inicio, width / 2, height / 2, 768, 1024);
    //Devolver los valores de posición de Colombia en los niveles 1 y 2 para no volver
    //a la posición que estaba cuando se juegue de nuevo
    x2 = 10;
    y2 = height / 2;
    x = width / 2;
    y = height - 10;
    x10 = width/2+10;
    y10 = height - 10;
    //Se reinicia el conteo de progresos recogidos para el primer nivel
    progressCount = 0;
    //Se reproduce el himno nacional, música temática del inicio.
    y = height - 10;
    y = height - 10;
    if (himno.isPlaying() == false) {
      himno.play(0);
    }
    //Se reinicia la cuenta de las reproducciones que se han hecho
    //de los sonidos de ganar y perder, para que se reproduzcan
    //de nuevo solo una vez cuando gane/pierda.
		cuentaPlay = 1; 
    

  }

  //Estado 1, acá comienza el juego para el jugador 1
  else if (estado == 1) {
    trans = floor(second() - tiempoAnterio);
    //Imagen de fondo del primer nivel, donde se ve el congreso con efecto de blur
    image(nivel1, width / 2, height / 2, 768, 1024);
    //Un rectángulo con opacidad 150 para que se vea menos el congreso
    fill(255, 150);
    rect(0, 0, width, height);
    fill(0);
    //Parar el himno, pues ya no debe sonar en este estado
    if (himno.isPlaying() == true) {
    himno.stop();
    }
    //Fuente del texto
    textFont('Knewave');
    //Muestra el número de progresos recogidos en pantalla
    text('No. progresos: ' + progressCount, width / 2, height / 2.5);
    text('Tiempo transcurrido: ' + trans, width / 2, height / 2.7);
    comenzar();
    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx1 = map(rotationY, -90, 90, -20, 20);
    vely1 = map(rotationX, -90, 90, -20, 20);

    //Dibuja la imagen de Colombia
    image(colombia, x, y, tam1, tam1);
    fill(0,0,255);
    text('P1',x,y+tam1-2);
		fill(0);
    //suma la velocidad en x y en y a Colombia
    x = x + velx1;
    y = y + vely1;
    //evita que las posiciones se salgan del canvas
    x = constrain(x, 1, 768);
    y = constrain(y, 1, (1024 - tam1));

    //Dibuja los progresos y los hace morir cuando se toca con Colombia,
    //crea un conteo cada vez que Colombia toca los progresos, cuando
    //haya tocado los 4, puede pasar de nivel (cambiar de estado)
    for (i2 = 0; i2 < 10; i2 = i2 + 1) {
      progresos[i2].mostrar();
      if (dist(progresos[i2].x, progresos[i2].y, x, y) < progresos[i2].tam) {
        progresos[i2].morir();
      }
      //Crea conteo y suena un "plop" cuando se recoge un progreso
      if (progresos[i2].estaVivo != progresos[i2].estaVivoAntes) {
        progressCount = progressCount + 1;
        progresos[i2].estaVivoAntes = progresos[i2].estaVivo;
        plop.play();
      }
      //conteo 10 se cambia de estado, y suena el sonido de nivel superado
      if (progressCount == 10) {
        estado = 8;
        lvlup.play();
      }
		//Se reproduce el sonido de fondo 
    }	if (fondo.isPlaying() == false) {
      fondo.play();
    }
    
    
  } //Estado 9, acá comienza el juego del segundo jugador 
  else if (estado == 9) {
    
    trans1 = floor(second() - tiempoAnterio);
    //Imagen de fondo del primer nivel, donde se ve el congreso con efecto de blur
    image(nivel1, width / 2, height / 2, 768, 1024);
    //Un rectángulo con opacidad 150 para que se vea menos el congreso
    fill(255, 150);
    rect(0, 0, width, height);
    fill(0);
    //Parar el himno, pues ya no debe sonar en este estado
    if (himno.isPlaying() == true) {
    himno.stop();
    }
    //Fuente del texto
    textFont('Knewave');
    //Muestra el número de progresos recogidos en pantalla
    text('No. progresos: ' + progressCount, width / 2, height / 2.5);
    text('Tiempo transcurrido: ' + trans1, width / 2, height / 2.7);
    comenzar();
    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx1 = map(rotationY, -90, 90, -20, 20);
    vely1 = map(rotationX, -90, 90, -20, 20);

    //Dibuja la imagen de Colombia
    fill(255,0,0);
    image(colombiared,x10,y10,tam1,tam1);
    text('P1',x10,y10+tam1-2);
    fill(0);
    image(colombiared,x10,y10,tam1,tam1);
    //suma la velocidad en x y en y a Colombia
		x10 = x10 + velx1;
    y10 = y10 + vely1;
    //evita que las posiciones se salgan del canvas
    x10 = constrain(x10, 1, 768);
    y10 = constrain(y10, 1, (1024 - tam1));

    //Dibuja los progresos y los hace morir cuando se toca con Colombia,
    //crea un conteo cada vez que Colombia toca los progresos, cuando
    //haya tocado los 4, puede pasar de nivel (cambiar de estado)
    for (i2 = 0; i2 < 10; i2 = i2 + 1) {
      progresos[i2].mostrar();
      if (dist(progresos[i2].x, progresos[i2].y, x10, y10) < progresos[i2].tam) {
        progresos[i2].morir();
      }
      //Crea conteo y suena un "plop" cuando se recoge un progreso
      if (progresos[i2].estaVivo != progresos[i2].estaVivoAntes) {
        progressCount = progressCount + 1;
        progresos[i2].estaVivoAntes = progresos[i2].estaVivo;
        plop.play();
      }
      //conteo 10 se cambia de estado, y suena el sonido de nivel superado
      if (progressCount == 10) {
        estado = 11;
        lvlup.play();
      }
		//Se reproduce el sonido de fondo 
    }	if (fondo.isPlaying() == false) {
      fondo.play();
    }
    
    
  } else if (estado == 12) {
     image(ganador, width / 2, height / 2, 768, 1024);
    push();
    textSize(80);
    if (trans < trans1){
        text('Jugador 1',width/2,height/2);
    }
    if (trans > trans1){
    text('Jugador 2',width/2,height/2);
      
    }
    pop();
} else if (estado == 18) {
     image(ganador, width / 2, height / 2, 768, 1024);
    push();
    textSize(80);
  	fill(0);
    if (miliseg > miliseg1){
        text('Jugador 1',width/2,height/2);
    }
  	fill(0);
    if (miliseg < miliseg1){
    text('Jugador 2',width/2,height/2);
      
    }
    pop();
}
    
  
  //El estado 2 es cuando se gana
  else if (estado == 2) {
    //Reproducir el sonido de ganar sólo cuando el conteo de reproducciones sea uno
    //luego le suma uno al conteo para que no vuelva a reproducirse
    if (win.isPlaying() == false) {
      if (cuentaPlay == 1){
      win.play();
      cuentaPlay = cuentaPlay + 1;
    }
      //Detiene el sonido de fondo pues es del estado anterior
    }
        if (fondo.isPlaying() == true) {
      fondo.stop();
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
    //Resetea el conteo de progresos a 0
    progressCount = 0;
    //Imagen donde dice que se ganó
    image(ganar, width / 2, height / 2, 768, 1024);
    
    
    //El estado 3 es cuando se pierde, si toca Duque a Colombia
  } else if (estado == 3) {
    //Reproducir el sonido de perder sólo cuando el conteo de reproducciones sea uno
    //luego se suma uno al conteo para que no vuelva a reproducirse
    if (lose.isPlaying() == false) {
      if (cuentaPlay == 1){
      lose.play();
        cuentaPlay = cuentaPlay + 1
      }
    }
    
    //Detiene el sonido de fondo del estado anterior
    if (fondo.isPlaying() == true) {
      fondo.stop();
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
    image(perdiste, width / 2, height / 2, 768, 1024);

    //Reinicia los Uribes para que se creen en otros lugares random
    for (var i = 0; i < numBolas; i++) {
      bolas[i].x = random(tam1 + 10, width);
      bolas[i].y = random(height);
    }



    //El estado 5 es el segundo nivel, player 1
  } else if (estado == 5) {
    //Se muestra la imagen de fondo
    image(nivel1, width / 2, height / 2, 768, 1024);
    fill(255);
    noStroke();
    //Se muestra el score actual
    miliseg = floor(millis() - tiempoAnterior);
    text(miliseg, width / 2, height / 2);

    //Dibuja la imagen de Colombia
    image(colombia, x2, y2, tam1, tam1);
    text('P1',x2,y2+tam1-2);


    //llama a las funciones mostrar y mover de cada una de las bolas en la lista
    for (var i = 0; i < numBolas; i++) {
      bolas[i].mostrar();
      bolas[i].mover();

      //Cambio de estado cuando el score sea 20000, sonido de nivel superado
      //if (miliseg >= 20000) {
        //estado = 14;
        //lvlup.play();
      //}
      //revisa si se estaba tocando algún Uribe con Colombia y en tal caso se pierde
      //se usa touches[0] porque se asume que solo hay un toque a la vez
      if (dist(x2, y2, bolas[i].x, bolas[i].y) < bolas[i].tam) {
        estado = 16;
      }
    }
  }
  else if (estado == 16) {
    push();
    textSize(70);
  image (niveluribe, width/2, height/2, 768, 1024);
  text('Tu puntaje: ' + miliseg, width / 2, height / 1.8);
    pop();
    //reinicia uribes
        for (var i = 0; i < numBolas; i++) {
      bolas[i].x = random(tam1 + 10, width);
      bolas[i].y = random(height);
    }
    x2 = 10;
    y2 = height / 2;
  }
  //Segundo nivel player2
    else if (estado == 17) {
  	tiempoAnterior = millis();
  	tiempoAnterio = second();
    push();
    textSize(70);
  image (niveluribe2, width/2, height/2, 768, 1024);
  text('Tu puntaje: ' + miliseg1, width / 2, height / 1.8);
    pop();
      //reinicia uribes
          for (var i = 0; i < numBolas; i++) {
      bolas[i].x = random(tam1 + 10, width);
      bolas[i].y = random(height);
    }
    x2 = 10;
    y2 = height / 2;
  }
  //Segundo nivel, player 2
  else if (estado == 13) {
    //Se muestra la imagen de fondo
    image(nivel1, width / 2, height / 2, 768, 1024);
    fill(255);
    noStroke();
    //Se muestra el score actual
    miliseg1 = floor(millis() - tiempoAnterior);
    text(miliseg1, width / 2, height / 2);

    //Dibuja la imagen de Colombia
    image(colombiared, x2, y2, tam1, tam1);
    text('P2',x2,y2+tam1-2);


    //llama a las funciones mostrar y mover de cada una de las bolas en la lista
    for (var i = 0; i < numBolas; i++) {
      bolas[i].mostrar();
      bolas[i].mover();

      //Cambio de estado cuando el score sea 20000, sonido de nivel superado
      //revisa si se estaba tocando algún Uribe con Colombia y en tal caso se pierde
      //se usa touches[0] porque se asume que solo hay un toque a la vez
      if (dist(x2, y2, bolas[i].x, bolas[i].y) < bolas[i].tam) {
        estado = 17;
      }
    }
  } else if (estado == 14) {
  image(tesalvaste, width/2, height/2, 768,1024);
  }
  else if (estado == 15) {
  image(empate, width/2, height/2, 768,1024);
  }

  //El estado 4 son las instrucciones del nivel 2
  else if (estado == 4) {
    //Imagen con instrucciones
    image(nivel2, width / 2, height / 2, 768, 1024);
    
    //Estado 6 son las instrucciones del nivel 3
  } else if (estado == 6) {
    //Imagen con instrucciones
    image(nivel3, width / 2, height / 2, 768, 1024);
    
    //Jugador 1 gana, estado donde se muestra su puntuación
  } else if (estado == 8) {
        for (i2 = 0; i2 < 10; i2 = i2 + 1) {
      progresos[i2].estaVivoAntes = true;
      progresos[i2].estaVivo = true;
      progresos[i2].mostrar();
      //variables de posicion, los progresos se crean entre 0 y el ancho
      //de ventana y entre el alto de ventana-200 y el alto - 50
      progresos[i2].x = random(0, windowWidth);
      progresos[i2].y = random(windowHeight - 200, windowHeight - 50);
    }
    //Resetea el conteo de progresos a 0
    progressCount = 0;
    push();
  image(pasaste, width/2, height/2, 768, 1024);
    fill(255);
    stroke(255);
    textSize(50);
  text('Tu tiempo: ' + trans + 'segundos', width / 2, height / 2.5); 
    pop();
    
    //Jugador 2 gana, estado donde se muestra su puntuación
  } else if (estado == 11) {
        for (i2 = 0; i2 < 10; i2 = i2 + 1) {
      progresos[i2].estaVivoAntes = true;
      progresos[i2].estaVivo = true;
      progresos[i2].mostrar();
      //variables de posicion, los progresos se crean entre 0 y el ancho
      //de ventana y entre el alto de ventana-200 y el alto - 50
      progresos[i2].x = random(0, windowWidth);
      progresos[i2].y = random(windowHeight - 200, windowHeight - 50);
    }
    //Resetea el conteo de progresos a 0
    progressCount = 0;
    push();
  image(pasaste, width/2, height/2, 768, 1024);
    fill(255);
    stroke(255);
    textSize(50);
  text('Tu tiempo: ' + trans1 + ' segundos', width / 2, height / 2.5); 
    pop();
    
  }

  //El estado 7 es el tercer nivel
  else if (estado == 7) {

		//Reinicia score
    miliseg2 = floor(millis() - tiempoAnterior);
		//Condicional para pasar de nivel cuando el score llegue a 0
    //Imagen de fondo
    image(nivel1, width / 2, height / 2, 768, 1024);
    noFill();
    strokeWeight(3);
    stroke(255);
    //Indicador para saber a que tamaño hay que incrementar a Colombia
    ellipse(width / 2, height / 2, 200, 200);
    noStroke();
    fill(255);
    //Tiempo restante para hacer que Colombia crezca
    text('Milisegundos transcurridos: ' + miliseg2, width / 2, height / 4);
    //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
    //tiempo[1] = tiempo en el que se hizo el primer toque
    //tiempo[0] = tiempo en el que se hizo el segundo toque
    var vel = 60000 / (tiempo[1] - tiempo[0]);

    //si han pasado mas de 200 millisegundos entre un toque y otro se asigna un valor de 0 a la velocidad
    if (millis() - tiempo[1] > 200) {
      vel = 0;
    }

    //texto de la pantalla
    fill(255);
    noStroke();

    //floor() redondea el numero de vel a un valor entero

    //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 toques por segundo
    if (vel != Infinity && floor(vel) > 200) {

      //aumenta el tamaño de Colombia dependiendo de los clics por minuto
      tamBola += vel / 400;

    } else if (tamBola > 10) { //si la velocidad es menor a 200 y el tamaño de Colombia es mayor a 10

      //disminuye el tamaño de Colombia
      tamBola -= 3;

    } else {

      //establece 10 como el tamaño mínimo para Colombia
      tamBola = 10;

    }

    //esta parte del codigo permite suavizar el cambio de tamaño de Colombia
    var dif = tamBola - mtam; //resta del tamaño actual de la bola con el nuevo tamaño

    //si Colombia debe cambiar de tamaño lo hace pero de manera suave
    if (abs(dif) > 1.0) {
      mtam = mtam + dif / 8.0;
    }
		
    //Dibuja la imagen de Colombia en la mitad del canvas
    image(colombia, width / 2, height / 2, tamBola, tamBola);
    
    //Condicional para pasar el nivel
    if (tamBola >= 200) {
      estado = 20;
    }
  } else if (estado == 20){
    push();
    textSize(25);
    image(pasaslvl2, width/2, height/2,768,1024);
    text('Milisegundos transcurridos: ' + miliseg2, width / 2, height / 1.8); 
    tamBola = 10;
    pop();
  } else if (estado == 21){
    push();
    textSize(25);
    image(pasaslvl22, width/2, height/2,768,1024);
    text('Milisegundos transcurridos: ' + miliseg3, width / 2, height / 1.8); 
    pop();
             }
  else if (estado == 22){
     image(ganador, width / 2, height / 2, 768, 1024);
    push();
    textSize(80);
    fill(0);
    if (miliseg2 < miliseg3){
        text('Jugador 1',width/2,height/2);
    }
    if (miliseg2 > miliseg3){
    text('Jugador 2',width/2,height/2);
    }
    pop();
}
  //El estado 7 es el tercer nivel, jugador 2
  else if (estado == 19) {

		//Reinicia score
    miliseg3 = floor(millis() - tiempoAnterior);
		//Condicional para pasar de nivel cuando el score llegue a 0
    //Imagen de fondo
    image(nivel1, width / 2, height / 2, 768, 1024);
    noFill();
    strokeWeight(3);
    stroke(255);
    //Indicador para saber a que tamaño hay que incrementar a Colombia
    ellipse(width / 2, height / 2, 200, 200);
    noStroke();
    fill(255);
    //Tiempo restante para hacer que Colombia crezca
    text('Milisegundos transcurridos: ' + miliseg3, width / 2, height / 4);
    //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
    //tiempo[1] = tiempo en el que se hizo el primer toque
    //tiempo[0] = tiempo en el que se hizo el segundo toque
    var vel = 60000 / (tiempo[1] - tiempo[0]);

    //si han pasado mas de 200 millisegundos entre un toque y otro se asigna un valor de 0 a la velocidad
    if (millis() - tiempo[1] > 200) {
      vel = 0;
    }

    //texto de la pantalla
    fill(255);
    noStroke();

    //floor() redondea el numero de vel a un valor entero

    //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 toques por segundo
    if (vel != Infinity && floor(vel) > 200) {

      //aumenta el tamaño de Colombia dependiendo de los clics por minuto
      tamBola += vel / 400;

    } else if (tamBola > 10) { //si la velocidad es menor a 200 y el tamaño de Colombia es mayor a 10

      //disminuye el tamaño de Colombia
      tamBola -= 3;

    } else {

      //establece 10 como el tamaño mínimo para Colombia
      tamBola = 10;

    }

    //esta parte del codigo permite suavizar el cambio de tamaño de Colombia
    var dif = tamBola - mtam; //resta del tamaño actual de la bola con el nuevo tamaño

    //si Colombia debe cambiar de tamaño lo hace pero de manera suave
    if (abs(dif) > 1.0) {
      mtam = mtam + dif / 8.0;
    }
		
    //Dibuja la imagen de Colombia en la mitad del canvas
    image(colombiared, width / 2, height / 2, tamBola, tamBola);
    
    //Condicional para pasar el nivel
    if (tamBola >= 200) {
      estado = 21;
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
	this.estaVivo = true;
  
  //variables de velocidad que recibe la funcion
  this.velx = px;
  this.vely = py;

  //variable de tamano aleatorio entre 30 y 60
  this.tam = random(30, 60);


  //función que dibuja a Duque
  this.mostrar = function() {
  if (this.estaVivo == true){
    image(duque, this.x, this.y, this.tam, this.tam);
  }
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
    //Reinicia valores de tiempoAnterior
    tiempoAnterior = millis();
    tiempoAnterio = second();
    
    //Botón para ir al primer nivel
    for (var i4 = 0; i4 < touches.length; i4++) {

      if (touches[i4].x > 212 && touches[i4].x < 582) {
        if (touches[i4].y > 785 && touches[i4].y < 826) {
          estado = 1;
        }
      }
    }
  } 
    if (estado == 10) {
    //Reinicia valores de tiempoAnterior
    tiempoAnterior = millis();
    tiempoAnterio = second();
    
    //Botón para ir al primer nivel
    for (var i4 = 0; i4 < touches.length; i4++) {

      if (touches[i4].x > 212 && touches[i4].x < 582) {
        if (touches[i4].y > 785 && touches[i4].y < 826) {
          estado = 9;
        }
      }
    }
  }
  //Pasar de las instrucciones al nivel 2 con un toque
  //suena un plop
  else if (estado == 8) {
    estado = 10;
    plop.play();
  }   else if (estado == 11) {
    estado = 12;
    plop.play();
  }
    else if (estado == 16) {
    tiempoAnterior = millis();
    tiempoAnterio = second();
    estado = 13;
    plop.play();
  } 
      else if (estado == 17) {
      tiempoAnterior = millis();
    tiempoAnterio = second();
    estado = 18;
    plop.play();
  } 
  else if (estado == 12) {
    tiempoAnterior = millis();
    estado = 4;
    plop.play();
  }
  else if (estado == 14) {
    tiempoAnterior = millis();
    estado = 13;
    plop.play();
  }
  //Reiniciar el juego cuando ganó
  //reinicia valor de tiempoAnterior
  else if (estado == 2) {
    tiempoAnterior = millis();
    
    //Botón para reiniciar el juego
        for (var i4 = 0; i4 < touches.length; i4++) {

      if (touches[i4].x > 200 && touches[i4].x < 559) {
        if (touches[i4].y > 36 && touches[i4].y < 88) {
          estado = 0;
        }
      }
    }
  } else if (estado == 4) {
  	estado = 5;
    plop.play();
  }
   else if (estado == 18) {
  	estado = 6;
    plop.play();
  }
    else if (estado == 20) {
          tiempoAnterior = millis();
    tiempoAnterio = second();
 			for (var i4 = 0; i4 < touches.length; i4++) {

      if (touches[i4].x > 228 && touches[i4].x < 544) {
        if (touches[i4].y > 803 && touches[i4].y < 950) {
          estado = 19;
        }
      }
    }
    plop.play();
  }
  else if (estado == 21) {
        tiempoAnterior = millis();
    tiempoAnterio = second();
            for (var i4 = 0; i4 < touches.length; i4++) {

      if (touches[i4].x > 228 && touches[i4].x < 544) {
        if (touches[i4].y > 803 && touches[i4].y < 950) {
          estado = 22;
        }
      }
    }
    plop.play();
  }
    else if (estado == 22) {
    estado = 0;
    plop.play();
  }

  //reiniciar el juego cuando ya se perdió
  //reinicia valor de tiempoAnterior
  if (estado == 3) {
    estado = 0;
    tiempoAnterior = millis();
    tiempoAnterio = second();
  }

  //Pasar de las instrucciones al nivel 3
  //reinicia valor de tiempoAnterior
  //suena un plop
  if (estado == 6) {
    estado = 7;
    tiempoAnterior = millis();
    tiempoAnterio = second();
    plop.play();
  }
    if (estado == 6) {
    estado = 19;
    tiempoAnterior = millis();
    tiempoAnterio = second();
    plop.play();
  }

  //el tiempo del segundo toque se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer toque en el arreglo
  tiempo[1] = millis();

}

//Función para comenzar a dibujar Duques en la pantalla
function comenzar() {

  //solo se pueden crear Duques en frames multiplos de 10, 
  //esto hace que no se puedan crear Duques tan seguido
  if (frameCount % 30 != 0) {
    return;
  }

  //variables para la velocidad
  var x1 = 50;
  var y1 = 50;

  //variables para la velocidad
  var x2 = 50;
  var y2 = 50;

  //velocidad
  var velx = x1 - x2;
  var vely = y1 - y2;

  // se crea un nuevo Duque que recibe por parametro las velocidades
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

  //variables de posicion, Uribe se crea en una posicion aleatoria en X y Y
  this.x = random(tam1 + 10, width);
  this.y = random(height);

  //asigna valores de velocidad a Uribe. aleatorios entre -2 y 2
  this.velx = random(-2, 2);
  this.vely = random(-2, 2);

  //variable de tamano
  this.tam = 50;

  //funcion que muestra a Uribe
  this.mostrar = function() {
    image(uribe, this.x, this.y, this.tam, this.tam);
  }

  //funcion que mueve a Uribe
  this.mover = function() {

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