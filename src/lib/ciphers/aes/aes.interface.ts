export interface AesCipherOptions {
  iterations: number;
  keyLength: number;
  hash: HashAlgorithm;
  blockType: AESBlockType;
}

export type HashAlgorithm = 'SHA-128' | 'SHA-192' | 'SHA-256';

export type AESBlockType = 'CBC' | 'GCM' | 'CTR';

export type BlockSizeMapType = {
  [key in AESBlockType]: number;
};

export type KeyLengthMapType = {
  [key in HashAlgorithm]: number;
};
