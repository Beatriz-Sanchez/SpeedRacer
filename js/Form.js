class Form {
  constructor() {
    this.entrada = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.botao = createButton("Jogar");
    this.tituloImg = createImg("./assets/TITULO.png", "game title");
    this.mensagem = createElement("h2");
  }

  posicionarElementos() {
    this.tituloImg.position(120, 50);
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

  esconder() {
    this.mensagem.hide();
    this.botao.hide();
    this.entrada.hide();
  }

  botaoPressionado() {
    this.botao.mousePressed(() => {
      this.entrada.hide();
      this.botao.hide();
      var ola = `
      Olá ${this.entrada.value()}
      </br>espere o outro jogador entrar...`;
      this.mensagem.html(ola);
    });
  }

  mostrar() {
    this.posicionarElementos();
    this.estilizarElementos();
    this.botaoPressionado();
  }
}
