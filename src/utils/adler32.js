import TextEncoder from './Text';

export default class Adler32 {
  encode(input) {
    const codePoints = TextEncoder.codePointsFromString(input);
    const bytes = TextEncoder.bytesFromCodePoints(codePoints);
    const encodedText = this.bytesToAdler32(bytes);
    return (encodedText.length % 2 !== 0 ? '0' : '') + encodedText;
  }

  /**
   * Create a hash from a code points array
   * @param {Uint8Array} charArr code points array
   * @returns {String} hexadecimal string
   */
  bytesToAdler32(charArr) {
    const MOD_ADLER = 65521; // Adler 32 modulo
    let a = 1;
    let b = 0;
    // Encode each byte
    for (let index = 0; index < charArr.length; ++index) {
      a = (a + charArr[index]) % MOD_ADLER;
      b = (b + a) % MOD_ADLER;
    }
    return this.decimalToHexString((b << 16) | a);
  }

  /**
   * Converts decimal to a positive hexadecimal
   *
   * @param {Number} number decimal number
   * @returns {String} positive hexadecimal string
   */
  decimalToHexString(number) {
    if (number < 0) {
      number = 0xffffffff + number + 1;
    }
    return number.toString(16).padStart(2, '0');
  }
}
