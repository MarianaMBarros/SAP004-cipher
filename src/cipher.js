const cipher = {
  encode: function (offset, message) {
    if (typeof offset != "number" || isNaN(offset)) {
      throw TypeError("O deslocamento devera ser apenas dado numerico.");
    }
    if (typeof message != "string" || message.length <= 0) {
      throw TypeError("Sua carta devera conter ao menos um caracter.");
    }
    let newPhrase = "";
    for (let i of message) {
      const letterCode = i.charCodeAt();
      if (letterCode >= 65 && letterCode <= 90) {
        const newLetterCode = ((letterCode - 65 + offset) % 26) + 65;
        const newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase += newLetterAlphabet;
      } else if (letterCode >= 97 && letterCode <= 122) {
        const newLetterCode = ((letterCode - 97 + offset) % 26) + 97;
        const newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase += newLetterAlphabet;
      } else {
        newPhrase += i;
      }
    }
    return newPhrase;
  },

  decode: function (offset, message) {
    if (typeof offset != "number" || isNaN(offset)) {
      throw TypeError("O deslocamento devera ser apenas dado numerico.");
    }
    if (typeof message != "string" || message.length <= 0) {
      throw TypeError("Sua carta devera conter ao menos um caracter.");
    }
    let newPhrase = "";
    for (let i of message) {
      const letterCode = i.charCodeAt();
      if (letterCode >= 65 && letterCode <= 90) {
        const newLetterCode = ((letterCode - 90 - offset) % 26) + 90;
        const newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase += newLetterAlphabet;
      } else if (letterCode >= 97 && letterCode <= 122) {
        const newLetterCode = ((letterCode - 122 - offset) % 26) + 122;
        const newLetterAlphabet = String.fromCharCode(newLetterCode);
        newPhrase += newLetterAlphabet;
      } else {
        newPhrase += i;
      }
    }
    return newPhrase;
  },
};
export default cipher;
