export default class Sha1 {
  async encode(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-1', data); // NOSONAR, not used for sensitive content

    return new Uint8Array(hashBuffer).toHex();
  }
}
