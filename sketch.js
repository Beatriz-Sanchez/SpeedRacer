var canvas;
var fundo, carro1_img, carro2_img, pista;
var database, estadoJogo;
var form, jogador, jogo, numJogadores;
var todosJogadores, carro1, carro2;
var carros = [];

function preload() {
  fundo = loadImage("./assets/planodefundo.png");
  carro1_img = loadImage("../assets/car1.png");
  carro2_img = loadImage("../assets/car2.png");
  pista = loadImage("../assets/pista.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  jogo = new Jogo();
  jogo.lerEstado();
  jogo.inicio();
}

function draw() {
  background(fundo);
  if (numJogadores === 2) {
    jogo.atualizar(1);
  }

  if (estadoJogo === 1) {
    jogo.jogar();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
