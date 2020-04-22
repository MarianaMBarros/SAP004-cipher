import cipher from "./cipher.js";
//getElementById:Esse método retorna o elemento que estiver contendo o nome do ID passado.
const letters = document.getElementById("letters");
//number para restringir apenas em numeros.
const codigo = document.getElementById("number-displace");

document.getElementById("btn-encode").addEventListener("click", lettersCipher);
document.getElementById("btn-decode").addEventListener("click", lettersDecipher);
document.getElementById("btn-clean").addEventListener("click", clean);

function lettersCipher() {
  if (letters == "") {
    alert("Digite sua Carta para Continuar");
  } else if (codigo.valueAsNumber <= 0) {
    alert("Digite o Deslocamento para Continuar");
  } else {
    const lettersCipher = cipher.encode(codigo.valueAsNumber, letters.value);
    document.getElementById("result").value = lettersCipher;
  }
}
//addEventListener:O tipo de evento que você deseja

function lettersDecipher() {
  if (letters == "") {
    alert("Digite sua Carta para Continuar");
  } else if (codigo <= 0) {
    alert("Digite o Deslocamento para Continuar");
  } else {
    const lettersDecipher = cipher.decode(codigo.valueAsNumber, letters.value);
    document.getElementById("result").value = lettersDecipher;
  }
}

function clean() {
  document.getElementById("letters").value = "";
  document.getElementById("number-displace").value = "";
  document.getElementById("result").value = "";
}
