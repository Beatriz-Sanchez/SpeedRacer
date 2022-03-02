class Jogador {
  constructor() {
    this.nome = null;
    this.indice = null;

    this.posX = 0;
    this.posY = 0;

    this.classificacao = 0;
    this.pontos = 0;
  }

  adicionarJogador() {
    var indiceJogador = "jogadores/jogador" + this.indice;

    if (this.indice === 1) {
      this.posX = width / 2 - 100;
    } else {
      this.posX = width / 2 + 100;
    }

    database.ref(indiceJogador).set({
      nome: this.nome,
      posX: this.posX,
      posY: this.posY,
      classificacao: this.classificacao,
      pontos: this.pontos
    });
  }

  lerNum() {
    var NumJogadoresRef = database.ref("numJogadores");
    NumJogadoresRef.on("value", dados => {
      numJogadores = dados.val();
    });
  }

  atualizarNum(num) {
    database.ref("/").update({
      numJogadores: num
    });
  }

  static lerInfoJogadores() {
    var infoJogadoresRef = database.ref("jogadores");
    infoJogadoresRef.on("value", dados => {
      todosJogadores = dados.val();
    });
  }

  atualizar() {
    var indiceJogador = "jogadores/jogador" + this.indice;
    database.ref(indiceJogador).update({
      posX: this.posX,
      posY: this.posY,
      classificacao: this.classificacao,
      pontos: this.pontos
    });
  }
}