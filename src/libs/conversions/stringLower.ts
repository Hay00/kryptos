import type { GenericEncoderLib } from '../libs.interface';

export default class StrLower implements GenericEncoderLib {
  encode(input: string) {
    return input.toLowerCase();
  }

  decode(input: string) {
    // TODO: Implement decoding logic for STR_LOWER transformation
    //throw new Error('STR_LOWER transformation is not implemented');
    return input;
  }
}
