const base64 = require('./base64');

export const utils = {
  stringToUpper() {
    console.log('stringToUpper');
  },
  stringToLower() {
    console.log('stringToLower');
  },
  base64(value, isEncode) {
    const tempObj = new base64(value, isEncode);
    return tempObj.translate();
  },
  decodeBase64(value) {
    return atob(value);
  },
};
