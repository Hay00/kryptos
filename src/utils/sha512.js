export default class Sha512 {
  encode(input) {
    return require('crypto').createHash('sha512').update(input).digest('hex');
  }
}
