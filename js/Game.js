class Jogo {
  constructor() {}

  lerEstado() {
    var estadoJogoRef = database.ref("estadoJogo");
    estadoJogoRef.on("value", function(dados) {
      estadoJogo = dados.val();
    });
  }

  atualizar(estado) {
    database.ref("/").update({
      estadoJogo: estado
    });
  }

  inicio() {
    jogador = new Jogador();
    numJogadores = jogador.lerNum();

    form = new Form();
    form.mostrar();

    carro1 = createSprite(width / 2 - 50, height - 100);
    carro1.addImage("car1", carro1_img);
    carro1.scale = 0.07;

    carro2 = createSprite(width / 2 + 100, height - 100);
    carro2.addImage("car2", carro2_img);
    carro2.scale = 0.07;

    carros = [carro1, carro2];
  }

  mudarElementos() {
    form.esconder();
    form.tituloImg.position(40, 50);
    form.tituloImg.class("tituloAposEfeito");
  }

  jogar() {
    this.mudarElementos();

    Jogador.lerInfoJogadores();

    if (todosJogadores !== undefined) {
      image(pista, 0, -height * 5, width, height * 6);

      drawSprites();
    }
  }
}
