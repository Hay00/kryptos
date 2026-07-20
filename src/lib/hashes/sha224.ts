// Source -> https://github.com/VanillaMaster/sha256-sha224/blob/release/src/sha224.js

export const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
  0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
  0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
  0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
  0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
  0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

export const sha224_H = new Uint32Array([
  0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
  0x64f98fa7, 0xbefa4fa4,
]);

export const __W = Symbol('W');
export const __H = Symbol('H');
export const __block = Symbol('block');
export const __buffer = Symbol('buffer');
export const __byteLength = Symbol('byteLength');
export const __blockOffset = Symbol('blockOffset');
export const __bufferOffset = Symbol('bufferOffset');

export function uint32ToUint8ArrayBE(
  value: number,
  target: Uint8Array,
  offset: number
) {
  target[offset + 0] = (value >>> 0x18) & 0xff;
  target[offset + 1] = (value >>> 0x10) & 0xff;
  target[offset + 2] = (value >>> 0x08) & 0xff;
  target[offset + 3] = (value >>> 0x00) & 0xff;
}

export function uint8ArrayToUint32BE(source: Uint8Array, offset: number) {
  return (
    ((source[offset + 0] << 0x18) |
      (source[offset + 1] << 0x10) |
      (source[offset + 2] << 0x08) |
      Math.trunc(source[offset + 3])) >>>
    0
  );
}

export function uint8TailToUint32BE(
  source: Uint8Array,
  offset: number,
  length: number,
  last: number
) {
  switch (length) {
    case 0:
      return (last << 0x18) >>> 0;
    case 1:
      return ((source[offset + 0] << 0x18) | (last << 0x10)) >>> 0;
    case 2:
      return (
        ((source[offset + 0] << 0x18) |
          (source[offset + 1] << 0x10) |
          (last << 0x08)) >>>
        0
      );
    case 3:
      return (
        ((source[offset + 0] << 0x18) |
          (source[offset + 1] << 0x10) |
          (source[offset + 2] << 0x08) |
          Math.trunc(last)) >>>
        0
      );
    default:
      throw new Error('unreachable');
  }
}

/**
 * @param { number } n
 * @param { number } x
 */
function ROTR(n: number, x: number) {
  return (x >>> n) | (x << (32 - n));
}

/**@param { number } x */
export function Σ0(x: number) {
  return ROTR(2, x) ^ ROTR(13, x) ^ ROTR(22, x);
}
/**@param { number } x */
export function Σ1(x: number) {
  return ROTR(6, x) ^ ROTR(11, x) ^ ROTR(25, x);
}
/**@param { number } x */
export function σ0(x: number) {
  return ROTR(7, x) ^ ROTR(18, x) ^ (x >>> 3);
}
/**@param { number } x */
export function σ1(x: number) {
  return ROTR(17, x) ^ ROTR(19, x) ^ (x >>> 10);
}
/**
 * @param { number } x
 * @param { number } y
 * @param { number } z
 */
export function Ch(x: number, y: number, z: number) {
  return (x & y) ^ (~x & z);
}
/**
 * @param { number } x
 * @param { number } y
 * @param { number } z
 */
export function Maj(x: number, y: number, z: number) {
  return (x & y) ^ (x & z) ^ (y & z);
}

/**
 * @param { Uint32Array } H
 * @param { Uint32Array } W
 * @param { Uint32Array } block
 */
export function hash(H: Uint32Array, W: Uint32Array, block: Uint32Array) {
  for (let t = 0; t < 16; t++) W[t] = block[t];

  for (let t = 16; t < 64; t++)
    W[t] = (σ1(W[t - 2]) + W[t - 7] + σ0(W[t - 15]) + W[t - 16]) >>> 0;

  let a = H[0],
    b = H[1],
    c = H[2],
    d = H[3],
    e = H[4],
    f = H[5],
    g = H[6],
    h = H[7];

  for (let t = 0; t < 64; t++) {
    const T1 = (h + Σ1(e) + Ch(e, f, g) + K[t] + W[t]) >>> 0;
    const T2 = (Σ0(a) + Maj(a, b, c)) >>> 0;

    h = g;
    g = f;
    f = e;
    e = (d + T1) >>> 0;
    d = c;
    c = b;
    b = a;
    a = (T1 + T2) >>> 0;
  }

  H[0] = (H[0] + a) >>> 0;
  H[1] = (H[1] + b) >>> 0;
  H[2] = (H[2] + c) >>> 0;
  H[3] = (H[3] + d) >>> 0;
  H[4] = (H[4] + e) >>> 0;
  H[5] = (H[5] + f) >>> 0;
  H[6] = (H[6] + g) >>> 0;
  H[7] = (H[7] + h) >>> 0;
}

/**
 * @param { Uint32Array } block
 * @param { Uint8Array } buffer
 * @param { Uint32Array } H
 * @param { Uint32Array } W
 * @param { number } blockOffset
 * @param { number } bufferOffset
 * @param { number } byteLength
 */
export function finalize(
  block: Uint32Array,
  buffer: Uint8Array,
  H: Uint32Array,
  W: Uint32Array,
  blockOffset: number,
  bufferOffset: number,
  byteLength: number
) {
  block[blockOffset++] = uint8TailToUint32BE(buffer, 0, bufferOffset, 0x80);
  if (blockOffset > 14) {
    block.fill(0, blockOffset);
    hash(H, W, block);
    block.fill(0, 0, 14);
  } else {
    block.fill(0, blockOffset, 14);
  }
  block[14] = byteLength >>> 29;
  block[15] = (byteLength << 3) >>> 0;
  hash(H, W, block);
}

export class CryptoHasher {
  /**
   * @param { ReadonlyArrayLike<number>} init
   */
  constructor(init: Readonly<ArrayLike<number>>) {
    this[__H].set(init);
  }
  /**
   * @type { Uint32Array }
   */
  [__H] = new Uint32Array(8);
  /**
   * @type { number }
   */
  [__byteLength] = 0;
  /**
   * @type { number }
   */
  [__blockOffset] = 0;
  /**
   * @type { number }
   */
  [__bufferOffset] = 0;
  /**
   * @type { Uint32Array }
   */
  [__block] = new Uint32Array(16); //new Array(16);
  /**
   * @type { Uint8Array }
   */
  [__buffer] = new Uint8Array(4); //new Array(4);
  /**
   * @type { Uint32Array }
   */
  [__W] = new Uint32Array(64); //new Array(64);

  /**
   * Update the hash with data
   *
   * @param { Uint8Array } data
   */
  update(data: Uint8Array) {
    if (data.length === 0) return;

    this[__byteLength] += data.byteLength;

    let i = 0;
    let blockOffset = this[__blockOffset];

    const bufferOffset = this[__bufferOffset];
    const block = this[__block];
    const buffer = this[__buffer];
    const H = this[__H];
    const W = this[__W];

    if (bufferOffset !== 0) {
      if (data.length < 4 - bufferOffset) {
        switch (data.length) {
          case 1:
            buffer[bufferOffset] = data[0];
            this[__bufferOffset] = bufferOffset + 1;
            break;
          case 2:
            buffer[1] = data[0];
            buffer[2] = data[1];
            this[__bufferOffset] = 3;
            break;
          default:
            throw new Error('unreachable');
        }
        return;
      }
      switch (bufferOffset) {
        case 1:
          buffer[1] = data[0];
          buffer[2] = data[1];
          buffer[3] = data[2];
          i = 3;
          break;
        case 2:
          buffer[2] = data[0];
          buffer[3] = data[1];
          i = 2;
          break;
        case 3:
          buffer[3] = data[0];
          i = 1;
          break;
        default:
          throw new Error('unreachable');
      }
      this[__bufferOffset] = 0;
      block[blockOffset++] = uint8ArrayToUint32BE(buffer, 0);
      if (blockOffset === 16) {
        hash(H, W, block);
        blockOffset = 0;
      }
    }

    const l = data.length - 4;
    for (; i <= l; i += 4) {
      block[blockOffset++] = uint8ArrayToUint32BE(data, i);
      if (blockOffset == 16) {
        hash(H, W, block);
        blockOffset = 0;
      }
    }
    this[__blockOffset] = blockOffset;
    switch (data.length - i) {
      case 0:
        break;
      case 1:
        buffer[0] = data[i];
        this[__bufferOffset] = 1;
        break;
      case 2:
        buffer[0] = data[i];
        buffer[1] = data[i + 1];
        this[__bufferOffset] = 2;
        break;
      case 3:
        buffer[0] = data[i];
        buffer[1] = data[i + 1];
        buffer[2] = data[i + 2];
        this[__bufferOffset] = 3;
        break;
      default:
        throw new Error('unreachable');
    }
  }
}

export default class Sha224 {
  sha224(source: Uint8Array<ArrayBufferLike>) {
    const msgLength = source.byteLength;
    const payloadLength = msgLength + 1;
    const payloadBlocks = Math.ceil(payloadLength / 64);

    /**@type { Uint32Array } */
    const block = new Uint32Array(16); //new Array(16);
    /**@type { Uint32Array } */
    const W = new Uint32Array(64); //new Array(64);
    /**@type { Uint32Array } */
    const H = new Uint32Array(8); //[0xC1059ED8, 0x367CD507, 0x3070DD17, 0xF70E5939, 0xFFC00B31, 0x68581511, 0x64F98FA7, 0xBEFA4FA4];
    H.set(sha224_H);

    {
      let byteIndex = 0;
      const nonLastBlocks = payloadBlocks - 1;
      for (let i = 0; i < nonLastBlocks; i++) {
        for (let j = 0; j < 16; j++) {
          block[j] = uint8ArrayToUint32BE(source, byteIndex);
          byteIndex += 4;
        }
        hash(H, W, block);
      }
      {
        const boundaries = msgLength - 3;
        let blockIndex = 0;
        for (; byteIndex < boundaries; blockIndex++, byteIndex += 4) {
          block[blockIndex] = uint8ArrayToUint32BE(source, byteIndex);
        }
        block[blockIndex] = uint8TailToUint32BE(
          source,
          byteIndex,
          msgLength % 4,
          0x80
        );
        if (blockIndex >= 14) {
          block.fill(0, blockIndex + 1);
          hash(H, W, block);
          block.fill(0, 0, 14);
        } else {
          block.fill(0, blockIndex + 1, 14);
        }

        block[14] = msgLength >>> 29;
        block[15] = (msgLength << 3) >>> 0;

        hash(H, W, block);
      }
    }

    const result = new Uint8Array(28);
    for (let i = 0; i < 7; i++) {
      uint32ToUint8ArrayBE(H[i], result, i * 4);
    }
    return result;
  }

  async encode(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = this.sha224(data);

    return new Uint8Array(hashBuffer).toHex();
  }
}
