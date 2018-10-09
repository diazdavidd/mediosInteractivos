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
  robotauto = new autoRobot(300, 0);
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
      image(walle, mouseX, mouseY, 100, 100);
    }
  }
  this.amor = function() {
    this.estaVivo = false
    image(walleamor, mouseX, mouseY, 100, 100);
  }
  this.asustado = function() {
    this.estaVivo = false
    image(walleasustado, mouseX, mouseY, 100, 100);
  }
  this.confundido = function() {
    this.estaVivo = false
    image(confundidowalle, mouseX, mouseY, 100, 100);
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
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(auto, this.x, this.y, 90, 115);
    }
  }
  this.electrico = function() {
    this.estaVivo = false
    image(autoelectrico, this.x, this.y, 90, 115);
  }
    this.bravo = function() {
    this.estaVivo = false
    image(autoenojado, this.x, this.y, 90, 115);
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