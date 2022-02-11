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

}
