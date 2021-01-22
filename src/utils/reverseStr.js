export default class ReverseString {
  encode(input) {
    const inputLen = input.length - 1;
    let output = '';
    for (let i = inputLen; i >= 0; i--) {
      output += input[i];
    }
    return output;
  }

  decode(input) {
    const inputLen = input.length - 1;
    let output = '';
    for (let i = inputLen; i >= 0; i--) {
      output += input[i];
    }
    return output;
  }
}
