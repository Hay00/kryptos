import TextEncoder from './Text/';

export default class ReverseString {
  encode(input) {
    return this.swapChars(input);
  }

  decode(input) {
    return this.swapChars(input);
  }

  swapChars(str) {
    str = TextEncoder.codePointsFromString(str);
    const inputLen = str.length - 1;
    let output = [];
    // Just inverts characters positions
    for (let i = inputLen; i >= 0; i--) {
      output.push(str[i]);
    }
    return TextEncoder.stringFromCodePoints(output);
  }
}
