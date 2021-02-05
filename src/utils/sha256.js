export default class Sha256 {
  encode(input) {
    return require('crypto').createHash('sha256').update(input).digest('hex');
  }
}
