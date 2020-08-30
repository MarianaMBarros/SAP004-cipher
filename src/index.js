import cipher from "./cipher/index.js";

const letters = document.getElementById("letters");
const codigo = document.getElementById("number-displace");

const lettersCipher = () => {
  if (letters == "") {
    alert("Digite sua Carta para Continuar");
  } else if (codigo.valueAsNumber <= 0) {
    alert("Digite o Deslocamento para Continuar");
  } else {
    const lettersCipher = cipher.encode(codigo.valueAsNumber, letters.value);
    document.getElementById("result").value = lettersCipher;
  }
}

const lettersDecipher = () => {
  if (letters == "") {
    alert("Digite sua Carta para Continuar");
  } else if (codigo <= 0) {
    alert("Digite o Deslocamento para Continuar");
  } else {
    const lettersDecipher = cipher.decode(codigo.valueAsNumber, letters.value);
    document.getElementById("result").value = lettersDecipher;
  }
}

const clean = () => {
  document.getElementById("letters").value = "";
  document.getElementById("number-displace").value = "";
  document.getElementById("result").value = "";
}

document.getElementById("btn-encode").addEventListener("click", lettersCipher);
document.getElementById("btn-decode").addEventListener("click", lettersDecipher);
document.getElementById("btn-clean").addEventListener("click", clean);
