import {
  escapeString,
  reverseStr,
  strDec,
  strHex,
  stringBin,
  stringLower,
  stringUpper,
  strOct,
  uri,
  uriComp,
} from '@/lib/conversions';

import {
  base64,
  caesarShift,
  hackerize,
  morseCode,
  rot13,
} from '@/lib/encoders';

import {
  adler32,
  crc32,
  md5,
  ripemd160,
  sha1,
  sha224,
  sha256,
  sha384,
  sha512,
  whirlpool
} from '@/lib/hashes';

import { aes128, aes192, aes256 } from '@/lib/ciphers';

import { addNonsense, passGenerator, shuffleText } from '@/lib/misc';

const UTILS = {
  addNonsense,
  adler32,
  aes128,
  aes192,
  aes256,
  base64,
  caesarShift,
  crc32,
  escapeString,
  hackerize,
  md5,
  morseCode,
  passGenerator,
  reverseStr,
  ripemd160,
  rot13,
  sha1,
  sha224,
  sha256,
  sha384,
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
  static createInstance(item: string) {
    // Get util class from parameter
    const utilCreator = UTILS[item];

    // Return a new instance from this util exists
    // Remove, since all code will be functions
    return utilCreator ? new utilCreator() : null;
  }
}

export * from './randomIndex';
