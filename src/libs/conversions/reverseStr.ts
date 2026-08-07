import TextEncoder from '@/utils/Text';

import type { GenericEncoderLib } from '../libs.interface';

export default class ReverseString implements GenericEncoderLib {
  encode(input: string) {
    return this.swapChars(input);
  }

  decode(input: string) {
    return this.swapChars(input);
  }

  swapChars(input: string) {
    const str = TextEncoder.codePointsFromString(input);
    const inputLen = str.length - 1;
    const output = [];
    // Just inverts characters positions
    for (let i = inputLen; i >= 0; i--) {
      output.push(str[i]);
    }
    return TextEncoder.stringFromCodePoints(output);
  }
}
