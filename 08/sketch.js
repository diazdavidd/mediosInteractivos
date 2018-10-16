//Variables
var wally;
var roboteva;
var basurita;
var basuritas = [];
var walla;
var dir = 1;
var robotauto;
var botica;
var boticas = [];
var z = 650;
var d = 325;
var materita;
var evasonido;
var cubosonido;
var asustado;
var autosonido;
var autoelectrico;
var electric;
var autoenojado;
var x = 300;
var y = 0;
var bolas = []; //variable que guarda la lista de cubos de basura
var numBolas = 0; //numero de cubos de basura creados
var tiempo; //crea una lista de tiempo para guardar el tiempo entre dos clics
var vel; //variable para guardar la velocidad de los clics
var tam1; //tamaño de WallE
var mtam; //variable para suavizar el tamaño de WallE

//Cargando todas las imagenes y audios
function preload() {
  walle = loadImage('assets/walle.png');
  eva = loadImage('assets/eva.png');
  evaamor = loadImage('assets/evaamor.png');
  walleamor = loadImage('assets/walleamor.png');
  basura = loadImage('assets/pilabasura.png');
  cuboBasura = loadImage('assets/cubobasura.png');
  triturador = loadImage('assets/walla.png');
  fondo = loadImage('assets/fondo.jpg');
  walleasustado = loadImage('assets/asustado.png');
  trituradorbravo = loadImage('assets/wallabrava.png');
  auto = loadImage('assets/auto.png');
  walledormido = loadImage('assets/walledormido.png');
  evabrava = loadImage('assets/evabrava.png');
  bota = loadImage('assets/planta.png');
  botaCrecida = loadImage('assets/arbol.png');
  materita = loadImage('assets/materaagua.png');
  confundidowalle = loadImage('assets/confundido.png');
  evasonido = loadSound('assets/Eva.m4a');
  cubosonido = loadSound('assets/cubo.m4a');
  aguasonido = loadSound('assets/agua.m4a');
  asustado = loadSound('assets/asustado.m4a');
  autosonido = loadSound('assets/auto.m4a');
  autoelectrico = loadImage('assets/autoelectrico.png');
  electric = loadSound('assets/electric.mp3');
  autoenojado = loadImage('assets/autobravo.png');
}

function setup() {
  //Dandole el valor a las variables, creando funciones en X y Y.
  //Creando canvas
  createCanvas(800, 600);
  wally = new robotE(mouseX, mouseY);
  roboteva = new evaRobot(200, 200);
  robotauto = new autoRobot(x, y);
  walla = new trituraGrande(100, 500);
  basurita = new pilaBasura(350, 650);
  
  //For para las 4 bolsas de basura
  for (var i = 0; i < 4; i = i + 1) {
    var tempX = random(500, 650);
    var tempY = 515;
    basuritas[i] = new pilaBasura(tempX, tempY);
  }
  
  //For para las 3 materas
  matera = new matera(0, 0);
  for (var i2 = 0; i2 < 3; i2 = i2 + 1) {
    var temX = random(150, 250);
    var temY = 310;
    boticas[i2] = new botaPlanta(temX, temY);
  }
  
    tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
  vel = 0; //velocidad inicial es cero

  //tamaño inicial es 10px
  tam1 = 100;
  mtam = 100;
}

function draw() {
  //Dibuja el fondo, que es un screenshot de la película
  image(fondo, 0, 0);

  //Dibujando matera
  matera.dibujarse();
  //Dibujar a Wall•E en el canvas
  wally.dibujarse(); {
    //Interacción Wall•E con EVA con respecto a la distancia entre ambos
    if (dist(mouseX, mouseY, roboteva.x, roboteva.y) < 100 == true) {
      //Imagenes de enamorados
      roboteva.amor();
      wally.amor();
      //Sonidos de enamorados
      if (evasonido.isPlaying() == false) {
        evasonido.play();
      }
    } else {
      evasonido.pause();
    }
    //Para que se devuelvan a su estado normal cuando no estén cerca
  }
  if (dist(mouseX, mouseY, roboteva.x, roboteva.y) > 100) {
    roboteva.estaVivo = true;
    wally.estaVivo = true;
  }

  //Interacción del robot Auto con Wall•E para que se devuelvan a su estado
  //original cuando estén a más de 170 px, tuve que ponerlo acá para que funcionara :S
  if (dist(mouseX, mouseY, robotauto.x, robotauto.y) > 170) {
    walla.estaVivo = true;
    wally.estaVivo = true;
    robotauto.estaVivo = true;
  }


  //Interacción Wall•E con la pila de basura por la distancia
  for (var i = 0; i < basuritas.length; i = i + 1) {
    basuritas[i].dibujarse(); {
      if (dist(mouseX, mouseY, basuritas[i].x, basuritas[i].y) < 100 == true) {
        //Cambio de forma a cubo
        basuritas[i].cubito();
        basuritas[i].cambioForma = true;
        //Sonido del proceso de compresión de la basura
        basuritas[i].cambioForma = true;
        basuritas[i].cambioForma = true;
        if (cubosonido.isPlaying() == false) {
          cubosonido.play();
        }
      } else {
        cubosonido.pause();
      }
    }
    //Para que no se devuelva sino que se quede en Cubo.
    if (basuritas[i].cambioForma == true) {
      basuritas[i].cubito();
    }
  }


//Dibujar a Wall•A
  walla.dibujarse(); {
    //Interacción Wall•E con Trituradora Wall•A dependiendo de la distancia
    if (dist(mouseX, mouseY, walla.x, walla.y) < 170) {
      roboteva.brava();
      //Wall•A se pone brava y Wall•E asustado
      walla.brava();
      wally.asustado();
      //Sonido de asustado de Wall•E
      if (asustado.isPlaying() == false) {
        asustado.play();
      }
    } else {
      asustado.pause();
    }

  }
		//Para que se devuelvan a su estado original cuando estén a 
  //más de 170 pixeles
  if (dist(mouseX, mouseY, walla.x, walla.y) > 170) {
    walla.estaVivo = true;
    wally.estaVivo = true;
  }

  //Dibujar a Auto
  robotauto.dibujarse(); {
    //Interacción Wall•E con Auto
    if (dist(mouseX, mouseY, robotauto.x, robotauto.y) < 170) {
      //Eva se pone brava, Wall•A igual, Auto habla y Wall•E se siente
      //confundido
      roboteva.brava();
      walla.brava();
      robotauto.bravo();
      wally.confundido();
      if (autosonido.isPlaying() == false) {
        autosonido.play();
      }
    } else {
      autosonido.pause();
    }
  }


  //Interacción matera con planta en bota con respecto a distancia
  for (var i2 = 0; i2 < boticas.length; i2 = i2 + 1) {
    boticas[i2].dibujarse(); {
      if (dist(z, d, boticas[i2].x, boticas[i2].y) < 30) {
        //Se vuelven arboles
        boticas[i2].arbolito();
        boticas[i2].cambioForma = true;
        //Sonido de agua cayendo a los arboles
        if (aguasonido.isPlaying() == false) {
          aguasonido.play();
        }
      } else {
        aguasonido.pause();
      }
    }
    //Para que no se devuelvan y se queden como arboles
    if (boticas[i2].cambioForma == true) {
      boticas[i2].arbolito();

    }
  }
  //Dibujar a Wall•A
  robotauto.dibujarse(); {
    //Interacción Wall•E con Trituradora Wall•A dependiendo de la distancia
    if (dist(z, d, robotauto.x, robotauto.y) < 100) {
      robotauto.electrico();
      //Wall•A se pone brava y Wall•E asustado
      //Sonido de asustado de Wall•E
      if (electric.isPlaying() == false) {
        electric.play();
      }
    } else {
      electric.pause();
    }

  }
		//Para que se devuelvan a su estado original cuando estén a 
  //más de 170 pixeles
  if (dist(z, d, robotauto.x, robotauto.y) > 100) {
    robotauto.estaVivo = true;
  }
  
//Dibuja a eva en el canvas
  roboteva.dibujarse();
  
//Eva se mueve por el canvas en la coordenada X
  roboteva.moverse();

  //llama a las funciones mostrar, mover y morir de cada uno de los cubos de basura en la lista
  for (var i = 0; i < numBolas; i++) {
    bolas[i].mostrar();
    bolas[i].mover();
    bolas[i].morir();
  }

  //texto
  fill(255);
  text("Arrastre el ratón para lanzar cubos de basura", 10, 20);
  text("Arrastre el robot maligno con el mouse para moverlo", 10, 40);

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
  text("Hacer clic lo más rápido posible para agrandar a Wall•E", 10, 60);

  //floor() redondea el numero de vel a un valor entero
  text(floor(vel) + " clics por minuto", 10, 80);

  //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 clics por segundo
  if (vel != Infinity && floor(vel) > 200){

    //aumenta el tamaño de WallE dependiendo de los clics por minuto
    tam1+= vel/400;

  } else if (tam1 > 100){ //si la velocidad es menor a 200 y el tamaño de WallE es mayor a 10

    //disminuye el tamaño de WallE
    tam1-= 3;

  } else {

    //establece 10 como el tamaño mínimo para WallE
    tam1 = 100;

  }

  //esta parte del codigo permite suavizar el cambio de tamaño de WallE
  var dif = tam1 - mtam; //resta del tamaño actual de la bola con el nuevo tamaño

  //si WallE debe cambiar de tamaño lo hace pero de manera suave
  if(abs(dif) > 1.0) {
    mtam = mtam + dif/8.0;
  }
  
}


//WALL-E
function robotE(miX, miY) {
  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(walle, mouseX, mouseY, mtam, mtam);
    }
  }
  this.amor = function() {
    this.estaVivo = false
    image(walleamor, mouseX, mouseY, mtam, mtam);
  }
  this.asustado = function() {
    this.estaVivo = false
    image(walleasustado, mouseX, mouseY, mtam, mtam);
  }
  this.confundido = function() {
    this.estaVivo = false
    image(confundidowalle, mouseX, mouseY, mtam, mtam);
  }
}

//EVA
function evaRobot(miX, miY) {
  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(eva, this.x, this.y, 90, 100);
    }
  }
  this.amor = function() {
    this.estaVivo = false
    image(evaamor, this.x, this.y, 90, 100);
  }
  this.brava = function() {
    this.estaVivo = false
    image(evabrava, this.x, this.y, 90, 100);
  }
  this.moverse = function() {
    this.x = this.x + 1 * dir
    if (this.x > width - 100) {
      dir = -1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
}


//PILA DE BASURA
function pilaBasura(miX, miY) {
  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  this.cambioForma = false;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(basura, this.x, this.y, 200, 100);
    }
  }
  this.cubito = function() {
    if (this.cambioForma == true) {
      this.estaVivo = false
      image(cuboBasura, this.x, this.y, 80, 80);
    }
  }
}

//TRITURADOR
function trituraGrande(miX, miY) {
  //Caracterisicas
  this.x = miX;
  this.y = miY;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(triturador, 10, 400, 200, 200);
    }
  }
  this.brava = function() {
    this.estaVivo = false
    image(trituradorbravo, 10, 400, 200, 200);
  }
}
//AUTO
function autoRobot(miX, miY) {
  //Caracteristicas
  this.x = x;
  this.y = y;
  this.estaVivo = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(auto, x, y, 90, 115);
    }
  }
  this.electrico = function() {
    this.estaVivo = false
    image(autoelectrico, x, y, 90, 115);
  }
    this.bravo = function() {
    this.estaVivo = false
    image(autoenojado, x, y, 90, 115);
  }
  this.mov = function() {
    this.x = this.x + 2 * dir
    if (this.x > width - 80) {
      dir = -1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
}
//BOTA CON PLANTA
function botaPlanta(miX, miY) {
  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  this.cambioForma = false;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(bota, this.x, this.y, 300, 300);
    }
  }
  this.arbolito = function() {
    if (this.cambioForma == true) {
      this.estaVivo = false
      image(botaCrecida, this.x, this.y, 300, 300);
    }
  }
}


//REGADERA
function matera(miX, miY) {
  //Caracteristicas
  this.x = z;
  this.y = d;

  //Habilidades
  this.dibujarse = function() {
    image(materita, z, d, 80, 60)
    if (keyIsDown(LEFT_ARROW)) {
      z -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      z += 5;
    }

    if (keyIsDown(UP_ARROW)) {
      d -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      d += 5;
    }
  }
}

//funcion cubo de basura
function bola(px, py) {

  //variables de posicion, el cubo de basura se crea en la posición del raton
  this.x = mouseX;
  this.y = mouseY;

  //variables de velocidad que recibe la funcion
  this.velx = px;
  this.vely = py;

  //variable de tamano aleatorio entre 30 y 60
  this.tam = random(75, 125);


  //funcion que dibuja el cubo de basura
  this.mostrar = function() {
   image(cuboBasura, this.x, this.y, this.tam, this.tam);
  }

  //funcion que mueve el cubo de basura
  this.mover = function() {

    //el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //aumenta la velocidad en Y constantemente para dar un efecto de gravedad
    this.vely += 0.5;

    //condicionales para que rebote el cubo de basura
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //reduce el tamano del cubo de basura hasta llegar a 0
  this.morir = function() {
    if (this.tam >= 0) {
      this.tam -= 0.3;
    }
  }
}

//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

    //revisa si la posición del mouse es cercana a la posicion de la ellipse
  if (dist(mouseX, mouseY, x, y) < 90) {

    //actualiza la posicion del cubo con la posición del mouse
    x = mouseX;
    y = mouseY;
    
  
  }
  //solo se pueden crear cubos en frames multiplos de 10, esto hace que no se puedan crear cubos tan seguido
  if (frameCount % 10 != 0) {
    return;
  }

  //posicion actual del raton
  var x1 = mouseX;
  var y1 = mouseY;

  //posicion anterior del raton
  var x2 = pmouseX;
  var y2 = pmouseY;

  //la velocidad se mide restando la posicion guardada del mouse con la posición que se habia guardado de este
  var velx = x1 - x2;
  var vely = y1 - y2;

  // se creaa un nuevo cubo que recibe por parametro las velocidades en x y y del mouse
  bolas[numBolas] = new bola(velx, vely);

  //aumenta el numero de cubos de la lista
  numBolas++;
}
//funcion que se llama cuando se hace clic
function mouseClicked() {

  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
}
