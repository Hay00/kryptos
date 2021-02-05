export default class RipeMd160 {
  encode(input) {
    return require('crypto').createHash('rmd160').update(input).digest('hex');
  }
}
