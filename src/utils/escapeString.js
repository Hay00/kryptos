export default class EscapeStr {
  encode(input) {
    return escape(input);
  }

  decode(input) {
    return unescape(input);
  }
}
