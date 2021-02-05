export default class Sha1 {
  encode(input) {
    return require('crypto').createHash('sha1').update(input).digest('hex');
  }
}
