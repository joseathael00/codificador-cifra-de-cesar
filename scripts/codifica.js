export default function codificar(texto, quantidade) {
  let letrasAscii = [];

  for (let letra of texto) {
    // Espaço
    if (letra === " ") {
      letrasAscii.push(32);
      continue;
      // Letra
    } else {
      let ascii = letra.charCodeAt(0); // Caractere para ascii
      let codificada = ascii + quantidade; // Deslocamento do ascii
      let valorFinal; // Declaração do valor final (mais baixo ainda vai ser usado)

      // Maiúscula
      if (ascii >= 65 && ascii <= 90) {
        if (codificada > 90) {
          // Caso seja maior que 90 (Z)
          let valorAMais = codificada - 90; // Pegando o valor acima de Z
          valorFinal = 65 + valorAMais;
        } else {
          valorFinal = codificada;
        }
      } else if (ascii >= 97 && ascii <= 122) {
        // Caso seja maior que 122 (z)
        if (codificada > 122) {
          let valorAMais = codificada - 122;
          valorFinal = 97 + valorAMais;
        } else {
          valorFinal = codificada;
        }
      } else {
        alert("Insira um caractere válido!");
        break;
      }
      letrasAscii.push(valorFinal);
    }
  }
  return String.fromCharCode(...letrasAscii);
}
