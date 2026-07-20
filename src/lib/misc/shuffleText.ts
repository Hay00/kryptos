import { getRandomIndex } from '@/utils';
import TextEncoder from '@/utils/Text';

export default class ShuffleText {
  encode(input: string) {
    const array = TextEncoder.codePointsFromString(input);

    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = getRandomIndex(currentIndex);
      currentIndex -= 1;

      // And swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return TextEncoder.stringFromCodePoints(array);
  }
}
