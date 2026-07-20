export default class EscapeStr {
  // This one is deprecated, its being used just for documentation purpose
  encode(input: string) {
    return escape(input);
  }

  decode(input: string) {
    return unescape(input);
  }
}
