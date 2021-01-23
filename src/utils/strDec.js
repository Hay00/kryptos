import TextEncoder from './Text/';

export default class StrToDec {
  encode(input) {
    input = TextEncoder.codePointsFromString(input);
    return Array.from(input).join(' ');
  }

  decode(input) {
    input = input.trimEnd();
    const result = Array.from(input.split(' '));
    return TextEncoder.stringFromCodePoints(result);
  }
}
