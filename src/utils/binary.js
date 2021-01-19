class Binary {
  encode(input) {
    var characters = input.split('');

    return characters
      .map(function (char) {
        const binary = char.charCodeAt(0).toString(2);
        const pad = Math.max(8 - binary.length, 0);
        // Just to make sure it is 8 bits long.
        return '0'.repeat(pad) + binary;
      })
      .join('');
  }

  decode(input) {
    let bytesLeft = input;
    let result = '';

    // Check if we have some bytes left
    while (bytesLeft.length) {
      // Get the first digits
      const byte = bytesLeft.substr(0, 8);
      bytesLeft = bytesLeft.substr(8);

      result += String.fromCharCode(parseInt(byte, 2));
    }

    return result;
  }
}

module.exports = Binary;
