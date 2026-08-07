import type { PageContents } from './data.interface';

export const rawPageContents: PageContents[] = [
  {
    title: 'String conversions',
    type: 'converter',
    content: [
      { id: 'escapeString', title: 'Escape String' },
      { id: 'uri', title: 'URI Encode' },
      { id: 'uriComp', title: 'URI Comp. Encode' },
      { id: 'stringUpper', title: 'String to Uppercase' },
      { id: 'stringLower', title: 'String to Lowercase' },
      { id: 'reverseStr', title: 'Reverse String' },
      { id: 'stringBin', title: 'String to Binary' },
      { id: 'strDec', title: 'String to Decimal' },
      { id: 'strOct', title: 'String to Octal' },
      { id: 'strHex', title: 'String to Hexadecimal' },
    ],
  },
  {
    title: 'Popular Encoders',
    type: 'encoder',
    content: [
      { id: 'base64', title: 'Base64' },
      { id: 'rot13', title: 'ROT-13' },
      { id: 'caesarShift', title: 'Caesar Shift' },
      { id: 'morseCode', title: 'Morse' },
      { id: 'hackerize', title: 'Hackerize' },
    ],
  },
  {
    title: 'Hash Generators',
    type: 'hashing',
    content: [
      { id: 'sha1', title: 'SHA1' },
      { id: 'sha224', title: 'SHA224' },
      { id: 'sha256', title: 'SHA256' },
      { id: 'sha384', title: 'SHA384' },
      { id: 'sha512', title: 'SHA512' },
      { id: 'ripemd160', title: 'RipeMD-160' },
      { id: 'crc32', title: 'CRC32' },
      { id: 'adler32', title: 'Adler-32' },
      // TODO: Implement this Hash type!
      // { id: 'whirlpool', title: 'Whirlpool', type: 'hash' },
      { id: 'md5', title: 'MD5' },
    ],
  },
  {
    title: 'Block Cipher',
    type: 'cipher',
    content: [
      { id: 'aes128', title: 'AES-128' },
      { id: 'aes192', title: 'AES-192' },
      { id: 'aes256', title: 'AES-256' },
    ],
  },
  {
    title: 'Misc Tools',
    type: 'misc',
    content: [
      {
        id: 'passGenerator',
        title: 'Password Generator',
        kind: 'password',
        options: [
          { type: 'lowercase', title: 'Lowercase Chars ( ex: abcd )' },
          { type: 'uppercase', title: 'Uppercase Chars ( ex: ABCD )' },
          { type: 'numbers', title: 'Include Numbers ( ex: 1234 )' },
          { type: 'symbols', title: 'Include Symbols ( ex: !@#$ )' },
        ],
      },
      { id: 'shuffleText', title: 'Shuffle Text', kind: 'oneWay' },
      { id: 'addNonsense', title: 'Add Nonsense in the Text', kind: 'oneWay' },
    ],
  },
];
