const cipher = {
  encode: function (offset, message) {
    let newPhrase = "";

    for (let i = 0; i < message.length; i++) {
      let letterCode = message[i].charCodeAt();
      // Maiuscula
      if (letterCode >= 65 && letterCode <= 90) {
        let newLetterCode = ((letterCode - 65 + offset) % 26) + 65;
        let newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase = `${newPhrase}${newLetterAlphabet}`;
        //Minuscula
      } else if (letterCode >= 97 && letterCode <= 122) {
        let newLetterCode = ((letterCode - 97 + offset) % 26) + 97;
        let newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase = `${newPhrase}${newLetterAlphabet}`;
        //caracter especial
      } else {
        newPhrase = message;
      }
    }

    return newPhrase;
  },

  decode: function (offset, message) {
    let newPhrase = "";

    for (let i = 0; i < message.length; i++) {
      let letterCode = message[i].charCodeAt();
      // Maiuscula
      if (letterCode >= 65 && letterCode <= 90) {
        let newLetterCode = ((letterCode - 90 - offset) % 26) + 90;
        let newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase = `${newPhrase}${newLetterAlphabet}`;
        //Minuscula
      } else if (letterCode >= 97 && letterCode <= 122) {
        let newLetterCode = ((letterCode - 122 - offset) % 26) + 122;
        let newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase = `${newPhrase}${newLetterAlphabet}`;
        //caracter especial
      } else {
        newPhrase = message;
      }
    }
    return newPhrase;
  },
};

export default cipher;
