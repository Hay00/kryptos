import type { OneWayTransformLib } from '../libs.interface';

export default class Sha1 implements OneWayTransformLib {
  async hash(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-1', data); // NOSONAR, not used for sensitive content

    return new Uint8Array(hashBuffer).toHex();
  }
}
