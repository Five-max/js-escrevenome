//variáveis da bolinha

let xBolinha = 300;

let yBolinha = 200;

let diametro = 15;

let raio = diametro / 2;

//velocidade da bolinha

let velocidadeXBolinha = 6;

let velocidadeYBolinha = 6;

//variáveis da raquete

let xRaquete = 5;

let yRaquete = 150;

let raqueteComprimento = 10;

let raqueteAltura = 90;

//variáveis do oponente

let xRaqueteOponente = 585;

let yRaqueteOponente = 150;

//placar do jogo

let meusPontos = 0;

let pontosDoOponente = 0;

//sons do jogo

let raquetada;

let ponto;

let trilha;

let colidiu = false;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);

    mostraBolinha();

    movimentaBolinha();

    verificaColisaoBorda();
  
    mostraRaquete(xRaquete, yRaquete);

    movimentaMinhaRaquete();
  
    movimentaMinhaRaqueteMouse();

    verificaColisaoRaquete(xRaquete, yRaquete);
    
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

    mostraRaquete(xRaqueteOponente, yRaqueteOponente);

    movimentaRaqueteOponente();
  
    incluiPlacar();

    marcaPonto();
  
    lihaCentral();
}

function mostraBolinha() {

    square (xBolinha, yBolinha, diametro)

}

function movimentaBolinha() {

    xBolinha += velocidadeXBolinha;

    yBolinha += velocidadeYBolinha;

}

function verificaColisaoBorda() {

    if (xBolinha + raio > width || xBolinha - raio < 0) {

        velocidadeXBolinha *= -1;

    }

    if (yBolinha + raio > height || yBolinha - raio < 0) {

        velocidadeYBolinha *= -1;

    }
}

function mostraRaquete(x,y) {

  rect(x, y, raqueteComprimento, raqueteAltura);

}

function movimentaMinhaRaqueteMouse() {

  
   if (mouseIsPressed) {

    yRaquete = (mouseY)

  }


}

function movimentaMinhaRaquete() {

  if(keyIsDown(UP_ARROW)) {

    yRaquete -= 10;

  }

  if(keyIsDown(DOWN_ARROW)) {

    yRaquete += 10;

  }
}

function verificaColisaoRaquete() {

  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {

    velocidadeXBolinha *= -1;
    
    raquetada.play();

  }

}

function verificaColisaoRaquete(x,y) {

  colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

  if(colidiu) {

    velocidadeXBolinha *= -1;
    
    raquetada.play();

  }

}

function movimentaRaqueteOponente() {

    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;

    yRaqueteOponente += velocidadeYOponente

}

function incluiPlacar() {

  textAlign(CENTER);
  
  textSize(40);
  
  fill(255);

  text(meusPontos, 200, 50);

  text(pontosDoOponente, 400, 50);

}

function marcaPonto() {

  if (xBolinha > 590) {

    meusPontos += 1;
    
    ponto.play();

  }

  if (xBolinha < 11) {

    pontosDoOponente += 1;
    
    ponto.play();

  }

}

function lihaCentral() {

  textAlign(CENTER);
  
  rect(295, 0, 10, 33);
  
  rect(295, 43, 10, 30);
  
  rect(295, 83, 10, 30);
  
  rect(295, 123, 10, 30);
  
  rect(295, 163, 10, 32);
  
  rect(295, 205, 10, 32);
  
  rect(295, 247, 10, 30);
  
  rect(295, 287, 10, 30);
  
  rect(295, 327, 10, 30);
  
  rect(295, 367, 10, 33);
  



}

 function preload(){

  trilha = loadSound("trilha.mp3");

  ponto = loadSound("ponto.mp3");

  raquetada = loadSound("raquetada.mp3");

} 
