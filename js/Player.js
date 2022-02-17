class Jogador {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posX = 0;
    this.posY = 0;
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
