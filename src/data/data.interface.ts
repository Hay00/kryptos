export type Converters =
  | 'escapeString'
  | 'reverseStr'
  | 'strDec'
  | 'strHex'
  | 'stringBin'
  | 'stringLower'
  | 'stringUpper'
  | 'strOct'
  | 'uri'
  | 'uriComp';

export type Hashes =
  | 'sha1'
  | 'sha224'
  | 'sha256'
  | 'sha384'
  | 'sha512'
  | 'ripemd160'
  | 'crc32'
  | 'adler32'
  | 'md5'
  | 'whirlpool';

export type Encoders =
  | 'base64'
  | 'caesarShift'
  | 'hackerize'
  | 'morseCode'
  | 'rot13';

export type Ciphers = 'aes128' | 'aes192' | 'aes256';

export type Misc = 'addNonsense' | 'passGenerator' | 'shuffleText';

export type ContentId =
  | Converters
  | Hashes
  | Encoders
  | Ciphers
  | Misc
  | 'none';

export interface Options {
  type: string;
  title: string;
}

export interface Content {
  id: ContentId;
  title: string;
  kind?: 'none' | 'password' | 'oneWay';
  options?: Options[];
}

export type ContentType =
  | 'encoder'
  | 'converter'
  | 'hashing'
  | 'cipher'
  | 'misc'
  | 'none';

export interface PageContents {
  title: string;
  type: ContentType;
  content: Content[];
  options?: Options[];
}
