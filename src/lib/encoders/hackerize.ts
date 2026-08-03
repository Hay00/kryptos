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
    const baseList = encode ? this.hackerized : this.alphabet;
    const replaceList = encode ? this.alphabet : this.hackerized;

    return str
      .split('')
      .map((c) => baseList[replaceList.indexOf(c)] || c)
      .join('');
  }
}
