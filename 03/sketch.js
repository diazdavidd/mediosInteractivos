//Variables del codigo
	var par = 255;
	var x1= 230;
	var x2= 250;
	var x3= 266;
	var y1= 298;
	var y2= 255;
  var est= 2;
  var est2= 2;
  var cas= 0;
  var bol= 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //Estrellitas titilando intervalo 1
  fill(par);
  beginShape();
  vertex(20, 20);
  vertex(30, 18);
  vertex(32, 8);
  vertex(34, 18);
  vertex(44, 20);
  vertex(34, 22);
  vertex(32, 32);
  vertex(30,22);
  endShape(CLOSE);
  
    beginShape();
  vertex(20-10, 20+170);
  vertex(30-10, 18+170);
  vertex(32-10, 8+170);
  vertex(34-10, 18+170);
  vertex(44-10, 20+170);
  vertex(34-10, 22+170);
  vertex(32-10, 32+170);
  vertex(30-10,22+170);
  endShape(CLOSE);
  
   beginShape();
  vertex(20+215, 20);
  vertex(30+215, 18);
  vertex(32+215, 8);
  vertex(34+215, 18);
  vertex(44+215, 20);
  vertex(34+215, 22);
  vertex(32+215, 32);
  vertex(30+215,22);
  endShape(CLOSE);
  
  
        beginShape();
  vertex(20+180, 20+30);
  vertex(30+180, 18+30);
  vertex(32+180, 8+30);
  vertex(34+180, 18+30);
  vertex(44+180, 20+30);
  vertex(34+180, 22+30);
  vertex(32+180, 32+30);
  vertex(30+180, 22+30);
  endShape(CLOSE);
  
         beginShape();
  vertex(20+20, 20+60);
  vertex(30+20, 18+60);
  vertex(32+20, 8+60);
  vertex(34+20, 18+60);
  vertex(44+20, 20+60);
  vertex(34+20, 22+60);
  vertex(32+20, 32+60);
  vertex(30+20, 22+60);
  endShape(CLOSE);
  
  
  beginShape();
  vertex(20+330, 20+35);
  vertex(30+330, 18+35);
  vertex(32+330, 8+35);
  vertex(34+330, 18+35);
  vertex(44+330, 20+35);
  vertex(34+330, 22+35);
  vertex(32+330, 32+35);
  vertex(30+330, 22+35);
  endShape(CLOSE);
  
    beginShape();
   vertex(20+170, 20+170);
  vertex(30+170, 18+170);
  vertex(32+170, 8+170);
  vertex(34+170, 18+170);
  vertex(44+170, 20+170);
  vertex(34+170, 22+170);
  vertex(32+170, 32+170);
  vertex(30+170, 22+170);
  endShape(CLOSE);
  
      beginShape();
   vertex(20+250, 20+100);
  vertex(30+250, 18+100);
  vertex(32+250, 8+100);
  vertex(34+250, 18+100);
  vertex(44+250, 20+100);
  vertex(34+250, 22+100);
  vertex(32+250, 32+100);
  vertex(30+250, 22+100);
  endShape(CLOSE);
  
      beginShape();
   vertex(20+150, 20+80);
  vertex(30+150, 18+80);
  vertex(32+150, 8+80);
  vertex(34+150, 18+80);
  vertex(44+150, 20+80);
  vertex(34+150, 22+80);
  vertex(32+150, 32+80);
  vertex(30+150, 22+80);
  endShape(CLOSE);
  
     beginShape();
  vertex(20+235, 20+160);
  vertex(30+235, 18+160);
  vertex(32+235, 8+160);
  vertex(34+235, 18+160);
  vertex(44+235, 20+160);
  vertex(34+235, 22+160);
  vertex(32+235, 32+160);
  vertex(30+235, 22+160);
  endShape(CLOSE);
  
  
  //Intervalos de titilar de las estrellas
   if (frameCount >= 0 && frameCount< 5){
    par = 0;
   }
   if (frameCount >= 5 && frameCount< 10){
    par = 255;  
   }
    if (frameCount >= 10 && frameCount< 15){
    par = 0;  
   }
     if (frameCount >= 15 && frameCount< 20){
    par = 255;  
   }
     if (frameCount >= 20 && frameCount< 25){
    par = 0;  
   }
     if (frameCount >= 25 && frameCount< 30){
    par = 255;  
   }
     if (frameCount >= 30 && frameCount< 35){
    par = 0;  
   }
     if (frameCount >= 35 && frameCount< 40){
    par = 255;  
   }
     if (frameCount >= 40 && frameCount< 45){
    par = 0;  
   }
       if (frameCount >= 45 && frameCount< 50){
    par = 255;  
   }
       if (frameCount >= 50 && frameCount< 55){
    par = 0;  
   }
       if (frameCount >= 55 && frameCount< 60){
    par = 255;  
   }
       if (frameCount >= 60 && frameCount< 65){
    par = 0;  
   }
       if (frameCount >= 65 && frameCount< 70){
    par = 255;  
   }
  
  //Estrellitas titilando intervalo 2
  //Para que la pantalla no tenga tan pocos intervalos de
  //estrellas titilando, más dinamismo 
   fill(par);
   beginShape();
  vertex(20+90, 20+70);
  vertex(30+90, 18+70);
  vertex(32+90, 8+70);
  vertex(34+90, 18+70);
  vertex(44+90, 20+70);
  vertex(34+90, 22+70);
  vertex(32+90, 32+70);
  vertex(30+90, 22+70);
  endShape(CLOSE);
   
    beginShape();
   vertex(20+130, 20+120);
  vertex(30+130, 18+120);
  vertex(32+130, 8+120);
  vertex(34+130, 18+120);
  vertex(44+130, 20+120);
  vertex(34+130, 22+120);
  vertex(32+130, 32+120);
  vertex(30+130, 22+120);
  endShape(CLOSE);
  
beginShape();
  vertex(20+290, 20+15);
  vertex(30+290, 18+15);
  vertex(32+290, 8+15);
  vertex(34+290, 18+15);
  vertex(44+290, 20+15);
  vertex(34+290, 22+15);
  vertex(32+290, 32+15);
  vertex(30+290, 22+15);
  endShape(CLOSE);

        beginShape();
   vertex(20+200, 20+100);
  vertex(30+200, 18+100);
  vertex(32+200, 8+100);
  vertex(34+200, 18+100);
  vertex(44+200, 20+100);
  vertex(34+200, 22+100);
  vertex(32+200, 32+100);
  vertex(30+200, 22+100);
  endShape(CLOSE);
  
  //Intervalos de titilar de las estrellas
  //Entra dentro del intervalo anterior pero 
  //se cruza dentro de ellos para más dinamismo
    if (frameCount >= 1 && frameCount< 6){
    par = 0;
   }
   if (frameCount >= 6 && frameCount< 11){
    par = 255;  
   }
    if (frameCount >= 11 && frameCount< 16){
    par = 0;  
   }
     if (frameCount >= 16 && frameCount< 21){
    par = 255;  
   }
     if (frameCount >= 21 && frameCount< 26){
    par = 0;  
   }
     if (frameCount >= 26 && frameCount< 31){
    par = 255;  
   }
     if (frameCount >= 31 && frameCount< 36){
    par = 0;  
   }
     if (frameCount >= 36 && frameCount< 41){
    par = 255;  
   }
     if (frameCount >= 41 && frameCount< 46){
    par = 0;  
   }
       if (frameCount >= 46 && frameCount< 51){
    par = 255;  
   }
       if (frameCount >= 51 && frameCount< 56){
    par = 0;  
   }
       if (frameCount >= 56 && frameCount< 61){
    par = 255;  
   }
       if (frameCount >= 61 && frameCount< 66){
    par = 0;  
   }
       if (frameCount >= 66 && frameCount< 71){
    par = 255;  
   }
  
  
  //Estrellitas titilando intervalo 3
  //Para que la pantalla no tenga tan pocos intervalos de
  //estrellas titilando, más dinamismo 
  
  fill(par);
        beginShape();
  vertex(20+250, 20+50);
  vertex(30+250, 18+50);
  vertex(32+250, 8+50);
  vertex(34+250, 18+50);
  vertex(44+250, 20+50);
  vertex(34+250, 22+50);
  vertex(32+250, 32+50);
  vertex(30+250, 22+50);
  endShape(CLOSE);
  
     beginShape();
  vertex(20+60, 20+20);
  vertex(30+60, 18+20);
  vertex(32+60, 8+20);
  vertex(34+60, 18+20);
  vertex(44+60, 20+20);
  vertex(34+60, 22+20);
  vertex(32+60, 32+20);
  vertex(30+60, 22+20);
  endShape(CLOSE);
  
        beginShape();
  vertex(20+120, 20+10);
  vertex(30+120, 18+10);
  vertex(32+120, 8+10);
  vertex(34+120, 18+10);
  vertex(44+120, 20+10);
  vertex(34+120, 22+10);
  vertex(32+120, 32+10);
  vertex(30+120, 22+10);
  endShape(CLOSE);
  
  beginShape();
    vertex(20+10, 20+120);
  vertex(30+10, 18+120);
  vertex(32+10, 8+120);
  vertex(34+10, 18+120);
  vertex(44+10, 20+120);
  vertex(34+10, 22+120);
  vertex(32+10, 32+120);
  vertex(30+10, 22+120);
  endShape(CLOSE);
  
  beginShape();
   vertex(20+70, 20+140);
  vertex(30+70, 18+140);
  vertex(32+70, 8+140);
  vertex(34+70, 18+140);
  vertex(44+70, 20+140);
  vertex(34+70, 22+140);
  vertex(32+70, 32+140);
  vertex(30+70, 22+140);
  endShape(CLOSE);
  
    beginShape();
   vertex(20+330, 20+160);
  vertex(30+330, 18+160);
  vertex(32+330, 8+160);
  vertex(34+330, 18+160);
  vertex(44+330, 20+160);
  vertex(34+330, 22+160);
  vertex(32+330, 32+160);
  vertex(30+330, 22+160);
  endShape(CLOSE);
  
  //Intervalos de titilar de las estrellas
  //Este es se cruza con los anteriores en algunos
  //intervalos para hacerlo más dinámico
      if (frameCount >= 2 && frameCount< 7){
    par = 0;
   }
   if (frameCount >= 10 && frameCount< 12){
    par = 255;  
   }
    if (frameCount >= 12 && frameCount< 17){
    par = 0;  
   }
     if (frameCount >= 17 && frameCount< 22){
    par = 255;  
   }
     if (frameCount >= 22 && frameCount< 27){
    par = 0;  
   }
     if (frameCount >= 27 && frameCount< 32){
    par = 255;  
   }
     if (frameCount >= 32 && frameCount< 37){
    par = 0;  
   }
     if (frameCount >= 37 && frameCount< 42){
    par = 255;  
   }
     if (frameCount >= 42 && frameCount< 47){
    par = 0;  
   }
       if (frameCount >= 47 && frameCount< 52){
    par = 255;  
   }
       if (frameCount >= 52 && frameCount< 57){
    par = 0;  
   }
       if (frameCount >= 57 && frameCount< 62){
    par = 255;  
   }
         if (frameCount >= 62 && frameCount< 67){
    par = 0;  
   }
         if (frameCount >= 67 && frameCount< 72){
    par = 255;  
   }
  
  
  
  frameRate(5);
  //Base de la luna (grande)
  fill(220);
  ellipse(200,400, 600, 400);
  
  //Craters encima de la luna
  fill(200);
  ellipse(120,350, 30, 20);
  ellipse(120+150,350-30, 70, 30);
  ellipse(120-100,350-60, 50, 25);
  ellipse(120+30,350-100, 100, 50);
  ellipse(120+220,350-100, 25, 10);
  line(234,319.3,232.05,330.6);
  line(305,319.3,309.63,330.6);
  line(45,290.05,48.08,299.3);
  line(99,250,94.57,269.45);
  line(200,250,206.89,269.45);
  line(327, 250, 326.05, 255);
  line(352.36, 250, 354.44, 255);
  line(104,350,103.4,357.34);
  line(135,350,137.2,357.34);
  
  //Cuerpo y traje del astronauta
  line(x1,y1,x2,y2);
  line(x3,y1,x2,y2);
  line(x2,y2,250,204);
  fill(240);
  ellipse(250, 181, 45, 45);
   stroke(0);
  noFill();
  beginShape();
  vertex(236.74,263.28);
  vertex(235,250);
  vertex(250,215);
  vertex(263.34,245);
  vertex(278.29,255);
  endShape();
  fill(240);
  rect(237,209,25,35,10,10,10,10);
  ellipse(246.87,228.46,6.77,9.7);
  beginShape();
  vertex(251.68,229.43);
  vertex(252.47,228.43);
  vertex(254.11,228.43);
  vertex(254.9,229.43);
  vertex(251.68,232.95);
  vertex(254.9,232.95);
  endShape();
  fill(147);
  beginShape();
  vertex(252.3,220.47);
  vertex(255.16,216.47);
  vertex(256.65,208.48);
  vertex(256.65,205.05);
  vertex(252.3,200)
  vertex(252.3,198.97);
  vertex(253.84,198.49);
  vertex(255.26,199.16);
  vertex(260.47,205.13);
  vertex(260.47,208.82);
  vertex(259.24,216.88);
  vertex(255.59,221.9);
  vertex(253.45,221.9);
  vertex(252.3,220.47);
  endShape();
  
  //Casco astronauta que se mueve de un lado al otro con
  //la estrella
  fill(255,255,217);
  stroke(0);
  beginShape();
  vertex(256-cas,181);
  vertex(250,158);
  vertex(260-cas*3.6,159);
  vertex(271-cas*7,169);
  vertex(272-cas*7.4,176);
  vertex(256-cas,181);
  endShape();
  if (frameCount >= 42 && frameCount< 200){
    cas = 6;
  }
  //Estrella fugaz amarilla
 fill(255,242,0);
    beginShape();
  vertex(20+380-est2, 20+170-est);
  vertex(33+380-est2, 20+170-est);
  vertex(38+380-est2, 7+170-est);
  vertex(42+380-est2, 20+170-est);
  vertex(56+380-est2, 20+170-est);
  vertex(48.36+380-est2, 25.41+170-est);
  vertex(85+380-est2, 42+170-est);
  vertex(78+380-est2, 42+170-est);
  vertex(81+380-est2,46+170-est);
  vertex(77+380-est2,46+170-est);
  vertex(80+380-est2,51+170-est);
  vertex(46+380-est2,31.68+170-est);
  vertex(49+380-est2,41+170-est);
  vertex(38+380-est2,33+170-est);
  vertex(27+380-est2,41+170-est);
  vertex(31+380-est2,28+170-est);
  vertex(20+380-est2, 20+170-est);
  endShape(CLOSE);
  endShape();
  
  //Intervalos de la estrella fugaz para su movimiento
  
  if (frameCount >= 1 && frameCount< 4){
    est = 10;
    est2 = 5;
   }
   if (frameCount >= 4 && frameCount< 7){
    est = 20; 
    est2 = 10;
   }
    if (frameCount >= 7 && frameCount< 10){
    est = 30;  
    est2 = 15;
   }
     if (frameCount >= 10 && frameCount< 13){
    est = 40; 
      est2 = 20;
   }
     if (frameCount >= 13 && frameCount< 16){
    est2 = 50;
       est2 = 30;
   }
     if (frameCount >= 16 && frameCount< 19){
    est = 60; 
       est2 = 40;
   }
     if (frameCount >= 19 && frameCount< 22){
    est = 70; 
       est2 = 60;
   }
     if (frameCount >= 22 && frameCount< 25){
    est = 80;  
       est2 = 80;
   }
     if (frameCount >= 25 && frameCount< 28){
    est = 90;  
       est2 = 100;
   }
       if (frameCount >= 28 && frameCount< 31){
    est = 100;  
         est2 = 120;
   }
       if (frameCount >= 31 && frameCount< 34){
    est = 120;  
         est2 = 140;
   }
       if (frameCount >= 34 && frameCount< 37){
    est = 130; 
         est2 = 160; 
   }
       if (frameCount >= 37 && frameCount< 40){
    est = 140;
         est2 = 180;
   }
       if (frameCount >= 40 && frameCount< 43){
    est = 150;
         est2 = 190;
   }
         if (frameCount >= 43 && frameCount< 46){
    est = 160;
         est2 = 200;
   }
         if (frameCount >= 46 && frameCount< 49){
    est = 170;
         est2 = 210;
   }
         if (frameCount >= 49 && frameCount< 52){
    est = 180;
         est2 = 220;
   }
         if (frameCount >= 52 && frameCount< 55){
    est = 190;
         est2 = 225;
   }
    if (frameCount >= 55 && frameCount< 58){
    est = 200;
         est2 = 230;
   }
    if (frameCount >= 58 && frameCount< 61){
    est = 210;
         est2 = 235;
   }
    if (frameCount >= 61 && frameCount< 64){
    est = 220;
         est2 = 240;
   }
    if (frameCount >= 64 && frameCount< 67){
    est = 230;
         est2 = 245;
   }
  fill(220);
  ellipse(274.23,163.78,5*bol,5*bol);
  ellipse(283.7,154.29, 9*bol,9*bol);
  ellipse(296.84,141.55,13.5*bol,13.5*bol);
  ellipse(336.25,109.72,86*bol,70*bol);
  fill(0);
  ellipse(320,109.72, 6*bol, 6*bol);
  ellipse(336.77,109.72, 6*bol, 6*bol);
  ellipse(352.18,109.72, 6*bol, 6*bol);
  if (frameCount >= 34 && frameCount< 67){
    bol = 1;
   }
    if (frameCount >= 67 && frameCount< 200){
    bol = 0;
   }
  
}