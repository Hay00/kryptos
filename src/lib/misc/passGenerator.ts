import { CheckboxName } from '@/pages/Main/InputModal/input-modal.interface';
import { getRandomIndex } from '@/utils';

type Options = {
  [key in CheckboxName]: boolean;
};

export default class PassGenerator {
  lower = 'abcdefghijklmnopqrstuvwxyz';
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = '0123456789';
  symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  encode(passLength: number, options: Options) {
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
