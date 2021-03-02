export default class Sha384 {
  encode(input) {
    return require('crypto').createHash('sha384').update(input).digest('hex');
  }
}
