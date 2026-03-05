export default function caesarToText(text, displacement) {
  let result = [];

  for (let letter of text) {
    let ascii = letter.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
      // maiúsculas
      let position = ascii - 65;
      let newPosition = (position - displacement + 26) % 26;
      let newAscii = newPosition + 65;
      result.push(String.fromCharCode(newAscii));
    } else if (ascii >= 97 && ascii <= 122) {
      // minúsculas
      let position = ascii - 97;
      let newPosition = (position - displacement + 26) % 26;
      let newAscii = newPosition + 97;
      result.push(String.fromCharCode(newAscii));
    } else {
      result.push(letter);
    }
  }

  return result.join("");
}
