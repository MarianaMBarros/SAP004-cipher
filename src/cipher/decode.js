import { isLowerCase, isUpperCase } from "./util.js"

export default function decode(offset, message, numberLowerCase, numberUpperCase) {
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
      const newLetterCode = ((letterCode - 90 - offset) % 26) + 90;
      const newLetterAlphabet = String.fromCharCode(newLetterCode);
      newPhrase += newLetterAlphabet;
    } else if (isUpperCase(letterCode)) {
      const newLetterCode = ((letterCode - 122 - offset) % 26) + 122;
      const newLetterAlphabet = String.fromCharCode(newLetterCode);
      newPhrase += newLetterAlphabet;
    } else {
      newPhrase += i;
    }
  }
  return newPhrase;
}
