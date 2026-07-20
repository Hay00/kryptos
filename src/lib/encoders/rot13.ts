export default class Rot13 {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  rot13 =    'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  encode(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      const conv = this.rot13[this.alphabet.indexOf(c)];
      output = conv ? (output += conv) : (output += c);
    }
    return output;
  }

  decode(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const c = input[i];
      const conv = this.alphabet[this.rot13.indexOf(c)];
      output = conv ? (output += conv) : (output += c);
    }
    return output;
  }
}
