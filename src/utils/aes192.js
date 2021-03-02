export default class AES192 {
  encode(input, type, password) {
    var crypto = require('crypto');
    let iv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if (type === 'ecb') {
      iv = Buffer.alloc(0);
    }
    const cipher = crypto.createCipheriv(`aes-192-${type}`, password, iv);
    const resultBuffer = Buffer.concat([cipher.update(input), cipher.final()]);
    return resultBuffer.toString('hex');
  }

  decode(input, type, password) {
    var crypto = require('crypto');
    input = Buffer.from(input, 'hex');
    let iv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if (type === 'ecb') {
      iv = Buffer.alloc(0);
    }
    const cipher = crypto.createDecipheriv(`aes-192-${type}`, password, iv);
    const resultBuffer = Buffer.concat([cipher.update(input), cipher.final()]);
    return resultBuffer.toString('utf8');
  }
}
