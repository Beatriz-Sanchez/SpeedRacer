class Jogo {
  constructor() {
    this.tituloReiniciar = createElement("h2");
    this.botaoReiniciar = createButton("");

    this.tituloTabela = createElement("h2");
    this.primeiro = createElement("h2");
    this.segundo = createElement("h2");
  }

  lerEstado() {
    var estadoJogoRef = database.ref("estadoJogo");
    estadoJogoRef.on("value", function (dados) {
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

    this.tituloReiniciar.html("Reinicar Jogo");
    this.tituloReiniciar.class("textoReiniciar");
    this.tituloReiniciar.position(width / 2 + 200, 40);

    this.botaoReiniciar.class("botaoReiniciar");
    this.botaoReiniciar.position(width / 2 + 230, 100);

    this.tituloTabela.html("Placar");
    this.tituloTabela.class("textoReiniciar");
    this.tituloTabela.position(width / 3 - 60, 40);

    this.primeiro.class("textoTabela");
    this.primeiro.position(width / 3 - 50, 80);

    this.segundo.class("textoTabela");
    this.segundo.position(width / 3 - 50, 130);
  }

  controleJogadores() {
    if (keyIsDown(UP_ARROW)) {
      jogador.posY += 10;
      jogador.atualizar();
    }
  }

  jogar() {
    this.mudarElementos();

    Jogador.lerInfoJogadores();

    if (todosJogadores !== undefined) {
      image(pista, 0, -height * 5, width, height * 6);

      this.mostrarTabela();

      var indice = 0;
      for (var jgdr in todosJogadores) {
        indice = indice + 1;
        var x = todosJogadores[jgdr].posX;
        var y = height - 50 - todosJogadores[jgdr].posY;

        carros[indice - 1].position.x = x;
        carros[indice - 1].position.y = y;

        if (indice === jogador.indice) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          //camera.position.x = carros[indice-1].position.x;
          camera.position.y = carros[indice - 1].position.y;
        }
      }
      drawSprites();
      this.controleJogadores();
    }
  }

  mostrarTabela() {
    var primeiro, segundo;
    var jogadores = Object.values(todosJogadores);
    if (
      (jogadores[0].classificacao === 0 && jogadores[1].classificacao === 0) ||
      jogadores[0].classificacao === 1
    ) {
      // &emsp;    Essa etiqueta é usada para exibir quatro espaços.
      primeiro = jogadores[0].classificacao + "&emsp;" + jogadores[0].nome + "&emsp;" + jogadores[0].pontos;
      segundo = jogadores[1].classificacao + "&emsp;" + jogadores[1].nome + "&emsp;" + jogadores[1].pontos;
    }

    if (jogadores[1].classificacao === 1) {
      primeiro = jogadores[1].classificacao + "&emsp;" + jogadores[1].nome + "&emsp;" + jogadores[1].pontos;
      segundo = jogadores[0].classificacao + "&emsp;" + jogadores[0].nome + "&emsp;" + jogadores[0].pontos;
    }

    this.primeiro.html(primeiro);
    this.segundo.html(segundo);
  }
}