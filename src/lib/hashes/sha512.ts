export default class Sha512 {
  async encode(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-512', data);

    return new Uint8Array(hashBuffer).toHex();
  }
}
