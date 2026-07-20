import { getRandomBoolean, getRandomIndex } from '@/utils';

export default class AddNonsense {
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  encode(input: string) {
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
