import textToCaesar from "./codifica.js";
import caesarToText from "./decodifica.js";

const cipher = document.getElementById("cipherBtn");
const decipher = document.getElementById("decipherBtn");
const displacement = document.getElementById("displacement");

const cipherArea = document.getElementById("cipherArea");
const decipherArea = document.getElementById("decipherArea");

cipher.addEventListener("click", () => {
  decipherArea.value = `${textToCaesar(cipherArea.value, +displacement.value)}`;
  cipherArea.value = "";
});
decipher.addEventListener("click", () => {
  cipherArea.value = `${caesarToText(decipherArea.value, +displacement.value)}`;
  decipherArea.value = "";
});
