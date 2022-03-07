class Jogo {
  constructor() {
    this.tituloReiniciar = createElement("h2");
    this.botaoReiniciar = createButton("");

    this.tituloTabela = createElement("h2");

    this.primeiro = createElement("h2");
    this.segundo = createElement("h2");
  }

  lerEstado() {
    var refEstadoJogo = database.ref("estadoJogo");
    refEstadoJogo.on("value", function (dados) {
      estadoJogo = dados.val();
    });
  }
  atualizar(num) {
    database.ref("/").update({
      estadoJogo: num
    });
  }

  iniciar() {
    jogador = new Jogador();
    numJogadores = jogador.lerNum();

    form = new Form();
    form.disjogar();

    carro1 = createSprite(width / 2 - 50, height - 100);
    carro1.addImage("car1", imgCarro1);
    carro1.scale = 0.07;

    carro2 = createSprite(width / 2 + 100, height - 100);
    carro2.addImage("car2", imgCarro2);
    carro2.scale = 0.07;

    carros = [carro1, carro2];

  }

  mudarElementos() {
    form.hide();
    form.tituloImg.position(40, 50);
    form.tituloImg.class("tituloAposEfeito");

    this.tituloReiniciar.html("Reiniciar o Jogo");
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

  jogar() {
    this.mudarElementos();
    this.checarBotaoReiniciar();

    Jogador.lerInfoJogadores();

    if (todosJogadores !== undefined) {
      image(pista, 0, -height * 5, width, height * 6);

      this.mostrarTabela();

      var indice = 0;
      for (var plr in todosJogadores) {
        indice = indice + 1;

        var x = todosJogadores[plr].posX;
        var y = height - todosJogadores[plr].posY;

        carros[indice - 1].position.x = x;
        carros[indice - 1].position.y = y;

        if (indice === jogador.indice) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          camera.position.y = carros[indice - 1].position.y;
        }
      }

      this.controleJogador();

      drawSprites();
    }
  }

  checarBotaoReiniciar() {
    this.botaoReiniciar.mousePressed(() => {
      database.ref("/").set({
        numJogadores: 0,
        estadoJogo: 0,
        jogadores: {}
      });
      window.location.reload();
    });
  }

  mostrarTabela() {
    var primeiro, segundo;
    var jogadores = Object.values(todosJogadores);
    if (
      (jogadores[0].classificacao === 0 && jogadores[1].classificacao === 0) ||
      jogadores[0].classificacao === 1
    ) {
      // &emsp;    Essa etiqueta é usada para exibir quatro espaços.
      primeiro =
        jogadores[0].classificacao +
        "&emsp;" +
        jogadores[0].nome +
        "&emsp;" +
        jogadores[0].pontos;

      segundo =
        jogadores[1].classificacao +
        "&emsp;" +
        jogadores[1].nome +
        "&emsp;" +
        jogadores[1].pontos;
    }

    if (jogadores[1].classificacao === 1) {
      primeiro =
        jogadores[1].classificacao +
        "&emsp;" +
        jogadores[1].nome +
        "&emsp;" +
        jogadores[1].pontos;

      segundo =
        jogadores[0].classificacao +
        "&emsp;" +
        jogadores[0].nome +
        "&emsp;" +
        jogadores[0].pontos;
    }

    this.primeiro.html(primeiro);
    this.segundo.html(segundo);
  }

  controleJogador() {
    if (keyIsDown(UP_ARROW)) {
      jogador.posY += 10;
      jogador.atualizar();
    }

    if (keyIsDown(LEFT_ARROW) && jogador.posX > width / 3 - 50) {
      jogador.posX -= 5;
      jogador.atualizar();
    }

    if (keyIsDown(RIGHT_ARROW) && jogador.posX < width / 2 + 300) {
      jogador.posX += 5;
      jogador.atualizar();
    }
  }

}