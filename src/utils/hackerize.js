export default class Hackerize {
  alphabet = 'abcdefghijklmnopqrstuvwxyz.';
  hackerized = 'Λß↻Ð☰∲ç╫¡¿├↑ღ∏☐þ¶┏§⊥üƴ₪✕¥ᶾ▪';

  encode(input) {
    let output = '';
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      const conv = this.hackerized[this.alphabet.indexOf(c)];
      output = conv ? (output += conv) : (output += c);
    }
    return output;
  }

  decode(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      const conv = this.alphabet[this.hackerized.indexOf(c)];
      output = conv ? (output += conv) : (output += c);
    }
    return output;
  }
}
