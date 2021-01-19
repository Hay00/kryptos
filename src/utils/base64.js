export default class Base64 {
  encode(input) {
    return btoa(input);
  }

  decode(input) {
    return atob(input);
  }
}
