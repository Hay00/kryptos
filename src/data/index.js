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
      { id: 'sha256', title: 'SHA256', type: 'hash' },
      { id: 'sha512', title: 'SHA512', type: 'hash' },
      { id: 'ripe160', title: 'RipeMD-160', type: 'hash' },
      { id: 'crc32', title: 'CRC32', type: 'hash' },
      { id: 'adler32', title: 'Adler-32', type: 'hash' },
      { id: 'whirlpool', title: 'Whirlpool', type: 'hash' },
      { id: 'md2', title: 'MD2', type: 'hash' },
      { id: 'md4', title: 'MD4', type: 'hash' },
      { id: 'md5', title: 'MD5', type: 'hash' },
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
            title: 'Lowercase Chars ( abcdefgh )',
          },
          {
            name: 'hasUppercase',
            title: 'Uppercase Chars ( ABCDEFGH )',
          },
          {
            name: 'hasNumbers',
            title: 'Include Numbers ( 123456 )',
          },
          {
            name: 'hasSymbols',
            title: 'Include Symbols ( !@#$%&* )',
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
