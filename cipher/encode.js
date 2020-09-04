import { isLowerCase, isUpperCase } from "./util.js"

export default function encode(offset, message) {
  if (typeof offset != "number" || isNaN(offset)) {
    throw TypeError("O deslocamento devera ser apenas dado numerico.");
  }
  if (typeof message != "string" || message.length <= 0) {
    throw TypeError("Sua carta devera conter ao menos um caracter.");
  }
  let newPhrase = "";
  for (let i of message) {
    const letterCode = i.charCodeAt();
    if (isLowerCase(letterCode)) {
      const newLetterCode = ((letterCode - 65 + offset) % 26) + 65;
      const newLetterAlphabet = String.fromCharCode(newLetterCode);
      newPhrase += newLetterAlphabet;
    } else if (isUpperCase(letterCode)) {
      const newLetterCode = ((letterCode - 97 + offset) % 26) + 97;
      const newLetterAlphabet = String.fromCharCode(newLetterCode);
      newPhrase += newLetterAlphabet;
    } else {
      newPhrase += i;
    }
  }
  return newPhrase;
}
