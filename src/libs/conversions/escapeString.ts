import type { GenericEncoderLib } from '../libs.interface';

export default class EscapeStr implements GenericEncoderLib {
  // This one is deprecated, its being used just for documentation purpose
  encode(input: string) {
    return escape(input);
  }

  decode(input: string) {
    return unescape(input);
  }
}
