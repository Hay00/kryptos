export default class Uri {
  encode(input: string) {
    return encodeURI(input);
  }

  decode(input: string) {
    return decodeURI(input);
  }
}
