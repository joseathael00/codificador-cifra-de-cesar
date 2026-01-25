import codificar from "./codifica.js";
const input = document.getElementById("entrada");
const quantidade = document.getElementById("quantidade");
const botao = document.querySelector("#botao");
const paragrafo = document.getElementById("texto");

botao.addEventListener("click", () => {
  const valor = codificar(input.value, +quantidade.value);
  texto.textContent = valor;
  input.value = "";
});
