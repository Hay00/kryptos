export default class UriComp {
  encode(input) {
    return encodeURIComponent(input);
  }

  decode(input) {
    return decodeURIComponent(input);
  }
}
