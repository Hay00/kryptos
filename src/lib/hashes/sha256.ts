export default class Sha256 {
  async encode(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    return new Uint8Array(hashBuffer).toHex();
  }
}
