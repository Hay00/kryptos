export default class Uri {
  encode(input) {
    return encodeURI(input);
  }

  decode(input) {
    return decodeURI(input);
  }
}
