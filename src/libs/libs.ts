import { Aes128, Aes192, Aes256 } from '@/libs/ciphers';

import {
  EscapeString,
  ReverseStr,
  StrDec,
  StrHex,
  StringBin,
  StringLower,
  StringUpper,
  StrOct,
  Uri,
  UriComp,
} from '@/libs/conversions';

import {
  Base64,
  CaesarShift,
  Hackerize,
  MorseCode,
  Rot13,
} from '@/libs/encoders';

import {
  Adler32,
  Crc32,
  Md5,
  Ripemd160,
  Sha1,
  Sha224,
  Sha256,
  Sha384,
  Sha512,
  Whirlpool,
} from '@/libs/hashes';

import { AddNonsense, PassGenerator, ShuffleText } from '@/libs/misc';

import type {
  Ciphers,
  ContentId,
  ContentType,
  Converters,
  Encoders,
  Hashes,
  Misc,
} from '@/data';

import type {
  CipherLib,
  GenericEncoderLib,
  MiscTransformLib,
  OneWayTransformLib,
} from './libs.interface';

// ------------------------------------------------------------
// Lazy constructors
// ------------------------------------------------------------
const converterConstructors: Record<Converters, new () => GenericEncoderLib> = {
  escapeString: EscapeString,
  reverseStr: ReverseStr,
  strDec: StrDec,
  strHex: StrHex,
  stringBin: StringBin,
  stringLower: StringLower,
  stringUpper: StringUpper,
  strOct: StrOct,
  uri: Uri,
  uriComp: UriComp,
};

const encoderConstructors: Record<Encoders, new () => GenericEncoderLib> = {
  base64: Base64,
  caesarShift: CaesarShift,
  hackerize: Hackerize,
  morseCode: MorseCode,
  rot13: Rot13,
};

const hashConstructors: Record<Hashes, new () => OneWayTransformLib> = {
  sha1: Sha1,
  sha224: Sha224,
  sha256: Sha256,
  sha384: Sha384,
  sha512: Sha512,
  ripemd160: Ripemd160,
  crc32: Crc32,
  adler32: Adler32,
  md5: Md5,
  whirlpool: Whirlpool,
};

const cipherConstructors: Record<Ciphers, new () => CipherLib> = {
  aes128: Aes128,
  aes192: Aes192,
  aes256: Aes256,
};

const miscConstructors: Record<Misc, new () => MiscTransformLib> = {
  addNonsense: AddNonsense,
  passGenerator: PassGenerator,
  shuffleText: ShuffleText,
};

/**
 * Main Lib factory class
 */
export default class Libs {
  // Static caches: one Map per category
  private static readonly hashes = new Map<Hashes, OneWayTransformLib>();
  private static readonly converters = new Map<Converters, GenericEncoderLib>();
  private static readonly encoders = new Map<Encoders, GenericEncoderLib>();
  private static readonly ciphers = new Map<Ciphers, CipherLib>();
  private static readonly misc = new Map<Misc, MiscTransformLib>();

  private constructor(
    private readonly id: ContentId,
    private readonly type: ContentType
  ) {}

  /**
   * Factory method that returns a `Lib` instance after ensuring the underlying
   * utility is cached. The same utility instance is reused for subsequent calls
   * with the same `(id, type)` pair.
   *
   * @throws {Error} if `id` or `type` is falsy, or if the combination is invalid.
   */
  static getInstance(id: ContentId, type: ContentType): Libs {
    //
    if (id === 'none' || type === 'none') {
      return new Libs(id, type);
    }

    // Instantiate and cache based on the content type
    switch (type) {
      case 'converter': {
        const typedId = id as Converters;
        if (!Libs.converters.has(typedId)) {
          Libs.converters.set(typedId, new converterConstructors[typedId]());
        }
        break;
      }

      case 'encoder': {
        const typedId = id as Encoders;
        if (!Libs.encoders.has(typedId)) {
          Libs.encoders.set(typedId, new encoderConstructors[typedId]());
        }
        break;
      }

      case 'hashing': {
        const typedId = id as Hashes;
        if (!Libs.hashes.has(typedId)) {
          Libs.hashes.set(typedId, new hashConstructors[typedId]());
        }
        break;
      }

      case 'cipher': {
        const typedId = id as Ciphers;
        if (!Libs.ciphers.has(typedId)) {
          Libs.ciphers.set(typedId, new cipherConstructors[typedId]());
        }
        break;
      }

      case 'misc': {
        const typedId = id as Misc;
        if (!Libs.misc.has(typedId)) {
          Libs.misc.set(typedId, new miscConstructors[typedId]());
        }
        break;
      }

      default: {
        throw new Error(`Unsupported type: ${type}`);
      }
    }

    return new Libs(id, type);
  }

  cipher() {
    if (this.type !== 'cipher') {
      throw new Error(`Type not supported: ${this.type}`);
    }

    return (
      Libs.ciphers.get(this.id as Ciphers) ??
      new cipherConstructors[this.id as Ciphers]()
    );
  }

  misc() {
    if (this.type !== 'misc') {
      throw new Error(`Type not supported: ${this.type}`);
    }

    return (
      Libs.misc.get(this.id as Misc) ?? new miscConstructors[this.id as Misc]()
    );
  }

  oneWayTransform() {
    if (this.type !== 'hashing') {
      throw new Error(`Type not supported: ${this.type}`);
    }

    return (
      Libs.hashes.get(this.id as Hashes) ??
      new hashConstructors[this.id as Hashes]()
    );
  }

  twoWayTransform() {
    if (this.type === 'encoder') {
      return (
        Libs.encoders.get(this.id as Encoders) ??
        new encoderConstructors[this.id as Encoders]()
      );
    }

    if (this.type === 'converter') {
      return (
        Libs.converters.get(this.id as Converters) ??
        new converterConstructors[this.id as Converters]()
      );
    }

    throw new Error(`Type not supported: ${this.type}`);
  }
}
