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
	var cas2= 1;
  var bol= 0;
	var ovn= 0;
	var abd= 0;
 	var abd2= 0;
function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(0);
  
  //Estrellitas titilando intervalo 1
  fill(par);
  beginShape();
  vertex(20*width/400, 20*height/400);
  vertex(30*width/400, 18*height/400);
  vertex(32*width/400, 8*height/400);
  vertex(34*width/400, 18*height/400);
  vertex(44*width/400, 20*height/400);
  vertex(34*width/400, 22*height/400);
  vertex(32*width/400, 32*height/400);
  vertex(30*width/400, 22*height/400);
  endShape(CLOSE);
  
    beginShape();
  vertex((20-10)*width/400, (20+170)*height/400);
  vertex((30-10)*width/400, (18+170)*height/400);
  vertex((32-10)*width/400, (8+170)*height/400);
  vertex((34-10)*width/400, (18+170)*height/400);
  vertex((44-10)*width/400, (20+170)*height/400);
  vertex((34-10)*width/400, (22+170)*height/400);
  vertex((32-10)*width/400, (32+170)*height/400);
  vertex((30-10)*width/400, (22+170)*height/400);
  endShape(CLOSE);
  
   beginShape();
  vertex((20+215)*width/400, 20*height/400);
  vertex((30+215)*width/400, 18*height/400);
  vertex((32+215)*width/400, 8*height/400);
  vertex((34+215)*width/400, 18*height/400);
  vertex((44+215)*width/400, 20*height/400);
  vertex((34+215)*width/400, 22*height/400);
  vertex((32+215)*width/400, 32*height/400);
  vertex((30+215)*width/400, 22*height/400);
  endShape(CLOSE);
  
  
        beginShape();
  vertex((20+180)*width/400, (20+30)*height/400);
  vertex((30+180)*width/400, (18+30)*height/400);
  vertex((32+180)*width/400, (8+30)*height/400);
  vertex((34+180)*width/400, (18+30)*height/400);
  vertex((44+180)*width/400, (20+30)*height/400);
  vertex((34+180)*width/400, (22+30)*height/400);
  vertex((32+180)*width/400, (32+30)*height/400);
  vertex((30+180)*width/400, (22+30)*height/400);
  endShape(CLOSE);
  
         beginShape();
  vertex((20+20)*width/400, (20+60)*height/400);
  vertex((30+20)*width/400, (18+60)*height/400);
  vertex((32+20)*width/400, (8+60)*height/400);
  vertex((34+20)*width/400, (18+60)*height/400);
  vertex((44+20)*width/400, (20+60)*height/400);
  vertex((34+20)*width/400, (22+60)*height/400);
  vertex((32+20)*width/400, (32+60)*height/400);
  vertex((30+20)*width/400, (22+60)*height/400);
  endShape(CLOSE);
  
  
  beginShape();
  vertex((20+330)*width/400, (20+35)*height/400);
  vertex((30+330)*width/400, (18+35)*height/400);
  vertex((32+330)*width/400, (8+35)*height/400);
  vertex((34+330)*width/400, (18+35)*height/400);
  vertex((44+330)*width/400, (20+35)*height/400);
  vertex((34+330)*width/400, (22+35)*height/400);
  vertex((32+330)*width/400, (32+35)*height/400);
  vertex((30+330)*width/400, (22+35)*height/400);
  endShape(CLOSE);
  
    beginShape();
  vertex((20+170)*width/400,  (20+170)*height/400);
  vertex((30+170)*width/400,  (18+170)*height/400);
  vertex((32+170)*width/400,  (8+170)*height/400);
  vertex((34+170)*width/400,  (18+170)*height/400);
  vertex((44+170)*width/400,  (20+170)*height/400);
  vertex((34+170)*width/400,  (22+170)*height/400);
  vertex((32+170)*width/400,  (32+170)*height/400);
  vertex((30+170)*width/400,  (22+170)*height/400);
  endShape(CLOSE);
  
      beginShape();
  vertex((20+250)*width/400, (20+100)*height/400);
  vertex((30+250)*width/400, (18+100)*height/400);
  vertex((32+250)*width/400, (8+100)*height/400);
  vertex((34+250)*width/400, (18+100)*height/400);
  vertex((44+250)*width/400, (20+100)*height/400);
  vertex((34+250)*width/400, (22+100)*height/400);
  vertex((32+250)*width/400, (32+100)*height/400);
  vertex((30+250)*width/400, (22+100)*height/400);
  endShape(CLOSE);
  
      beginShape();
  vertex((20+150)*width/400, (20+80)*height/400);
  vertex((30+150)*width/400, (18+80)*height/400);
  vertex((32+150)*width/400, (8+80)*height/400);
  vertex((34+150)*width/400, (18+80)*height/400);
  vertex((44+150)*width/400, (20+80)*height/400);
  vertex((34+150)*width/400, (22+80)*height/400);
  vertex((32+150)*width/400, (32+80)*height/400);
  vertex((30+150)*width/400, (22+80)*height/400);
  endShape(CLOSE);
  
     beginShape();
  vertex((20+235)*width/400, (20+160)*height/400);
  vertex((30+235)*width/400, (18+160)*height/400);
  vertex((32+235)*width/400, (8+160)*height/400);
  vertex((34+235)*width/400, (18+160)*height/400);
  vertex((44+235)*width/400, (20+160)*height/400);
  vertex((34+235)*width/400, (22+160)*height/400);
  vertex((32+235)*width/400, (32+160)*height/400);
  vertex((30+235)*width/400, (22+160)*height/400);
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
         if (frameCount >= 70 && frameCount< 75){
    par = 0;  
   }       if (frameCount >= 75 && frameCount< 80){
    par = 255;  
   }       if (frameCount >= 80 && frameCount< 85){
    par = 0;  
   }       if (frameCount >= 85 && frameCount< 90){
    par = 255;  
   }       if (frameCount >= 90 && frameCount< 95){
    par = 0;  
	 }
         if (frameCount >= 95 && frameCount< 100){
    par = 255;  
   }
         if (frameCount >= 100 && frameCount< 105){
    par = 0;  
   }
         if (frameCount >= 105 && frameCount< 110){
    par = 255;  
   }
         if (frameCount >= 110 && frameCount< 115){
    par = 0;  
   }
           if (frameCount >= 115 && frameCount< 120){
    par = 255;  
   }
           if (frameCount >= 120 && frameCount< 125){
    par = 0;  
   }
           if (frameCount >= 125 && frameCount< 130){
    par = 255;  
   }
  

  //Estrellitas titilando intervalo 2
  //Para que la pantalla no tenga tan pocos intervalos de
  //estrellas titilando, más dinamismo 
   fill(par);
   beginShape();
  vertex((20+90)*width/400, (20+70)*height/400);
  vertex((30+90)*width/400, (18+70)*height/400);
  vertex((32+90)*width/400, (8+70)*height/400);
  vertex((34+90)*width/400, (18+70)*height/400);
  vertex((44+90)*width/400, (20+70)*height/400);
  vertex((34+90)*width/400, (22+70)*height/400);
  vertex((32+90)*width/400, (32+70)*height/400);
  vertex((30+90)*width/400, (22+70)*height/400);
  endShape(CLOSE);
   
    beginShape();
   vertex((20+130)*width/400, (20+120)*height/400);
  vertex((30+130)*width/400, (18+120)*height/400);
  vertex((32+130)*width/400, (8+120)*height/400);
  vertex((34+130)*width/400, (18+120)*height/400);
  vertex((44+130)*width/400, (20+120)*height/400);
  vertex((34+130)*width/400, (22+120)*height/400);
  vertex((32+130)*width/400, (32+120)*height/400);
  vertex((30+130)*width/400, (22+120)*height/400);
  endShape(CLOSE);
  
beginShape();
  vertex((20+290)*width/400, (20+15)*height/400);
  vertex((30+290)*width/400, (18+15)*height/400);
  vertex((32+290)*width/400, (8+15)*height/400);
  vertex((34+290)*width/400, (18+15)*height/400);
  vertex((44+290)*width/400, (20+15)*height/400);
  vertex((34+290)*width/400, (22+15)*height/400);
  vertex((32+290)*width/400, (32+15)*height/400);
  vertex((30+290)*width/400, (22+15)*height/400);
  endShape(CLOSE);

        beginShape();
  vertex((20+200)*width/400, (20+100)*height/400);
  vertex((30+200)*width/400, (18+100)*height/400);
  vertex((32+200)*width/400, (8+100)*height/400);
  vertex((34+200)*width/400, (18+100)*height/400);
  vertex((44+200)*width/400, (20+100)*height/400);
  vertex((34+200)*width/400, (22+100)*height/400);
  vertex((32+200)*width/400, (32+100)*height/400);
  vertex((30+200)*width/400, (22+100)*height/400);
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
         if (frameCount >= 71 && frameCount< 76){
    par = 0;  
   }
         if (frameCount >= 76 && frameCount< 81){
    par = 255;  
   }
         if (frameCount >= 81 && frameCount< 86){
    par = 0;  
   }
         if (frameCount >= 86 && frameCount< 91){
    par = 255;  
   }
         if (frameCount >= 91 && frameCount< 96){
    par = 0;  
   }
         if (frameCount >= 96 && frameCount< 101){
    par = 255;  
   }
         if (frameCount >= 101 && frameCount< 106){
    par = 0;  
   }
         if (frameCount >= 106 && frameCount< 111){
    par = 255;  
   }
           if (frameCount >= 111 && frameCount< 116){
    par = 0;  
   }
           if (frameCount >= 116 && frameCount< 121){
    par = 255;  
   }
           if (frameCount >= 121 && frameCount< 126){
    par = 0;  
   }
           if (frameCount >= 126 && frameCount< 131){
    par = 255;  
   }
  
  
  
  
  //Estrellitas titilando intervalo 3
  //Para que la pantalla no tenga tan pocos intervalos de
  //estrellas titilando, más dinamismo 
  
  fill(par);
        beginShape();
  vertex((20+250)*width/400, (20+50)*height/400);
  vertex((30+250)*width/400, (18+50)*height/400);
  vertex((32+250)*width/400, (8+50)*height/400);
  vertex((34+250)*width/400, (18+50)*height/400);
  vertex((44+250)*width/400, (20+50)*height/400);
  vertex((34+250)*width/400, (22+50)*height/400);
  vertex((32+250)*width/400, (32+50)*height/400);
  vertex((30+250)*width/400, (22+50)*height/400);
  endShape(CLOSE);
  
     beginShape();
  vertex((20+60)*width/400, (20+20)*height/400);
  vertex((30+60)*width/400, (18+20)*height/400);
  vertex((32+60)*width/400, (8+20)*height/400);
  vertex((34+60)*width/400, (18+20)*height/400);
  vertex((44+60)*width/400, (20+20)*height/400);
  vertex((34+60)*width/400, (22+20)*height/400);
  vertex((32+60)*width/400, (32+20)*height/400);
  vertex((30+60)*width/400, (22+20)*height/400);
  endShape(CLOSE);
  
        beginShape();
  vertex((20+120)*width/400, (20+10)*height/400);
  vertex((30+120)*width/400, (18+10)*height/400);
  vertex((32+120)*width/400, (8+10)*height/400);
  vertex((34+120)*width/400, (18+10)*height/400);
  vertex((44+120)*width/400, (20+10)*height/400);
  vertex((34+120)*width/400, (22+10)*height/400);
  vertex((32+120)*width/400, (32+10)*height/400);
  vertex((30+120)*width/400, (22+10)*height/400);
  endShape(CLOSE);
  
  beginShape();
  vertex((20+10)*width/400, (20+120)*height/400);
  vertex((30+10)*width/400, (18+120)*height/400);
  vertex((32+10)*width/400, (8+120)*height/400);
  vertex((34+10)*width/400, (18+120)*height/400);
  vertex((44+10)*width/400, (20+120)*height/400);
  vertex((34+10)*width/400, (22+120)*height/400);
  vertex((32+10)*width/400, (32+120)*height/400);
  vertex((30+10)*width/400, (22+120)*height/400);
  endShape(CLOSE);
  
  beginShape();
  vertex((20+70)*width/400, (20+140)*height/400);
  vertex((30+70)*width/400, (18+140)*height/400);
  vertex((32+70)*width/400, (8+140)*height/400);
  vertex((34+70)*width/400, (18+140)*height/400);
  vertex((44+70)*width/400, (20+140)*height/400);
  vertex((34+70)*width/400, (22+140)*height/400);
  vertex((32+70)*width/400, (32+140)*height/400);
  vertex((30+70)*width/400, (22+140)*height/400);
  endShape(CLOSE);
  
    beginShape();
  vertex((20+330)*width/400, (20+160)*height/400);
  vertex((30+330)*width/400, (18+160)*height/400);
  vertex((32+330)*width/400, (8+160)*height/400);
  vertex((34+330)*width/400, (18+160)*height/400);
  vertex((44+330)*width/400, (20+160)*height/400);
  vertex((34+330)*width/400, (22+160)*height/400);
  vertex((32+330)*width/400, (32+160)*height/400);
  vertex((30+330)*width/400, (22+160)*height/400);
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
   	     if (frameCount >= 72 && frameCount< 77){
    par = 0;  
   }
     	     if (frameCount >= 77 && frameCount< 82){
    par = 255;  
   }
     	     if (frameCount >= 67 && frameCount< 87){
    par = 0;  
   }
     	     if (frameCount >= 87 && frameCount< 92){
    par = 255;  
   }
     	     if (frameCount >= 92 && frameCount< 97){
    par = 0;  
   }
     	     if (frameCount >= 97 && frameCount< 102){
    par = 255;  
   }
     	     if (frameCount >= 102 && frameCount< 107){
    par = 0;  
   }
     	     if (frameCount >= 107 && frameCount< 112){
    par = 255;  
   }
       	     if (frameCount >= 112 && frameCount< 117){
    par = 0;  
   }
       	     if (frameCount >= 117 && frameCount< 122){
    par = 255;  
   }
       	     if (frameCount >= 122 && frameCount< 127){
    par = 0;  
   }
       	     if (frameCount >= 127 && frameCount< 132){
    par = 255;  
   }
  
  frameRate(5);
  //Base de la luna (grande)
  fill(220);
  ellipse(200*width/400,400*height/400, 600*width/400, 400*height/400);
  
  //Cráteres encima de la luna
  fill(200);
  ellipse(120*width/400,350*height/400, 30*width/400, 20*height/400);
  ellipse((120+150)*width/400,(350-30)*height/400, 70*width/400, 30*height/400);
  ellipse((120-100)*width/400,(350-60)*height/400, 50*width/400, 25*height/400);
  ellipse((120+30)*width/400,(350-100)*height/400, 100*width/400, 50*height/400);
  ellipse((120+220)*width/400,(350-100)*height/400, 25*width/400, 10*height/400);
  line(234*width/400,319.3*height/400,232.05*width/400,330.6*height/400);
  line(305*width/400,319.3*height/400,309.63*width/400,330.6*height/400);
  line(45*width/400,290.05*height/400,48.08*width/400,299.3*height/400);
  line(99*width/400,250*height/400,94.57*width/400,269.45*height/400);
  line(200*width/400,250*height/400, 206.89*width/400, 269.45*height/400);
  line(327*width/400, 250*height/400, 326.05*width/400, 255*height/400);
  line(352.36*width/400, 250*height/400, 354.44*width/400, 255*height/400);
  line(104*width/400,350*height/400,103.4*width/400, 357.34*height/400);
  line(135*width/400,350*height/400,137.2*width/400, 357.34*height/400);
  
  //Cuerpo y traje del astronauta
  line((x1*cas2)*width/400,(y1*cas2)*height/400,(x2*cas2)*width/400,(y2*cas2)*height/400);
  line((x3*cas2)*width/400,(y1*cas2)*height/400,(x2*cas2)*width/400,(y2*cas2)*height/400);
  line((x2*cas2)*width/400,(y2*cas2)*height/400,(250*cas2)*width/400,(204*cas2)*height/400);
  fill(240);
  ellipse((250*cas2)*width/400, (181*cas2)*height/400, 45*width/400, 45*height/400);
   stroke(0);
  noFill();
  beginShape();
  vertex((236.74*cas2)*width/400,(263.28*cas2)*height/400);
  vertex((235*cas2)*width/400,(250*cas2)*height/400);
  vertex((250*cas2)*width/400,(215*cas2)*height/400);
  vertex((263.34*cas2)*width/400,(245*cas2)*height/400);
  vertex((278.29*cas2)*width/400,(255*cas2)*height/400);
  endShape();
  fill(240);
  rect((237*cas2)*width/400,(209*cas2)*height/400,(25*cas2)*width/400,(35*cas2)*height/400,10,10,10,10);
  ellipse((246.87*cas2)*width/400,(228.46*cas2)*height/400,6.77*width/400,9.7*height/400);
  beginShape();
  vertex((251.68*cas2)*width/400,(229.43*cas2)*height/400);
  vertex((252.47*cas2)*width/400,(228.43*cas2)*height/400);
  vertex((254.11*cas2)*width/400,(228.43*cas2)*height/400);
  vertex((254.9*cas2)*width/400,(229.43*cas2)*height/400);
  vertex((251.68*cas2)*width/400,(232.95*cas2)*height/400);
  vertex((254.9*cas2)*width/400,(232.95*cas2)*height/400);
  endShape();
  fill(147);
  beginShape();
  vertex((252.3*cas2)*width/400,(220.47*cas2)*height/400);
  vertex((255.16*cas2)*width/400,(216.47*cas2)*height/400);
  vertex((256.65*cas2)*width/400,(208.48*cas2)*height/400);
  vertex((256.65*cas2)*width/400,(205.05*cas2)*height/400);
  vertex((252.3*cas2)*width/400,(200*cas2)*height/400)
  vertex((252.3*cas2)*width/400,(198.97*cas2)*height/400);
  vertex((253.84*cas2)*width/400,(198.49*cas2)*height/400);
  vertex((255.26*cas2)*width/400,(199.16*cas2)*height/400);
  vertex((260.47*cas2)*width/400,(205.13*cas2)*height/400);
  vertex((260.47*cas2)*width/400,(208.82*cas2)*height/400);
  vertex((259.24*cas2)*width/400,(216.88*cas2)*height/400);
  vertex((255.59*cas2)*width/400,(221.9*cas2)*height/400);
  vertex((253.45*cas2)*width/400,(221.9*cas2)*height/400);
  vertex((252.3*cas2)*width/400,(220.47*cas2)*height/400);
  endShape();
    if (frameCount >= 102 && frameCount< 112){
    cas = 1000;
    cas2 = 1000;
    }
  //Casco astronauta que se mueve de un lado al otro con
  //la estrella
  fill(255,255,217);
  stroke(0);
  beginShape();
  vertex((256-cas)*width/400,(181*cas2)*height/400);
  vertex((250*cas2)*width/400,(158*cas2)*height/400);
  vertex((260-cas*3.6)*width/400,(159*cas2)*height/400);
  vertex((271-cas*7)*width/400,(169*cas2)*height/400);
  vertex((272-cas*7.4)*width/400,(176*cas2)*height/400);
  vertex((256-cas)*width/400,(181*cas2)*height/400);
  endShape();
  if (frameCount >= 42 && frameCount< 102){
    cas = 6;
  }
  if (frameCount >= 102 && frameCount< 112){
    cas = 1000;
    cas2 = 1000;
  }
      
  //Estrella fugaz amarilla
 fill(255,242,0);
    beginShape();
  vertex((20+380-est2)*width/400, (20+170-est)*height/400);
  vertex((33+380-est2)*width/400, (20+170-est)*height/400);
  vertex((38+380-est2)*width/400, (7+170-est)*height/400);
  vertex((42+380-est2)*width/400, (20+170-est)*height/400);
  vertex((56+380-est2)*width/400, (20+170-est)*height/400);
  vertex((48.36+380-est2)*width/400, (25.41+170-est)*height/400);
  vertex((85+380-est2)*width/400, (42+170-est)*height/400);
  vertex((78+380-est2)*width/400, (42+170-est)*height/400);
  vertex((81+380-est2)*width/400, (46+170-est)*height/400);
  vertex((77+380-est2)*width/400, (46+170-est)*height/400);
  vertex((80+380-est2)*width/400, (51+170-est)*height/400);
  vertex((46+380-est2)*width/400, (31.68+170-est)*height/400);
  vertex((49+380-est2)*width/400, (41+170-est)*height/400);
  vertex((38+380-est2)*width/400, (33+170-est)*height/400);
  vertex((27+380-est2)*width/400, (41+170-est)*height/400);
  vertex((31+380-est2)*width/400, (28+170-est)*height/400);
  vertex((20+380-est2)*width/400, (20+170-est)*height/400);
  endShape(CLOSE);
  endShape();
  
  //Intervalos de la estrella fugaz para su movimiento
  
  if (frameCount >= 1 && frameCount< 140){
    est = est+4;
    est2 = est2+5;
   }
  
	//Pensamiento del astronauta
  fill(220);
  ellipse(274.23*width/400,(163.78)*height/400,(5*bol)*width/400,(5*bol)*height/400);
  ellipse(283.7*width/400,(154.29)*height/400, (9*bol)*width/400,(9*bol)*height/400);
  ellipse(296.84*width/400,(141.55)*height/400,(13.5*bol)*width/400,(13.5*bol)*height/400);
  ellipse(336.25*width/400,(109.72)*height/400,(86*bol)*width/400,(70*bol)*height/400);
  fill(0);
  ellipse(320*width/400,(109.72)*height/400, (6*bol)*width/400, (6*bol)*height/400);
  ellipse(336.77*width/400,(109.72)*height/400, (6*bol)*width/400, (6*bol)*height/400);
  ellipse(352.18*width/400,(109.72)*height/400, (6*bol)*width/400, (6*bol)*height/400);
  if (frameCount >= 34 && frameCount< 62){
    bol = 1;
   }
    if (frameCount >= 62 && frameCount< 140){
    bol = 0;
   }
  
  //Ovni y su movimiento
  fill(40,133,65);
  ellipse((522-ovn)*width/400,48*height/400,110*width/400,110*height/400);
  fill(59,181,84);
  ellipse((522-ovn)*width/400,61.77*height/400,223.75*width/400,74.76*height/400);
  ellipse((522-ovn)*width/400,71.3*height/400,223.75*width/400,74.76*height/400);
  fill(147);
  ellipse((522-ovn)*width/400,71.3*height/400,82.5*width/400,26*height/400);
  
  if (frameCount >= 60 && frameCount< 87){
    ovn = ovn+10;
   }
    if (frameCount >= 87 && frameCount< 112){
    ovn = ovn;
   }
    if (frameCount >= 112 && frameCount< 140){
    ovn = ovn-10;
   }
  //Láser de adbucción
  fill(255,0,231,80);
  quad((220.5*abd)*width/400,(71.3*abd)*height/400,(280*abd)*width/400,(71.3*abd)*height/400,(284*abd)*width/400,(84.2*abd2)*height/400,(218*abd)*width/400,(84.2*abd2)*height/400);
  if (frameCount >= 87 && frameCount< 92){
    abd = 1;
    abd2 = 1;
   }
    if (frameCount >= 92 && frameCount< 102){
    abd2 = abd2+1.2;
   }    
  if (frameCount >= 102 && frameCount< 112){
    abd2 = 0;
    abd = 0;
   }
  //if(frameCount <= 140){
    //if (frameCount % 2 == 0) 
    //saveCanvas("espacio_Ej03Diaz" + frameCount, "jpg");
//}
}
