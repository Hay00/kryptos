import type { CheckboxName } from '@/pages/Main/Modal/modal.interface';
import type { AESBlockType } from './ciphers/aes/aes.interface';

export type PasswordOptions = {
  [key in CheckboxName]: boolean;
};

export interface GenericEncoderLib {
  encode: (input: string) => string;
  decode: (input: string) => string;
}

export interface OneWayTransformLib {
  hash: (input: string) => Promise<string>;
}

export interface MiscTransformLib {
  generic?: (input: string) => string;
  password?: (passLength: number, options: PasswordOptions) => string;
}

export interface CipherLib {
  encrypt: (
    input: string,
    blockType: AESBlockType,
    password: string
  ) => Promise<string>;

  decrypt: (
    input: string,
    blockType: AESBlockType,
    password: string
  ) => Promise<string>;
}

export type AllLibs = GenericEncoderLib | OneWayTransformLib | CipherLib;
