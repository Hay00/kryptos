import TextEncoder from './Text/';

export default class StrToHex {
  encode(input) {
    input = TextEncoder.codePointsFromString(input);
    return Array.from(input)
      .map((char) => char.toString(16))
      .join(' ');
  }

  decode(input) {
    input = input.trimEnd();
    const result = Array.from(input.split(' ')).map((char) =>
      parseInt(char, 16).toString()
    );
    return TextEncoder.stringFromCodePoints(result);
  }
}
