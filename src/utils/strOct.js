import TextEncoder from './Text/';

export default class StrToOct {
  encode(input) {
    input = TextEncoder.codePointsFromString(input);
    return Array.from(input)
      .map((char) => char.toString(8))
      .join(' ');
  }

  decode(input) {
    input = input.trimEnd();
    const result = Array.from(input.split(' ')).map((char) =>
      parseInt(char, 8).toString()
    );
    return TextEncoder.stringFromCodePoints(result);
  }
}
