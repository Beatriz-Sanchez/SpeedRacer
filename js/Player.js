class Jogador {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posX = 0;
    this.posY = 0;
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
      posY: this.posY
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
}
