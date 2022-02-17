class Jogo {
  constructor() {}

  lerEstado() {
    var estadoJogoRef = database.ref("estadoJogo");
    estadoJogoRef.on("value", function(dados) {
      estadoJogo = dados.val();
    });
  }

  inicio() {
    jogador = new Jogador();
    numJogadores = jogador.lerNum();

    form = new Form();
    form.mostrar();
  }

  mudarElementos() {
    form.esconder();
    form.tituloImg.position(40, 50);
    form.tituloImg.class("tituloAposEfeito");
  }
}
