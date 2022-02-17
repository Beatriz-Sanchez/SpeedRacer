class Form {
  constructor() {
    this.entrada = createInput("").attribute("placeholder", "Digite seu nome");
    this.botao = createButton("Jogar");
    this.tituloImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.mensagem = createElement("h2");
  }

  esconder() {
    this.mensagem.hide();
    this.botao.hide();
    this.entrada.hide();
  }

  posicionarElementos() {
    this.tituloImg.position(150,50);
    this.entrada.position(width / 2 - 110, height / 2 - 80);
    this.botao.position(width / 2 - 90, height / 2 - 20);
    this.mensagem.position(width / 2 - 300, height / 2 - 100);
  }

  estilizarElementos() {
    this.tituloImg.class("titulo");
    this.entrada.class("entrada");
    this.botao.class("botao");
    this.mensagem.class("mensagem");
  }

  controlarBotao() {
    this.botao.mousePressed(() => {
      this.entrada.hide();
      this.botao.hide();
      var ola = `
      Olá, ${this.entrada.value()}
      </br>espere o outro jogador entrar...`;
      this.mensagem.html(ola);
    });
  }

  mostrar() {
    this.posicionarElementos();
    this.estilizarElementos();
    this.controlarBotao();
  }

}
