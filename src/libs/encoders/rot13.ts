import type { GenericEncoderLib } from '../libs.interface';

export default class Rot13 implements GenericEncoderLib {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  encode(input: string) {
    let output = '';
    for (const element of input) {
      const c = element;
      const conv = this.rot13[this.alphabet.indexOf(c)];
      output = conv ? (output += conv) : (output += c);
    }
    return output;
  }

  decode(input: string) {
    let output = '';
    for (const element of input) {
      const c = element;
      const conv = this.alphabet[this.rot13.indexOf(c)];
      output = conv ? (output += conv) : (output += c);
    }
    return output;
  }
}
