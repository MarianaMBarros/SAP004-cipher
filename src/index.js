import cipher from "./cipher.js";
// const fraseCifrada = cipher.encode(1, "mariana");
function lettersCipher() {
  let carta = document.getElementById("letters").value;
  let codigo = Number(document.getElementById("name").value);
  const cartaCifrada = cipher.encode(codigo, carta);

  document.getElementById("result").value = cartaCifrada;
}

document.getElementById("btnCripitar").addEventListener("click", lettersCipher);

function lettersDecipher() {
  let carta = document.getElementById("letters").value;
  let codigo = Number(document.getElementById("name").value);
  const cartaDecifrada = cipher.decode(codigo, carta);

  document.getElementById("result").value = cartaDecifrada;
}

document
  .getElementById("btnDecripitar")
  .addEventListener("click", lettersDecipher);

function clean() {
  document.getElementById("letters").value = "";
  document.getElementById("name").value = "";
  document.getElementById("result").value = "";
}
document.getElementById("btnClean").addEventListener("click", clean);
