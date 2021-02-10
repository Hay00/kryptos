import TextEncoder from './Text/';

export default class StrToOct {
  encode(input) {
    // Get code points from the string
    input = TextEncoder.codePointsFromString(input);
    return Array.from(input)
      .map((char) => char.toString(8))
      .join(' ');
  }

  decode(input) {
    input = input.trimEnd();
    // Create an array with each code point and converts to decimal
    const result = Array.from(input.split(' ')).map((char) =>
      parseInt(char, 8).toString()
    );
    // Then convert code points to string
    return TextEncoder.stringFromCodePoints(result);
  }
}
