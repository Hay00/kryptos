export default class StrToOct {
  encode(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      output += `${input[i].charCodeAt().toString(8)} `;
    }
    return output.trimEnd();
  }

  decode(input) {
    let toDecode = input.split(' ');
    return toDecode
      .map(function (octate) {
        return String.fromCharCode(parseInt(octate, 8));
      })
      .join('');
  }
}
