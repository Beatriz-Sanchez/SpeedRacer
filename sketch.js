var canvas;
var fundo;
var database, estadoJogo;
var form, jogador, jogo, numJogadores;
var todosJogadores;

function preload() {
  fundo = loadImage("./assets/planodefundo.png");
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
    //jogo.atualizar(1);
  }

  if (estadoJogo === 1) {
    //jogo.jogar();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
