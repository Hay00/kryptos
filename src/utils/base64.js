export default class Base64 {
  encode(input) {
    return btoa(
      encodeURIComponent(input).replace(
        /%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
        }
      )
    );
  }

  decode(input) {
    return decodeURIComponent(
      atob(input)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }
}
