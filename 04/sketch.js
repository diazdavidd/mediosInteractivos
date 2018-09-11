var posXbot1 = 50;
var posYbot1 = 50;
var tamBot1 = 50;
var posXbot2 = 100;
var posYbot2 = 50;
var tamBot2 = 50;
var posXbot3 = 150;
var posYbot3 = 50;
var tamBot3 = 50;
var posXbot4 = 200;
var posYbot4 = 50;
var tamBot4 = 50;
var posXbot5 = 250;
var posYbot5 = 50;
var tamBot5 = 50;
var posXbot6 = 300;
var posYbot6 = 50;
var tamBot6 = 50;
var posXbot7 = 350;
var posYbot7= 50;
var tamBot7= 50;
var posXbot8= 400;
var posYbot8= 50;
var tamBot8= 50;
var posXbot9= 450;
var posYbot9= 50;
var tamBot9= 50;
var posXbot10= 500;
var posYbot10 = 50;
var tamBot10=50;
var posXbot11= 520;
var posYbot11 = 275;
var tamBot11=50;


var posXbot12 = 50;
var posYbot12 = 500;
var tamBot12 = 50;
var posXbot13 = 100;
var posYbot13 = 500;
var tamBot13 = 50;
var posXbot14 = 150;
var posYbot14 = 500;
var tamBot14 = 50;
var posXbot15 = 200;
var posYbot15 = 500;
var tamBot15 = 50;
var posXbot16 = 250;
var posYbot16 = 500;
var tamBot16 = 50;
var posXbot17 = 300;
var posYbot17= 500;
var tamBot17= 50;
var posXbot18= 350;
var posYbot18= 500;
var tamBot18= 50;
var posXbot19= 400;
var posYbot19= 500;
var tamBot19= 50;
var posXbot20= 450;
var posYbot20 = 500;
var tamBot20=50;
var posXbot21= 500;
var posYbot21 = 500;
var tamBot21=50;
var forma = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {

  text('H E R R A M I E N T A S', 50, 45);
  text('B O R R A R', 510, 270);
  text('C O L O R E S', 50, 495);
  rect(posXbot1, posYbot1, tamBot1, tamBot1);
  rect(posXbot2, posYbot2, tamBot2, tamBot2);
  rect(posXbot3, posYbot3, tamBot3, tamBot3);
  rect(posXbot4, posYbot4, tamBot4, tamBot4);
  rect(posXbot5, posYbot5, tamBot5, tamBot5);
  rect(posXbot6, posYbot6, tamBot6, tamBot6);
  rect(posXbot7, posYbot7, tamBot7, tamBot7);
  rect(posXbot8, posYbot8, tamBot8, tamBot8);
  rect(posXbot9, posYbot9, tamBot9, tamBot9);
  rect(posXbot10, posYbot10, tamBot10, tamBot10);
  rect(posXbot11, posYbot11, tamBot11, tamBot11);
  
  rect(posXbot12, posYbot12, tamBot12, tamBot12);
  rect(posXbot13, posYbot13, tamBot13, tamBot13);
  rect(posXbot14, posYbot14, tamBot14, tamBot14);
  rect(posXbot15, posYbot15, tamBot15, tamBot15);
  rect(posXbot16, posYbot16, tamBot16, tamBot16);
  rect(posXbot17, posYbot17, tamBot17, tamBot17);
  rect(posXbot18, posYbot18, tamBot18, tamBot18);
  rect(posXbot19, posYbot19, tamBot19, tamBot19);
  rect(posXbot20, posYbot20, tamBot20, tamBot20);
  rect(posXbot21, posYbot21, tamBot21, tamBot21);
    ellipse(65, 75, 20, 20);
  ellipse(85, 75, 20, 20);
  arc(125, 70, 20, 20, 0, PI);
  line(160, 90, 190, 60);
  point(224, 75);
	triangle(275, 65,290, 85,260, 85);
  quad(307,84,344,64,315,67,326,85)
  triangle(375, 70,391, 90,361, 90);
  quad(470,80,483,70,460,86,493,81)
  arc(525, 70, 30, 30, 0, PI);
  arc(525, 70, 15, 15, 0, PI);

  ellipse(375,70, 20,20);
  ellipse(425, 75, 30, 30);
  ellipse(425, 75, 15, 15);
  push();
  fill(255,0,0);
  rect(63, 513, 25,25);
  pop();
  push();
  fill(0,255,0);
  rect(113, 513, 25,25);
  pop();
  push();
  fill(0,0,255);
  rect(163, 513, 25,25);
  pop();
  push();
  fill(0,255,255);
  rect(213, 513, 25,25);
  pop();
  push();
  fill(255,0,255);
  rect(263, 513, 25,25);
  pop();
  push();
  fill(255,255,0);
  rect(313, 513, 25,25);
  pop();
  push();
  fill(100,100,0);
  rect(363, 513, 25,25);
  pop();
  push();
  fill(0,200,100);
  rect(413, 513, 25,25);
  pop();
  push();
  fill(180,180,0);
  rect(463, 513, 25,25);
  pop();
  push();
  fill(80,0,250);
  rect(513, 513, 25,25);
  pop();

  if(mouseIsPressed){
  
  if (forma == 0) {
    ellipse(mouseX, mouseY, 30, 30);
    ellipse(mouseX+25, mouseY, 30, 30);
  }
  if (forma == 1) {
    arc(mouseX, mouseY, 80, 80, 0, PI);
  }
  if (forma == 2) {
    line(width/2, height/2, mouseX, mouseY);
  }
  if (forma == 3) {
    point(mouseX, mouseY);
  }
  if (forma == 4) {
    triangle(mouseX, mouseY,mouseX+30, mouseY+30,mouseX-30, mouseY+30);
  }
  if (forma == 5) {
		quad(mouseX,mouseY,mouseX+41,mouseY-20,mouseX+12,mouseY-16,mouseX+23,mouseY+1) 
  }
  if (forma == 6) {
    triangle(mouseX, mouseY,mouseX+30, mouseY+30,mouseX-30, mouseY+30);
    ellipse(mouseX, mouseY, 30, 30);
  }
  if (forma == 7) {
    ellipse(mouseX, mouseY, 60, 60);
    ellipse(mouseX, mouseY, 30, 30);
  }
  if (forma == 8) {
		quad(mouseX,mouseY,mouseX+21,mouseY-10,mouseX-12,mouseY+6,mouseX+39,mouseY+1)
  }
  if (forma == 9) {
    arc(mouseX, mouseY, 80, 80, 0, PI);
    arc(mouseX, mouseY, 50, 50, 0, PI);
  }
  if (forma == 10) {
  createCanvas(600, 600);
  }    
      if (forma == 11) {
  fill(255,0,0);
  stroke(0);
  }    
      if (forma == 12) {
  fill(0,255,0);
  stroke(0);
  }    
      if (forma == 13) {
  fill(0,0,255);
  stroke(0);
  }    
      if (forma == 14) {
  fill(0,255,255);
  stroke(0);
  }    
      if (forma == 15) {
  fill(255,0,255);
  stroke(0);
  }  
          if (forma == 16) {
  fill(255,255,0);
  stroke(0);
  }
              if (forma == 17) {
  fill(100,100,0);
  stroke(0);
  }    
              if (forma == 18) {
  fill(0,200,100);
  stroke(0);
  }    
                  if (forma == 19) {
  fill(180,180,0);
  stroke(0);
  }    
                  if (forma == 20) {
  fill(80,0,250);
  stroke(0);
  }    
    
  if(mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 &&
     mouseY > posYbot1 && mouseY < posYbot1 + tamBot1){
    forma= 0;
}
    if(mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
     mouseY > posYbot2 && mouseY < posYbot2 + tamBot2){
    forma= 1;
}
    if(mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
     mouseY > posYbot3 && mouseY < posYbot3 + tamBot3){
    forma= 2;
}
    if(mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
     mouseY > posYbot4 && mouseY < posYbot4 + tamBot4){
    forma= 3;
}
    if(mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 &&
     mouseY > posYbot5 && mouseY < posYbot5 + tamBot5){
    forma= 4;
    }
        if(mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 &&
     mouseY > posYbot6 && mouseY < posYbot6 + tamBot6){
    forma= 5;
    }
        if(mouseX > posXbot7 && mouseX < posXbot7 + tamBot7  &&
     mouseY > posYbot7 && mouseY < posYbot7 + tamBot7){
    forma= 6;
    }
        if(mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 &&
     mouseY > posYbot8 && mouseY < posYbot8 + tamBot8){
    forma= 7;
    }
            if(mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 &&
     mouseY > posYbot9 && mouseY < posYbot9 + tamBot9){
    forma= 8;
    }
            if(mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 &&
     mouseY > posYbot10 && mouseY < posYbot10 + tamBot10){
    forma= 9;
    }
                if(mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
     mouseY > posYbot11 && mouseY < posYbot11 + tamBot11){
    forma= 10;
    }
        if(mouseX > posXbot12 && mouseX < posXbot12 + tamBot12 &&
     mouseY > posYbot12 && mouseY < posYbot12 + tamBot12){
    forma= 11;
}
    if(mouseX > posXbot13 && mouseX < posXbot3 + tamBot3 &&
     mouseY > posYbot13 && mouseY < posYbot13 + tamBot13){
    forma= 12;
}
    if(mouseX > posXbot14 && mouseX < posXbot4 + tamBot4 &&
     mouseY > posYbot14 && mouseY < posYbot14 + tamBot14){
    forma= 13;
}
    if(mouseX > posXbot15 && mouseX < posXbot5 + tamBot5 &&
     mouseY > posYbot15 && mouseY < posYbot15 + tamBot15){
    forma= 14;
    }
        if(mouseX > posXbot16 && mouseX < posXbot6 + tamBot6 &&
     mouseY > posYbot16 && mouseY < posYbot16 + tamBot16){
    forma= 15;
    }
        if(mouseX > posXbot17 && mouseX < posXbot7 + tamBot7  &&
     mouseY > posYbot17 && mouseY < posYbot17 + tamBot17){
    forma= 16;
    }
        if(mouseX > posXbot18 && mouseX < posXbot8 + tamBot8 &&
     mouseY > posYbot18 && mouseY < posYbot18 + tamBot18){
    forma= 17;
    }
            if(mouseX > posXbot19 && mouseX < posXbot9 + tamBot9 &&
     mouseY > posYbot19 && mouseY < posYbot19 + tamBot19){
    forma= 18;
    }
            if(mouseX > posXbot20&mouseX < posXbot10 + tamBot10 &&
     mouseY > posYbot20 && mouseY < posYbot20 + tamBot20){
    forma= 19;
    }
            if(mouseX > posXbot21 && mouseX < posXbot10 + tamBot10 &&
     mouseY > posYbot21 && mouseY < posYbot21 + tamBot21){
    forma= 20;
    }
    }
}
