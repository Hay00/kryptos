export default class CaesarShift {
  shiftAmount = 3;

  caesarCipher(value, shift) {
    const normalized = ((shift % 26) + 26) % 26;

    return value
      .split('')
      .map((char) => {
        const code = char.codePointAt(0);
        // ASCII 65 to 90
        if (code >= 65 && code <= 90) {
          return String.fromCodePoint(((code - 65 + normalized) % 26) + 65);
        }

        // ASCII 97 to 122
        if (code >= 97 && code <= 122) {
          return String.fromCodePoint(((code - 97 + normalized) % 26) + 97);
        }

        // Any other char does not change...
        return char;
      })
      .join('');
  }

  encode(input) {
    return this.caesarCipher(input, this.shiftAmount);
  }

  decode(input) {
    return this.caesarCipher(input, -this.shiftAmount);
  }
}
