function setup() {
  createCanvas(600,600);
  background(244,222,183);
    fill(201,197,184);
  stroke(0);
  fill(244,222,183);
  ellipse(274, 384, 140, 140);
    noStroke();
  quad(340,400,200,378,200,600,375,420);
  fill(157,140,72);
  stroke(0);
  
  
  //triangulo beige
  triangle(433, 173, 167, 171, 389, 23);
  fill(20,74,52);
  quad(389, 23, 407, 10, 512, 173, 433, 173); 
  
  
  //circulo morado
  fill(114,84,153);
  ellipse(501,412,86,86);
  
  
  //circulo azul
  fill(55,42,146);
  ellipse(377,93,94,94);
  
  
  //componentes del circulo azul
  fill(246,235,126);
  triangle(330,84,331,103,373,93);
  fill(0);
  triangle(365,98,331,103,338,119);
  fill(237,230,223);
  ellipse(377,93,70,70);
  fill(231,2,0);
  stroke(84,13,0);
  triangle(412,124,416,119,397,102);
  fill(231,2,0);
  stroke(84,13,0);
  triangle(338,65,334,74,370,82);
  fill(0);
  ellipse(383,90,15,15);
  
  
  //triangulo negro superior izquierda
  fill(0);
  triangle(103, 117, 189, 0, 196, 0);
  

  
  //lineas que conforman el cuadro
  line(0,399,22,383);
  line(0,435,130,437);
  line(0,463,137,469);
  line(164,0,21,534);
  line(0,311,634,318);
  line(382,0,556,587);
  line(263,263,262,661);
  line(394,319,225,501);
  line(399,323,229,506);
  line(406,325,235,510);
  line(394,412,640,411);
  line(470,533,655,530);
  line(25,0,290,231);
  line(133,29,189,0);
  line(223,84,313,0);
  line(315,27,350,0);
  
  
  //arcos sin fondo
  noFill();
  arc(399, 540, 140, 140, PI, PI);
  arc(133, 385, 140, 140, PI, PI);
  arc(336, 470, 140, 140, PI, PI);
  noStroke();
  fill(227,217,124);
  
  
  //circulo verdoso a la izquierda inferior
  ellipse(-52.51,526,140,140);
  fill(218,185,53);
  
  
  //triangulo amarillo derecho inferior
  triangle(572, 472, 670, 318, 704, 467);
  
  
  //rectangulos negros y blancos superior izquierda
  stroke(0);
  fill(222,206,200);
  quad(-43,133,-30,146,6.7,105,-4.6,94);
  quad(-30,146,-15,161,20.7,120,6.7,105);
  quad(-4.6,94,22,67,32,77,6.7,105);
  quad(66,68,46,91,32,77,54,55);
  quad(102,25,84,48,71,36,91,13);
  quad(130,-4,115,10,103,0,119,-15);
  fill(1)
  quad(20,120,46,91,32,77,6.7,105);
  quad(43,45,22,67,32,77,54,55);
  quad(66,68,84,48,71,36,54,55);
  quad(102,25,115,10,103,0,91,13);
  
  
  //arcos blancos con lineas de colores
  strokeWeight(4);
  stroke(129,128,148);
  fill(249,243,241);
  arc(199,312,130,130, PI, PI);
  strokeWeight(4);
  stroke(224,200,74);
  fill(249,243,241);
  arc(64,311,130,130, PI, 2*PI);
  strokeWeight(4);
  stroke(183,29,36);
  fill(249,243,241);
  arc(333,314,130,130, PI, PI);
  strokeWeight(1);
  stroke(0);
  fill(249,243,241);
  arc(465,315,130,130, PI, PI);
  
  
  
    //rectangulos negro y rojo
  fill(0);
  quad(0, 217, 0, 226, 293, 167, 292, 158); 
  fill(134,13,29);
  stroke(0);
  quad(0, 258, 0, 264, 241, 193, 240, 187);  
  
  
  
  //lineas triples centrales
  line(199,407,336,269);
  line(206,413,361,249);
  line(212,417,387,229);
  fill(0);
  
  
  //rectangulo negro atravesado
  quad(176,375,182,384,607,65,607,53);
  fill(250);
  noStroke();
  quad(197,359,202,368,258,326,251,319);
  
  
  //arcos rojos superiores sin fondo
  noFill();
  strokeWeight(3);
  stroke(157,53,73);
  arc(265,67,80,80, PI - QUARTER_PI, 2*PI - QUARTER_PI);
  noFill();
  strokeWeight(3);
  stroke(157,53,73);
  arc(320,10,80,80, PI - QUARTER_PI, 2*PI - QUARTER_PI);
}
