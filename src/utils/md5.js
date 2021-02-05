export default class Md5 {
  encode(input) {
    return require('crypto').createHash('md5').update(input).digest('hex');
  }
}
