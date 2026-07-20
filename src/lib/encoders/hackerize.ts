export default class Hackerize {
  alphabet = 'abcdefghijklmnopqrstuvwxyz.';
  hackerized = 'Λß↻Ð☰∲ç╫¡¿├↑ღ∏☐þ¶┏§⊥üƴ₪✕¥ᶾ▪';

  encode(input: string) {
    return this.swapChars(input.toLowerCase());
  }

  decode(input: string) {
    return this.swapChars(input, false);
  }

  swapChars(str: string, encode = true) {
    const charList = encode ? this.hackerized : this.alphabet;
    return str
      .split('')
      .map((c) => charList[this.alphabet.indexOf(c)] || c)
      .join('');
  }
}
