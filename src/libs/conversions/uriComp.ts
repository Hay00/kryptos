import type { GenericEncoderLib } from '../libs.interface';

export default class UriComp implements GenericEncoderLib {
  encode(input: string) {
    return encodeURIComponent(input);
  }

  decode(input: string) {
    return decodeURIComponent(input);
  }
}
