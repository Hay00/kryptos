import type { OneWayTransformLib } from '../libs.interface';

export default class Sha256 implements OneWayTransformLib {
  async hash(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    return new Uint8Array(hashBuffer).toHex();
  }
}
