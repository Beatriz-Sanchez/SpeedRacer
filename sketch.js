var canvas;
var fundo;
var database;
var form, jogador, jogo;
var numJogadores;

function preload() {
  fundo = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  jogo = new Jogo();
  jogo.iniciar();

}

function draw() {
  background(fundo);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
