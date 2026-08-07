import TextEncoder from '@/utils/Text';

import type { GenericEncoderLib } from '../libs.interface';

export default class StrToOct implements GenericEncoderLib {
  encode(input: string) {
    // Get code points from the string
    const codePoints = TextEncoder.codePointsFromString(input);
    const result = Array.from(codePoints)
      .map((char) => char.toString(8))
      .join(' ');

    return result;
  }

  decode(input: string) {
    input = input.trimEnd();
    // Create an array with each code point and converts to decimal
    const result = Array.from(input.split(' ')).map((char) =>
      Number.parseInt(char, 8)
    );

    // Then convert code points to string
    return TextEncoder.stringFromCodePoints(result);
  }
}
