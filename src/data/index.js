export const pageContents = [
  {
    title: 'String conversions',
    content: [
      {
        id: 'escapeString',
        title: 'Escape String',
        type: 'encoder',
      },
      { id: 'uri', title: 'URI Encode', type: 'encoder' },
      {
        id: 'uriComp',
        title: 'URI Comp. Encode',
        type: 'encoder',
      },
      {
        id: 'stringUpper',
        title: 'String to Uppercase',
        type: 'transform',
      },
      {
        id: 'stringLower',
        title: 'String to Lowercase',
        type: 'transform',
      },
      {
        id: 'reverseStr',
        title: 'Reverse String',
        type: 'encoder',
      },
      {
        id: 'stringBin',
        title: 'String to Binary',
        type: 'encoder',
      },
      {
        id: 'strDec',
        title: 'String to Decimal',
        type: 'encoder',
      },
      { id: 'strOct', title: 'String to Octal', type: 'encoder' },
      {
        id: 'strHex',
        title: 'String to Hexadecimal',
        type: 'encoder',
      },
    ],
  },
  {
    title: 'Popular Encoders',
    content: [
      { id: 'base64', title: 'Base64', type: 'encoder' },
      { id: 'rot13', title: 'ROT-13', type: 'encoder' },
      { id: 'cesarShift', title: 'Cesar Shift', type: 'encoder' },
      { id: 'morseCode', title: 'Morse', type: 'encoder' },
      { id: 'hackerize', title: 'Hackerize', type: 'encoder' },
    ],
  },
  {
    title: 'Hash Generators',
    content: [
      { id: 'sha1', title: 'SHA1', type: 'hash' },
      { id: 'sha224', title: 'SHA224', type: 'hash' },
      { id: 'sha256', title: 'SHA256', type: 'hash' },
      { id: 'sha384', title: 'SHA384', type: 'hash' },
      { id: 'sha512', title: 'SHA512', type: 'hash' },
      { id: 'ripe160', title: 'RipeMD-160', type: 'hash' },
      { id: 'crc32', title: 'CRC32', type: 'hash' },
      { id: 'adler32', title: 'Adler-32', type: 'hash' },
      { id: 'whirlpool', title: 'Whirlpool', type: 'hash' },
      { id: 'md5', title: 'MD5', type: 'hash' },
    ],
  },
  {
    title: 'Block Cipher',
    options: [
      {
        type: 'cbc',
        title: 'CBC',
      },
      {
        type: 'ecb',
        title: 'ECB',
      },
    ],
    content: [
      { id: 'aes128', title: 'AES-128', type: 'block' },
      { id: 'aes192', title: 'AES-192', type: 'block' },
      { id: 'aes256', title: 'AES-256', type: 'block' },
    ],
  },
  {
    title: 'Misc Tools',
    content: [
      {
        id: 'passGenerator',
        title: 'Password Generator',
        type: 'password',
        options: [
          {
            name: 'hasLowercase',
            title: 'Lowercase Chars ( ex: abcd )',
          },
          {
            name: 'hasUppercase',
            title: 'Uppercase Chars ( ex: ABCD )',
          },
          {
            name: 'hasNumbers',
            title: 'Include Numbers ( ex: 1234 )',
          },
          {
            name: 'hasSymbols',
            title: 'Include Symbols ( ex: !@#$ )',
          },
        ],
      },
      {
        id: 'shuffleText',
        title: 'Shuffle Text',
        type: 'transform',
      },
      {
        id: 'addNonsense',
        title: 'Add Nonsense in the Text',
        type: 'transform',
      },
    ],
  },
];
