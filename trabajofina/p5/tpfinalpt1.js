// canva con el mapa de caminos y finales 
//https://www.canva.com/design/DAGzzfuWlBg/NhZ-NuMvWiKLKREfxCMmPw/edit?utm_content=DAGzzfuWlBg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
//video explicativo 
//https://youtu.be/Ob8Yz7THlX4
// tpfinalpt1.js
let pantallas = []; // Inicializar como array vacío es mejor
let Flechita;
let fuente;
let fmalo;
let fbueno;
let sonipantalla = false;
let sonibuepantalla = false;
let pantallaactual = 0;

function preload() {
  pantallas[0] = loadImage('assets/IntroDelJuego.jpg');
  pantallas[1] = loadImage('assets/caminos123.png');
  pantallas[2] = loadImage('assets/Bosque.png');
  pantallas[3] = loadImage('assets/PerderseEnElBosque.png'); 
  pantallas[4] = loadImage('assets/IzqODere.png');
  pantallas[5] = loadImage('assets/dere.finalbueno.png');
  pantallas[6] = loadImage('assets/seHIzodenoche.png');
  pantallas[7] = loadImage('assets/apareceCharlie.png');
  pantallas[8] = loadImage('assets/siguenCharlie.png');
  pantallas[9] = loadImage('assets/CHarliefinalbueno.png');
  pantallas[10] = loadImage('assets/SeguirMapa.png');
  pantallas[11] = loadImage('assets/montania.png');
  pantallas[12] = loadImage('assets/nomnomcamping.png');
  pantallas[13] = loadImage('assets/nomnomfinalmalo.png');
  pantallas[14] = loadImage('assets/finalbuenomontania.png');
  pantallas[15] = loadImage('assets/Casa.png');
  pantallas[16] = loadImage('assets/Sentarse.png');
  pantallas[17] = loadImage('assets/finalMalocasamesa.png');
  pantallas[18] = loadImage('assets/finalMalocasapiso.png');
  pantallas[19] = loadImage('assets/finalmalocasa.png');
  pantallas[20] = loadImage('assets/IntroDelJuego.jpg');
  
  fuente = loadFont('assets/fuente.ttf');
  Flechita = loadImage('assets/flecha-correcta.png');
  
  fmalo = loadSound('assets/fmalo.mp3');
  fbueno = loadSound('assets/fbueno.mp3');
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  textSize(36);
}

function draw() {
  console.log(pantallaactual);
  background(50);
  
 
  if (pantallas[pantallaactual]) {
    image(pantallas[pantallaactual], 0, 0, width, height);
  }

  // Pantalla de Inicio
  if (pantallaactual === 0) {
    rectMode(CENTER);
    fill(247, 97, 97);
    textSize(50);
    text('ESCANDALOSOS', 160, 75);
    fill(80, 128, 247);
    textSize(45);
    text('Click para empezar', 135, 425);
    mostrarTextoPersonalizado('Una aventura de picnic', 220, 460);
  }
  
  // Elección de camino (Bosque, Casa, Montaña)
  else if (pantallaactual === 1) {
    rectMode(CENTER);
    fill(255);
    rect(540, 325, 110, 50);
    rect(640/2, 325, 110, 50);
    rect(100, 325, 110, 50);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    text('Bosque', 98, 321);
    text('Casa', 320, 321);
    text('Montaña', 538, 321);

    textSize(35);
    fill(247, 97, 97);
    text('Los osos quieren hacer un picnic!', 300, 60);
    text('¿Dónde buscan el lugar perfecto?', 300, 100);
  }

  else if (pantallaactual === 2) {
    rectMode(CENTER);
    fill(255);
    rect(540, 325, 110, 50);
    rect(100, 325, 110, 50);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    text('Perderte en', 98, 315);
    text('el bosque', 98, 333);
    text('Mapa viejo', 538, 321);
    textSize(35);
    fill(247, 97, 97);
    text('Querés perderte en el bosque', 300, 80);
    text('o seguir un mapa viejo?', 300, 120);
  } 
  
  // Dibujar Flechita en las pantallas correspondientes
  else if ([3, 8, 10, 11, 15, 17, 18, 20].includes(pantallaactual)) {
    image(Flechita, 530, 390, 100, 100);
    
    if(pantallaactual === 20){
       fill(247, 97, 97);
       textSize(40);
       text('ESCANDALOSOS', 160, 75);
       fill(255);
       textSize(25);
       text('Creador de la serie: Daniel Chong ', 200, 200);
       text('Creador del juego: Zoe M. Harima y Delfina Cebey ', 292, 300);
    }
  } 
  
  else if (pantallaactual === 4) {
    rectMode(CENTER);
    fill(255);
    rect(550, 325, 110, 50);
    rect(150, 325, 110, 50);

    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    text('Izquierda', 150, 321);
    text('Derecha', 540, 321);
    textSize(35);
    fill(247, 97, 97);
    text('Elegí tu camino!', 300, 80);
    text('¿Izquierda o derecha?', 300, 120);
  } else if (pantallaactual === 5) {
    textSize(35);
    fill(247, 97, 97);
    text('SIIII, llegamos a un claro del bosque ', 320, 50);
    text('Es hermoso, a disfrutar la comidaa!', 320, 90);
    fill(255);
    text('Presiona "r" para reiniciar', 320, 300);
  }
  else if (pantallaactual === 7) {
    fill(255);
    rect(160, 400, 100, 50);
    rect(500, 400, 100, 50);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    text('Aceptar', 158, 395);
    text('Rechazar', 500, 395);
    textSize(35);
    fill(247, 97, 97);
    text('Charlie quiere guiarlos,', 300, 20);
    text('¿Aceptas su ayuda?', 300, 55);
  } else if (pantallaactual === 9) {
    textSize(35);
    fill(247, 97, 97);
    text('Charlie los guia hasta un hermoso', 320, 50);
    text('jardin y les comparte su comida!', 320, 90);
    fill(255);
    text('Presiona "r" para reiniciar', 320, 300);
  } else if (pantallaactual === 6) {
    textSize(35);
    fill(247, 97, 97);
    text('Noo! Tardaron mucho en', 300, 60);
    text('encontrar un lugar :(', 300, 100);
    fill(255);
    text('Presiona "r" para reiniciar', 320, 300);
  } else if (pantallaactual === 16) {
    rectMode(CENTER);
    fill(255);
    rect(540, 325, 110, 50);
    rect(100, 325, 110, 50);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    text('Mesa', 100, 322);
    text('Piso', 540, 322);
    textSize(35);
    fill(247, 97, 97);
    text('Se quedan en casa, deciden', 300, 70);
    text('comer en la mesa o en el piso?', 300, 110);
  } else if (pantallaactual === 19) {
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    textSize(45);
    fill(247, 97, 97);
    text('Esto no es un picnic!', 330, 30);
    fill(255);
    text('Presiona "r" para reiniciar', 320, 300);
  }
  else if (pantallaactual === 12) {
    rectMode(CENTER);
    fill(255);
    rect(540, 325, 110, 50);
    rect(100, 325, 110, 50);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    stroke(20);
    text('Si', 100, 322);
    text('No', 540, 322);
    textSize(35);
    fill(247, 97, 97);
    text('Se encuentran con Nom Nom y', 300, 70);
    text('los invita al camping, deciden quedarse?', 300, 110);
  } else if (pantallaactual === 13) {
    textSize(35);
    fill(247, 97, 97);
    text('Noo! Una orda de fans de Nom Nom', 320, 40);
    text('se avalanzó y destruyeron todo el picnic!', 320, 80);
    fill(255);
    text('Presiona "r" para reiniciar', 320, 300);
  } else if (pantallaactual === 14) {
    textSize(35);
    fill(247, 97, 97);
    text('Siguen y llegaron a un camping tranquilo', 310, 40);
    text('y disfrutaron de su picnic <3', 310, 80);
    fill(255);
    text('Presiona "r" para reiniciar', 320, 300);
  }

  if (sonipantalla) {
    fmalo.play();
    sonipantalla = false;
  }
  if (sonibuepantalla) {
    fbueno.play();
    sonibuepantalla = false;
  }
}

function mousePressed() {
  if (pantallaactual === 0) {
    pantallaactual = 1;
  } else if (pantallaactual === 1) {
    if (mouseX > 45 && mouseX < 155 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 2;
    } else if (mouseX > 265 && mouseX < 375 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 15;
    } else if (mouseX > 485 && mouseX < 595 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 11;
    }
  } else if (pantallaactual === 2) {
    if (mouseX > 45 && mouseX < 155 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 3;
    } else if (mouseX > 485 && mouseX < 595 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 7;
    }
  } else if (pantallaactual === 3) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 4;
    }
  } else if (pantallaactual === 4) {
    if (mouseX > 94 && mouseX < 200 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 6;
      sonipantalla = true;
    } else if (mouseX > 500 && mouseX < 604 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 5;
      sonibuepantalla = true;
    }
  } else if (pantallaactual === 7) {
    if (mouseX > 114 && mouseX < 215 && mouseY > 376 && mouseY < 419) {
      pantallaactual = 8;
    } else if (mouseX > 453 && mouseX < 547 && mouseY > 376 && mouseY < 419) {
      pantallaactual = 10;
    }
  } else if (pantallaactual === 8) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 9;
      sonibuepantalla = true;
    }
  } else if (pantallaactual === 10) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 6;
      sonipantalla = true;
    }
  } else if (pantallaactual === 15) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 16;
    }
  } else if (pantallaactual === 16) {
    if (mouseX > 45 && mouseX < 155 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 17;
    } else if (mouseX > 485 && mouseX < 595 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 18;
    }
  } else if (pantallaactual === 17) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 19;
      sonipantalla = true;
    }
  } else if (pantallaactual === 18) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 19;
      sonipantalla = true;
    }
  } else if (pantallaactual === 11) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 12;
    }
  } else if (pantallaactual === 12) {
    if (mouseX > 45 && mouseX < 155 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 13;
      sonipantalla = true;
    } else if (mouseX > 485 && mouseX < 595 && mouseY > 300 && mouseY < 350) {
      pantallaactual = 14;
      sonibuepantalla = true;
    }
  } else if (pantallaactual === 20) {
    if (mouseX > 535 && mouseX < 610 && mouseY > 421 && mouseY < 448) {
      pantallaactual = 1;
    }
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    if ([5, 6, 9, 13, 14, 19].includes(pantallaactual)) {
      pantallaactual = 20;
    }
  }
}

function mostrarTextoPersonalizado(texto, x, y) {
  fill(255);
  textSize(20);
  text(texto, x, y);
}
