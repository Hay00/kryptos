import TextEncoder from '../../utils/Text';

export default class StrToDec {
  encode(input: string) {
    // Get code points from the string
    const codePoints = TextEncoder.codePointsFromString(input);
    return Array.from(codePoints).join(' ');
  }

  decode(input: string) {
    input = input.trimEnd(); // Avoids parsing error
    // Create an array with each code point
    const result = Array.from(input.split(' ')).map(Number);
    // Then convert code points to string
    return TextEncoder.stringFromCodePoints(result);
  }
}
