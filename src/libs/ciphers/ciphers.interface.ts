export type AesType = 'aes128' | 'aes192' | 'aes256';

export type CipherType = AesType | 'whirlpool';

export interface EncryptedData {
  encryptedData: string;
  iv: Uint8Array<ArrayBuffer>;
  salt: Uint8Array<ArrayBuffer>;
}
