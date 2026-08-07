import type { GenericEncoderLib } from '../libs.interface';

export default class StrUpper implements GenericEncoderLib {
  encode(input: string) {
    return input.toUpperCase();
  }

  decode(input: string) {
    // TODO: Implement decoding logic for STR_UPPER transformation
    // throw new Error('STR_UPPER transformation is not implemented');
    return input;
  }
}
