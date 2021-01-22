export default class StringToBin {
  encode(input) {
    let characters = new TextEncoder().encode(input);
    let output = '';
    for (const char of characters) {
      const binary = char.toString(2);
      const pad = Math.max(8 - binary.length, 0);
      output += '0'.repeat(pad) + binary + ' ';
    }
    return output.trimEnd();
  }

  decode(input) {
    let characters = input.split(' ').join('');
    let byteArr = [];
    for (let i = 0; i < characters.length; i += 8) {
      byteArr.push(characters.substring(i, i + 8));
    }
    let values = byteArr.map(function (char) {
      return parseInt(char, 2);
    });
    return new TextDecoder().decode(new Uint8Array(values));
  }
}
