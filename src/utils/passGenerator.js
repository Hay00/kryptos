export default class PassGenerator {
  lower = 'abcdefghijklmnopqrstuvwxyz';
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = '0123456789';
  symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  encode(passLength, options) {
    const { hasLowercase, hasUppercase, hasNumbers, hasSymbols } = options;
    let chars = '';

    // Concat possible password characters
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

    // User hasn't selected any option
    if (chars.length < 1) {
      throw new Error('Please, select at least one option!');
    }

    let password = '';
    // Draw a character until it reaches the desired size password length
    for (let i = 0; i < passLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  }
}
