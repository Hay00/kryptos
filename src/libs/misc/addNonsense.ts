import { getRandomBoolean, getRandomIndex } from '@/utils';

import type { MiscTransformLib } from '../libs.interface';

export default class AddNonsense implements MiscTransformLib {
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  generic(input: string) {
    let encodedString = '';

    for (const char of input) {
      encodedString += char;

      if (getRandomBoolean()) {
        const randomIndex = getRandomIndex(this.characters.length);
        encodedString += this.characters.charAt(randomIndex);
      }
    }

    return encodedString;
  }
}
