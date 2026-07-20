export default class UriComp {
  encode(input: string) {
    return encodeURIComponent(input);
  }

  decode(input: string) {
    return decodeURIComponent(input);
  }
}
