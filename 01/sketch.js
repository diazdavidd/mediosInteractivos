//Variables
//Triangulos inferiores
var x1 = 15;
var y1 = 15;
var x2 = 25;
var y2 = 25;
//Triangulos superiores
var x3 = 35;
var y3 = 15;
var x4 = 45;
var y4 = 25;

function setup() {
  createCanvas(190,190);
  background(220);
  fill(244, 194, 63);
  noStroke();
  quad(95, 95, 175, 95, 175, 175, 95, 175);
  fill(0);
  noStroke();
  //Triangulos inferiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }

  //Triangulos superiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  x1 = 15;
  x2 = 25;
  y1 = 55;
  y2 = 65;
  //Triangulos inferiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 35;
  x4 = 45;
  y3 = 55;
  y4 = 65;
  //Triangulos superiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  ////////////////////////////////////////////////////////////////////////  

  x1 = 35;
  x2 = 45;
  y1 = 35;
  y2 = 45;
  //Triangulos inferiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 15;
  x4 = 25;
  y3 = 35;
  y4 = 45;
  //Triangulos superiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  x1 = 35;
  x2 = 45;
  y1 = 75;
  y2 = 85;
  //Triangulos inferiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 15;
  x4 = 25;
  y3 = 75;
  y4 = 85;
  //Triangulos superiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }
  //////////////////////////////////////////////////////////////////////// 

  x1 = 25;
  x2 = 35;
  y1 = 45;
  y2 = 55;
  //Triangulos inferiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 05;
  x4 = 15;
  y3 = 45;
  y4 = 55;
  //Triangulos superiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  x1 = 25;
  x2 = 35;
  y1 = 85;
  y2 = 95;
  //Triangulos inferiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 05;
  x4 = 15;
  y3 = 85;
  y4 = 95;
  //Triangulos superiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }
  //////////////////////////////////////////////////////////////////////// 

  x1 = 15;
  y1 = 25;
  x2 = 25;
  y2 = 35;

  //Triangulos inferiores2
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 10;
    x2 = x2 + 10;
  }

  y1 = 25;
  x2 = 25;
  x3 = 35;
  y3 = 35;
  //Triangulos superiores2
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x2, y1, x3, y1, x3, y3);
      x2 = x2 + 10;
      x3 = x3 + 10;
    }
    x2 = x2 + 20;
    x3 = x3 + 20;
  } {
    fill(220);
    triangle(25, 25, 25, 35, 35, 35)
  }
  fill(0);
  x1 = 15;
  y1 = 65;
  x2 = 25;
  y2 = 75;

  //Triangulos inferiores2
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 10;
    x2 = x2 + 10;
  }

  y1 = 65;
  x2 = 25;
  x3 = 35;
  y3 = 75;
  //Triangulos superiores2
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x2, y1, x3, y1, x3, y3);
      x2 = x2 + 10;
      x3 = x3 + 10;
    }
    x2 = x2 + 20;
    x3 = x3 + 20;
  } {
    fill(220);
    triangle(25, 65, 25, 75, 35, 75)
  }
  ////////////////////////////////////////////////////////////////////////
  fill(220);
  triangle(03, 45, 15, 45, 15, 56);

  fill(220);
  triangle(03, 85, 15, 85, 15, 96);
  triangle(03, 85, 15, 85, 15, 96);
  fill(0);
  triangle(85, 85, 95, 85, 95, 95);
  triangle(85, 45, 95, 45, 95, 55);
  triangle(85, 65, 85, 75, 95, 75);
  triangle(85, 25, 85, 35, 95, 35);



  x1 = 15 + 80;
  y1 = 15 + 90;
  x2 = 25 + 80;
  y2 = 25 + 90;
  //Triangulos superiores
  x3 = 35 + 80;
  y3 = 15 + 90;
  x4 = 45 + 80;
  y4 = 25 + 90;

  fill(220);

  //Triangulos inferiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }

  //Triangulos superiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  x1 = 15 + 80;
  x2 = 25 + 80;
  y1 = 55 + 90;
  y2 = 65 + 90;
  //Triangulos inferiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 35 + 80;
  x4 = 45 + 80;
  y3 = 55 + 90;
  y4 = 65 + 90;
  //Triangulos superiores1
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  ////////////////////////////////////////////////////////////////////////  

  x1 = 35 + 80;
  x2 = 45 + 80;
  y1 = 35 + 90;
  y2 = 45 + 90;
  //Triangulos inferiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 15 + 80;
  x4 = 25 + 80;
  y3 = 35 + 90;
  y4 = 45 + 90;
  //Triangulos superiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  x1 = 35 + 80;
  x2 = 45 + 80;
  y1 = 75 + 90;
  y2 = 85 + 90;
  //Triangulos inferiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 15 + 80;
  x4 = 25 + 80;
  y3 = 75 + 90;
  y4 = 85 + 90;
  //Triangulos superiores3
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }
  //////////////////////////////////////////////////////////////////////// 

  x1 = 25 + 80;
  x2 = 35 + 80;
  y1 = 45 + 90;
  y2 = 55 + 90;
  //Triangulos inferiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 05 + 80;
  x4 = 15 + 80;
  y3 = 45 + 90;
  y4 = 55 + 90;
  //Triangulos superiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  x1 = 25 + 80;
  x2 = 35 + 80;
  y1 = 85 + 90;
  y2 = 95 + 90;
  //Triangulos inferiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 05 + 80;
  x4 = 15 + 80;
  y3 = 85 + 90;
  y4 = 95 + 90;
  //Triangulos superiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }
  //////////////////////////////////////////////////////////////////////// 

  x1 = 15 + 80;
  y1 = 25 + 90;
  x2 = 25 + 80;
  y2 = 35 + 90;

  //Triangulos inferiores2
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 10;
    x2 = x2 + 10;
  }

  y1 = 25 + 90;
  x2 = 25 + 80;
  x3 = 35 + 80;
  y3 = 35 + 90;
  //Triangulos superiores2
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x2, y1, x3, y1, x3, y3);
      x2 = x2 + 10;
      x3 = x3 + 10;
    }
    x2 = x2 + 20;
    x3 = x3 + 20;
  } {
    fill(244, 194, 63);
    triangle(105, 115, 105, 125, 115, 125)
    triangle(105, 155, 115, 165, 105, 165)
    fill(220);
    triangle(165, 155, 175, 165, 165, 165)
  }

  fill(220);
  x1 = 15 + 80;
  y1 = 65 + 90;
  x2 = 25 + 80;
  y2 = 75 + 90;

  //Triangulos inferiores2
  for (u = 0; u < 2; u++) {
    for (p = 0; p < 2; p++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 10;
    x2 = x2 + 10;
  }

  y1 = 65 + 90;
  x2 = 25 + 80;
  x3 = 35 + 80;
  y3 = 75 + 90;
  //Triangulos superiores2
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x2, y1, x3, y1, x3, y3);
      x2 = x2 + 10;
      x3 = x3 + 10;
    }
    x2 = x2 + 20;
    x3 = x3 + 20;
  }
  x1 = 25 + 80;
  x2 = 35 + 80;
  y1 = 45 + 50;
  y2 = 55 + 50;
  //Triangulos inferiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x1, y1, x1, y2, x2, y2);
      x1 = x1 + 10;
      x2 = x2 + 10;
    }
    x1 = x1 + 20;
    x2 = x2 + 20;
  }


  x3 = 05 + 80;
  x4 = 15 + 80;
  y3 = 45 + 50;
  y4 = 55 + 50;
  //Triangulos superiores4
  for (j = 0; j < 2; j++) {
    for (i = 0; i < 2; i++) {
      triangle(x3, y3, x4, y3, x4, y4);
      x3 = x3 + 10;
      x4 = x4 + 10;
    }
    x3 = x3 + 20;
    x4 = x4 + 20;
  }

  {
    fill(244, 194, 63);
    triangle(25 + 80, 65 + 90, 25 + 80, 75 + 90, 35 + 80, 75 + 90)
  }
  fill(244, 194, 63);
  fill(220)
  triangle(03 + 80, 45 + 90, 15 + 80, 45 + 90, 15 + 80, 56 + 90);

  fill(220);
  triangle(03 + 80, 85 + 90, 15 + 80, 85 + 90, 15 + 80, 96 + 90);
  triangle(03 + 80, 85 + 90, 15 + 80, 85 + 90, 15 + 80, 96 + 90);
  fill(220);
  triangle(85 + 80, 85 + 90, 95 + 80, 85 + 90, 95 + 80, 95 + 90);
  triangle(85 + 80, 45 + 90, 95 + 80, 45 + 90, 95 + 80, 55 + 90);
  triangle(85 + 80, 25 + 90, 85 + 80, 35 + 90, 95 + 80, 35 + 90);

  x1 = 15 + 80;
  y1 = 15;
  x2 = 25 + 80;
  y2 = 25;
  //Triangulos superiores
  x3 = 35 + 80;
  y3 = 15;
  x4 = 45 + 80;
  y4 = 25;

  {
    fill(0);
    noStroke();
    //Triangulos inferiores1
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x1 + 10, y1, x1, y2, x2, y2);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 20;
      x2 = x2 + 20;
    }

    //Triangulos superiores1
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x3, y3, x4, y3, x4 - 10, y4);
        x3 = x3 + 10;
        x4 = x4 + 10;
      }
      x3 = x3 + 20;
      x4 = x4 + 20;
    }

    x1 = 15 + 80;
    x2 = 25 + 80;
    y1 = 55;
    y2 = 65;
    //Triangulos inferiores1
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x1 + 10, y1, x1, y2, x2, y2);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 20;
      x2 = x2 + 20;
    }


    x3 = 35 + 80;
    x4 = 45 + 80;
    y3 = 55;
    y4 = 65;
    //Triangulos superiores1
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x3, y3, x4, y3, x4 - 10, y4);
        x3 = x3 + 10;
        x4 = x4 + 10;
      }
      x3 = x3 + 20;
      x4 = x4 + 20;
    }

    ////////////////////////////////////////////////////////////////////////  

    x1 = 35 + 80;
    x2 = 45 + 80;
    y1 = 35;
    y2 = 45;
    //Triangulos inferiores3
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x1 + 10, y1, x1, y2, x2, y2);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 20;
      x2 = x2 + 20;
    }


    x3 = 15 + 80;
    x4 = 25 + 80;
    y3 = 35;
    y4 = 45;
    //Triangulos superiores3
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x3, y3, x4, y3, x4 - 10, y4);
        x3 = x3 + 10;
        x4 = x4 + 10;
      }
      x3 = x3 + 20;
      x4 = x4 + 20;
    }

    x1 = 35 + 80;
    x2 = 45 + 80;
    y1 = 75;
    y2 = 85;
    //Triangulos inferiores3
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x1 + 10, y1, x1, y2, x2, y2);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 20;
      x2 = x2 + 20;
    }


    x3 = 15 + 80;
    x4 = 25 + 80;
    y3 = 75;
    y4 = 85;
    //Triangulos superiores3
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x3, y3, x4, y3, x4 - 10, y4);
        x3 = x3 + 10;
        x4 = x4 + 10;
      }
      x3 = x3 + 20;
      x4 = x4 + 20;
    }
    //////////////////////////////////////////////////////////////////////// 

    x1 = 25 + 80;
    x2 = 35 + 80;
    y1 = 45;
    y2 = 55;
    //Triangulos inferiores4
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x1, y1, x1, y2, x2, y2 - 10);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 20;
      x2 = x2 + 20;
    }


    x3 = 05 + 80;
    x4 = 15 + 80;
    y3 = 45;
    y4 = 55;
    //Triangulos superiores4
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x3, y3 + 10, x4, y3, x4, y4);
        x3 = x3 + 10;
        x4 = x4 + 10;
      }
      x3 = x3 + 20;
      x4 = x4 + 20;
    }

    x1 = 25 + 80;
    x2 = 35 + 80;
    y1 = 85;
    y2 = 95;
    //Triangulos inferiores4
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x1, y1, x1, y2, x2, y2 - 10);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 20;
      x2 = x2 + 20;
    }


    x3 = 05 + 80;
    x4 = 15 + 80;
    y3 = 85;
    y4 = 95;
    //Triangulos superiores4
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x3, y3 + 10, x4, y3, x4, y4);
        x3 = x3 + 10;
        x4 = x4 + 10;
      }
      x3 = x3 + 20;
      x4 = x4 + 20;
    }
    //////////////////////////////////////////////////////////////////////// 

    x1 = 15 + 80;
    y1 = 25;
    x2 = 25 + 80;
    y2 = 35;

    //Triangulos inferiores2
    for (u = 0; u < 2; u++) {
      for (p = 0; p < 2; p++) {
        triangle(x1, y1, x1, y2, x2, y2 - 10);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 10;
      x2 = x2 + 10;
    }

    y1 = 25;
    x2 = 25 + 80;
    x3 = 35 + 80;
    y3 = 35;
    //Triangulos superiores2
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x2, y1 + 10, x3, y1, x3, y3);
        x2 = x2 + 10;
        x3 = x3 + 10;
      }
      x2 = x2 + 20;
      x3 = x3 + 20;
    } {
      fill(220);
      triangle(25, 25, 25, 35, 35, 35)
    }
    fill(0);
    x1 = 15 + 80;
    y1 = 65;
    x2 = 25 + 80;
    y2 = 75;

    //Triangulos inferiores2
    for (u = 0; u < 2; u++) {
      for (p = 0; p < 2; p++) {
        triangle(x1, y1, x1, y2, x2, y2 - 10);
        x1 = x1 + 10;
        x2 = x2 + 10;
      }
      x1 = x1 + 10;
      x2 = x2 + 10;
    }

    y1 = 65;
    x2 = 25 + 80;
    x3 = 35 + 80;
    y3 = 75;
    //Triangulos superiores2
    for (j = 0; j < 2; j++) {
      for (i = 0; i < 2; i++) {
        triangle(x2, y1 + 10, x3, y1, x3, y3);
        x2 = x2 + 10;
        x3 = x3 + 10;
      }
      x2 = x2 + 20;
      x3 = x3 + 20;
    } {
      fill(220);
      triangle(25, 65, 25, 75, 35, 75)
    }
    ////////////////////////////////////////////////////////////////////////
    fill(220);
    triangle(03, 45, 15, 45, 15, 56);

    fill(220);
    triangle(03, 85, 15, 85, 15, 96);
    triangle(03, 85, 15, 85, 15, 96);
    fill(0);
    triangle(85, 85, 95, 85, 95, 95);
    triangle(85, 45, 95, 45, 95, 55);
    triangle(85, 65, 85, 75, 95, 75);
    triangle(85, 25, 85, 35, 95, 35);
    triangle(175, 55, 175, 45, 165, 55);
    triangle(175, 55 + 40, 175, 45 + 40, 165, 55 + 40);
    triangle(165, 65, 165, 75, 175, 65);
    triangle(165, 25, 165, 35, 175, 25);
    fill(220);
    triangle(105, 25, 115, 25, 105, 35);
    triangle(85, 45, 85, 55, 95, 55);
    triangle(85, 85, 85, 95, 95, 95);
    triangle(105, 65, 115, 65, 105, 75);
    x1 = 15 + 80;
    y1 = 15;
    x2 = 25 + 80;
    y2 = 25;
    //Triangulos superiores
    x3 = 35 + 80;
    y3 = 15;
    x4 = 45 + 80;
    y4 = 25;

    {
      fill(0);
      noStroke();
      //Triangulos inferiores1
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1 + 10, y1, x1, y2, x2, y2);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }

      //Triangulos superiores1
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3, x4, y3, x4 - 10, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }

      x1 = 15;
      x2 = 25;
      y1 = 55 + 70;
      y2 = 65 + 70;
      //Triangulos inferiores1
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1 + 10, y1, x1, y2, x2, y2);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }


      x3 = 35;
      x4 = 45;
      y3 = 55 + 70;
      y4 = 65 + 70;
      //Triangulos superiores1
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3, x4, y3, x4 - 10, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }

        x1 = 15;
      x2 = 25;
      y1 = 55 + 110;
      y2 = 65 + 110;
      //Triangulos inferiores1
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1 + 10, y1, x1, y2, x2, y2);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }


      x3 = 35;
      x4 = 45;
      y3 = 55 + 110;
      y4 = 65 + 110;
      //Triangulos superiores1
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3, x4, y3, x4 - 10, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }
      ////////////////////////////////////////////////////////////////////////  

      x1 = 35;
      x2 = 45;
      y1 = 35 + 70;
      y2 = 45 + 70;
      //Triangulos inferiores3
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1 + 10, y1, x1, y2, x2, y2);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }


      x3 = 15;
      x4 = 25;
      y3 = 35 + 70;
      y4 = 45 + 70;
      //Triangulos superiores3
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3, x4, y3, x4 - 10, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }

      x1 = 35;
      x2 = 45;
      y1 = 75 + 70;
      y2 = 85 + 70;
      //Triangulos inferiores3
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1 + 10, y1, x1, y2, x2, y2);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }


      x3 = 15;
      x4 = 25;
      y3 = 75 + 70;
      y4 = 85 + 70;
      //Triangulos superiores3
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3, x4, y3, x4 - 10, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }
      //////////////////////////////////////////////////////////////////////// 

      x1 = 25;
      x2 = 35;
      y1 = 45 + 70;
      y2 = 55 + 70;
      //Triangulos inferiores4
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1, y1, x1, y2, x2, y2 - 10);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }


      x3 = 05;
      x4 = 15;
      y3 = 45 + 70;
      y4 = 55 + 70;
      //Triangulos superiores4
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3 + 10, x4, y3, x4, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }

      x1 = 25;
      x2 = 35;
      y1 = 85 + 70;
      y2 = 95 + 70;
      //Triangulos inferiores4
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x1, y1, x1, y2, x2, y2 - 10);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 20;
        x2 = x2 + 20;
      }


      x3 = 05;
      x4 = 15;
      y3 = 85 + 70;
      y4 = 95 + 70;
      //Triangulos superiores4
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x3, y3 + 10, x4, y3, x4, y4);
          x3 = x3 + 10;
          x4 = x4 + 10;
        }
        x3 = x3 + 20;
        x4 = x4 + 20;
      }
      //////////////////////////////////////////////////////////////////////// 

      x1 = 15;
      y1 = 25 + 70;
      x2 = 25;
      y2 = 35 + 70;

      //Triangulos inferiores2
      for (u = 0; u < 2; u++) {
        for (p = 0; p < 2; p++) {
          triangle(x1, y1, x1, y2, x2, y2 - 10);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 10;
        x2 = x2 + 10;
      }

      y1 = 25 + 70;
      x2 = 25;
      x3 = 35;
      y3 = 35 + 70;
      //Triangulos superiores2
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x2, y1 + 10, x3, y1, x3, y3);
          x2 = x2 + 10;
          x3 = x3 + 10;
        }
        x2 = x2 + 20;
        x3 = x3 + 20;
      } {
        fill(220);
        triangle(25, 25, 25, 35, 35, 35)
      }
      fill(0);
      x1 = 15;
      y1 = 65 + 70;
      x2 = 25;
      y2 = 75 + 70;

      //Triangulos inferiores2
      for (u = 0; u < 2; u++) {
        for (p = 0; p < 2; p++) {
          triangle(x1, y1, x1, y2, x2, y2 - 10);
          x1 = x1 + 10;
          x2 = x2 + 10;
        }
        x1 = x1 + 10;
        x2 = x2 + 10;
      }

      y1 = 65 + 70;
      x2 = 25;
      x3 = 35;
      y3 = 75 + 70;
      //Triangulos superiores2
      for (j = 0; j < 2; j++) {
        for (i = 0; i < 2; i++) {
          triangle(x2, y1 + 10, x3, y1, x3, y3);
          x2 = x2 + 10;
          x3 = x3 + 10;
        }
        x2 = x2 + 20;
        x3 = x3 + 20;
      } {
        fill(220);
        triangle(25, 65, 25, 75, 35, 75);
        quad(0, 15, 15, 15, 15, 400, 0, 400);
        triangle(25,95,25,105,35,95);
        triangle(25,135,25,145,35,135);
        fill(0);
        triangle(85,105,85,95,95,95);
        triangle(85,145,85,135,95,135);
        triangle(95,115,95,125,85,125);
        triangle(95,155,95,165,85,165);
      }
    }
  }
}