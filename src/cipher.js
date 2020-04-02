const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const cipher = {
  encode: function(offset, message) {
    let novaFrase = "";
    const frase = message.toUpperCase();
    const desloc = offset;
    const tamAlfabeto = 26;
    for (let i = 0; i < frase.length; i++) {
      let letra = frase[i];
      let posicao = alphabet.indexOf(letra);
      if (posicao == -1) {
        novaFrase = `${novaFrase}${letra}`;
      } else {
        let novaPosicao = (posicao + desloc) % tamAlfabeto;
        let novaLetra = alphabet[novaPosicao];
        novaFrase = `${novaFrase}${novaLetra}`;
      }
    }
    return novaFrase;
  },
  decode: function(offset, message) {
    let novaFrase = "";
    const frase = message.toUpperCase();
    const desloc = offset;
    const tamAlfabeto = 26;
    for (let i = 0; i < frase.length; i++) {
      let letra = frase[i];
      let posicao = alphabet.indexOf(letra);
      if (posicao == -1) {
        novaFrase = `${novaFrase}${letra}`;
      } else {
        let novaPosicao = (posicao - desloc + tamAlfabeto) % tamAlfabeto;
        let novaLetra = alphabet[novaPosicao];
        novaFrase = `${novaFrase}${novaLetra}`;
      }
    }
    return novaFrase;
  }
};

export default cipher;
