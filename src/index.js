import cipher from "./cipher.js";
// const fraseCifrada = cipher.encode(1, "mariana");
function lettersCipher() {
  let carta = document.getElementById("letters").value;
  let codigo = Number(document.getElementById("numberDisplace").value);

  if (carta == "") {
    alert("Digite sua Carta para Continuar");
  } else if (codigo <= 0) {
    alert("Digite o Deslocamento para Continuar");
  } else {
    const cartaCifrada = cipher.encode(codigo, carta);
    document.getElementById("result").value = cartaCifrada;
  }
}

document.getElementById("btnEncode").addEventListener("click", lettersCipher);

function lettersDecipher() {
  let carta = document.getElementById("letters").value;
  let codigo = Number(document.getElementById("numberDisplace").value);

  if (carta == "") {
    alert("Digite sua Carta para Continuar");
  } else if (codigo <= 0) {
    alert("Digite o Deslocamento para Continuar");
  } else {
    const cartaDecifrada = cipher.decode(codigo, carta);
    document.getElementById("result").value = cartaDecifrada;
  }
}

document.getElementById("btnDecode").addEventListener("click", lettersDecipher);

function clean() {
  document.getElementById("letters").value = "";
  document.getElementById("numberDisplace").value = "";
  document.getElementById("result").value = "";
}
document.getElementById("btnClean").addEventListener("click", clean);

function somenteNumero(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode == 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    evt.preventDefault();
    return false;
  }
  return true;
}
document
  .getElementById("numberDisplace")
  .addEventListener("keypress", somenteNumero);
