export default class StrToHex {
  encode(input) {
    var arr = [];
    for (var i = 0; i < input.length; i++) {
      arr[i] = ('00' + input.charCodeAt(i).toString(16)).slice(-4);
    }
    return '\\u' + arr.join('\\u');
  }

  decode(input) {
    return unescape(input.replace(/\\/g, '%'));
  }
}
