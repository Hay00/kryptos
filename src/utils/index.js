import addNonsense from './addNonsense';
import adler32 from './adler32';
import base64 from './base64';
import cesarShift from './cesarShift';
import crc32 from './crc32';
import escapeString from './escapeString';
import hackerize from './hackerize';
import md2 from './md2';
import md4 from './md4';
import md5 from './md5';
import morseCode from './morseCode';
import passGenerator from './passGenerator';
import reverseStr from './reverseStr';
import ripe160 from './ripe160';
import rot13 from './rot13';
import sha1 from './sha1';
import sha256 from './sha256';
import sha512 from './sha512';
import shuffleText from './shuffleText';
import strDec from './strDec';
import strHex from './strHex';
import stringBin from './stringBin';
import stringLower from './stringLower';
import stringUpper from './stringUpper';
import strOct from './strOct';
import uri from './uri';
import uriComp from './uriComp';
import whirlpool from './whirlpool';

const UTILS = {
  addNonsense,
  adler32,
  base64,
  cesarShift,
  crc32,
  escapeString,
  hackerize,
  md2,
  md4,
  md5,
  morseCode,
  passGenerator,
  reverseStr,
  ripe160,
  rot13,
  sha1,
  sha256,
  sha512,
  shuffleText,
  strDec,
  strHex,
  stringBin,
  stringLower,
  stringUpper,
  strOct,
  uri,
  uriComp,
  whirlpool,
};

export default class UtilFactory {
  static createInstance(item) {
    // Get util class from parameter
    const utilCreator = UTILS[item];

    // Return a new instance from this util exists
    return utilCreator ? new utilCreator() : null;
  }
}
