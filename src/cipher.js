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
    let newPhrase = "";
    const phrase = message.toUpperCase();
    const displace = offset;
    const alphabetSize = 26;
    for (let i = 0; i < phrase.length; i++) {
      let letterAlphabet = phrase[i];
      let position = alphabet.indexOf(letterAlphabet);
      if (position == -1) {
        newPhrase = `${newPhrase}${letterAlphabet}`;
      } else {
        let newPosition = (position + displace) % alphabetSize;
        let newLetterAlphabet = alphabet[newPosition];
        newPhrase = `${newPhrase}${newLetterAlphabet}`;
      }
    }
    return newPhrase;
  },
  decode: function(offset, message) {
    let newPhrase = "";
    const phrase = message.toUpperCase();
    const displace = offset;
    const alphabetSize = 26;
    for (let i = 0; i < phrase.length; i++) {
      let letterAlphabet = phrase[i];
      let position = alphabet.indexOf(letterAlphabet);
      if (position == -1) {
        newPhrase = `${newPhrase}${letterAlphabet}`;
      } else {
        let newPosition =
          (((position - displace + alphabetSize) % alphabetSize) +
            alphabetSize) %
          alphabetSize;
        let newLetterAlphabet = alphabet[newPosition];
        newPhrase = `${newPhrase}${newLetterAlphabet}`;
      }
    }
    return newPhrase;
  }
};

export default cipher;
