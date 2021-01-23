import TextEncoder from './Text/';

export default class StringToBin {
  encode(input) {
    input = TextEncoder.codePointsFromString(input);
    return Array.from(input)
      .map((char) => char.toString(2))
      .join(' ');
  }

  decode(input) {
    input = input.trimEnd();
    const result = Array.from(input.split(' ')).map((char) =>
      parseInt(char, 2).toString()
    );
    return TextEncoder.stringFromCodePoints(result);
  }
}
