export default class Sha224 {
  encode(input) {
    return require('crypto').createHash('sha224').update(input).digest('hex');
  }
}
