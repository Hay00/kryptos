const binary = require('./binary');
const base64 = require('./base64');
const hackerize = require('./hackerize');

export const utils = {
  escapeString(value) {
    return value;
  },
  url(value) {
    return value;
  },
  html(value) {
    return value;
  },
  stringUpper(value) {
    return value;
  },
  stringLower(value) {
    return value;
  },
  reverseStr(value) {
    return value;
  },
  stringBin(value, isEncode) {
    const tempObj = new binary();
    if (isEncode) {
      return tempObj.encode(value);
    }
    return tempObj.decode(value);
  },
  strDec(value) {
    return value;
  },
  strOct(value) {
    return value;
  },
  strHex(value) {
    return value;
  },
  base64(value, isEncode) {
    const tempObj = new base64();
    if (isEncode) {
      return tempObj.encode(value);
    }
    return tempObj.decode(value);
  },
  rot13(value) {
    return value;
  },
  cesarShift(value) {
    return value;
  },
  morseCode(value) {
    return value;
  },
  hackerize(value, isEncode) {
    const tempObj = new hackerize();
    if (isEncode) {
      return tempObj.encode(value);
    }
    return tempObj.decode(value);
  },
  sha1(value) {
    return value;
  },
  sha256(value) {
    return value;
  },
  sha512(value) {
    return value;
  },
  ripe160(value) {
    return value;
  },
  crc32(value) {
    return value;
  },
  adle32(value) {
    return value;
  },
  whirlpool(value) {
    return value;
  },
  md2(value) {
    return value;
  },
  md4(value) {
    return value;
  },
  md5(value) {
    return value;
  },
  passGenerator(value) {
    return value;
  },
  scrambleText(value) {
    return value;
  },
  addNonsense(value) {
    return value;
  },
};
