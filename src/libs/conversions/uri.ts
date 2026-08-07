import type { GenericEncoderLib } from '../libs.interface';

export default class Uri implements GenericEncoderLib {
  encode(input: string) {
    return encodeURI(input);
  }

  decode(input: string) {
    return decodeURI(input);
  }
}
