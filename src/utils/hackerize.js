export default class Hackerize {
  alphabet = 'abcdefghijklmnopqrstuvwxyz.';
  hackerized = 'Λß↻Ð☰∲ç╫¡¿├↑ღ∏☐þ¶┏§⊥üƴ₪✕¥ᶾ▪';

  encode(input) {
    return this.swapChars(input.toLowerCase());
  }

  decode(input) {
    return this.swapChars(input, false);
  }

  swapChars(str, encode = true) {
    let output = '';
    // Swap chars between alphabets
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      let newChar = '';
      if (encode) {
        newChar = this.hackerized[this.alphabet.indexOf(c)];
      } else {
        newChar = this.alphabet[this.hackerized.indexOf(c)];
      }
      output = newChar ? (output += newChar) : (output += c);
    }
    return output;
  }
}
