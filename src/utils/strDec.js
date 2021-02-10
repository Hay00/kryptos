import TextEncoder from './Text/';

export default class StrToDec {
  encode(input) {
    // Get code points from the string
    input = TextEncoder.codePointsFromString(input);
    return Array.from(input).join(' ');
  }

  decode(input) {
    input = input.trimEnd(); // Avoids parsing error
    // Create an array with each code point
    const result = Array.from(input.split(' '));
    // Then convert code points to string
    return TextEncoder.stringFromCodePoints(result);
  }
}
