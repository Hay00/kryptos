export default class PassGenerator {
  lower = 'abcdefghijklmnopqrstuvwxyz';
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = '0123456789';
  symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  encode(passLength, options) {
    const { hasLowercase, hasUppercase, hasNumbers, hasSymbols } = options;
    let chars = '';
    if (hasLowercase) {
      chars += this.lower;
    }
    if (hasUppercase) {
      chars += this.upper;
    }
    if (hasNumbers) {
      chars += this.numbers;
    }
    if (hasSymbols) {
      chars += this.symbols;
    }

    if (chars.length < 1) {
      throw new Error('Please, select at least one option!');
    }

    let password = '';
    for (let i = 0; i < passLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  }
}
