export default class StrToDec {
  encode(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      output += `&#${input[i].charCodeAt()};`;
    }
    return output;
  }

  decode(input) {
    return input.toString();
  }
}
