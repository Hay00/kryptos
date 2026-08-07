import { getRandomIndex } from '@/utils';

import type { MiscTransformLib, PasswordOptions } from '../libs.interface';

export default class PassGenerator implements MiscTransformLib {
  lower = 'abcdefghijklmnopqrstuvwxyz';
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = '0123456789';
  symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  password(passLength: number, options: PasswordOptions) {
    const { lowercase, uppercase, numbers, symbols } = options;
    let chars = '';

    // Concat possible password characters
    if (lowercase) {
      chars += this.lower;
    }
    if (uppercase) {
      chars += this.upper;
    }
    if (numbers) {
      chars += this.numbers;
    }
    if (symbols) {
      chars += this.symbols;
    }

    // User hasn't selected any option
    if (chars.length < 1) {
      throw new Error('Please, select at least one option!');
    }

    let password = '';
    // Draw a character until it reaches the desired size password length
    for (let i = 0; i < passLength; i++) {
      password += chars[getRandomIndex(chars.length)];
    }
    return password;
  }
}
