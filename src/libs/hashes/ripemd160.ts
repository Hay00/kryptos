// Source -> https://gist.github.com/cmdruid/aaff38ec96c0741d40d279f791b50862

import type { OneWayTransformLib } from '../libs.interface';

// Message schedule indexes for the left path.
const ML: readonly bigint[] = [
  0n,
  1n,
  2n,
  3n,
  4n,
  5n,
  6n,
  7n,
  8n,
  9n,
  10n,
  11n,
  12n,
  13n,
  14n,
  15n,
  7n,
  4n,
  13n,
  1n,
  10n,
  6n,
  15n,
  3n,
  12n,
  0n,
  9n,
  5n,
  2n,
  14n,
  11n,
  8n,
  3n,
  10n,
  14n,
  4n,
  9n,
  15n,
  8n,
  1n,
  2n,
  7n,
  0n,
  6n,
  13n,
  11n,
  5n,
  12n,
  1n,
  9n,
  11n,
  10n,
  0n,
  8n,
  12n,
  4n,
  13n,
  3n,
  7n,
  15n,
  14n,
  5n,
  6n,
  2n,
  4n,
  0n,
  5n,
  9n,
  7n,
  12n,
  2n,
  10n,
  14n,
  1n,
  3n,
  8n,
  11n,
  6n,
  15n,
  13n,
];

// Message schedule indexes for the right path.
const MR: readonly bigint[] = [
  5n,
  14n,
  7n,
  0n,
  9n,
  2n,
  11n,
  4n,
  13n,
  6n,
  15n,
  8n,
  1n,
  10n,
  3n,
  12n,
  6n,
  11n,
  3n,
  7n,
  0n,
  13n,
  5n,
  10n,
  14n,
  15n,
  8n,
  12n,
  4n,
  9n,
  1n,
  2n,
  15n,
  5n,
  1n,
  3n,
  7n,
  14n,
  6n,
  9n,
  11n,
  8n,
  12n,
  2n,
  10n,
  0n,
  4n,
  13n,
  8n,
  6n,
  4n,
  1n,
  3n,
  11n,
  15n,
  0n,
  5n,
  12n,
  2n,
  13n,
  9n,
  7n,
  10n,
  14n,
  12n,
  15n,
  10n,
  4n,
  1n,
  5n,
  8n,
  7n,
  6n,
  2n,
  13n,
  14n,
  0n,
  3n,
  9n,
  11n,
];

// Rotation counts for the left path.
const RL: readonly bigint[] = [
  11n,
  14n,
  15n,
  12n,
  5n,
  8n,
  7n,
  9n,
  11n,
  13n,
  14n,
  15n,
  6n,
  7n,
  9n,
  8n,
  7n,
  6n,
  8n,
  13n,
  11n,
  9n,
  7n,
  15n,
  7n,
  12n,
  15n,
  9n,
  11n,
  7n,
  13n,
  12n,
  11n,
  13n,
  6n,
  7n,
  14n,
  9n,
  13n,
  15n,
  14n,
  8n,
  13n,
  6n,
  5n,
  12n,
  7n,
  5n,
  11n,
  12n,
  14n,
  15n,
  14n,
  15n,
  9n,
  8n,
  9n,
  14n,
  5n,
  6n,
  8n,
  6n,
  5n,
  12n,
  9n,
  15n,
  5n,
  11n,
  6n,
  8n,
  13n,
  12n,
  5n,
  12n,
  13n,
  14n,
  11n,
  8n,
  5n,
  6n,
];

// Rotation counts for the right path.
const RR: readonly bigint[] = [
  8n,
  9n,
  9n,
  11n,
  13n,
  15n,
  15n,
  5n,
  7n,
  7n,
  8n,
  11n,
  14n,
  14n,
  12n,
  6n,
  9n,
  13n,
  15n,
  7n,
  12n,
  8n,
  9n,
  11n,
  7n,
  7n,
  12n,
  7n,
  6n,
  15n,
  13n,
  11n,
  9n,
  7n,
  15n,
  11n,
  8n,
  6n,
  6n,
  14n,
  12n,
  13n,
  5n,
  14n,
  13n,
  13n,
  7n,
  5n,
  15n,
  5n,
  8n,
  11n,
  14n,
  14n,
  6n,
  14n,
  6n,
  9n,
  12n,
  9n,
  12n,
  5n,
  15n,
  8n,
  8n,
  5n,
  12n,
  9n,
  12n,
  5n,
  14n,
  6n,
  8n,
  13n,
  6n,
  5n,
  15n,
  13n,
  11n,
  11n,
];

// K constants for the left path.
const KL: readonly bigint[] = [
  0n,
  0x5a827999n,
  0x6ed9eba1n,
  0x8f1bbcdcn,
  0xa953fd4en,
];

// K constants for the right path.
const KR: readonly bigint[] = [
  0x50a28be6n,
  0x5c4dd124n,
  0x6d703ef3n,
  0x7a6d76e9n,
  0n,
];

/** Convert a little‑endian byte array (Uint8Array) to a BigInt. */
function bytesToBigInt(bytes: Uint8Array): bigint {
  let num = 0n;
  for (let i = bytes.length - 1; i >= 0; i--) {
    num = num * 256n + BigInt(bytes[i]);
  }
  return num;
}

/** Convert a BigInt to a little‑endian byte array (number[]). */
function bigIntToBytes(num: bigint, size?: number): number[] {
  const bytes: bigint[] = [];
  while (num > 0) {
    const byte = num & 0xffn;
    bytes.push(byte);
    num = (num - byte) / 256n;
  }
  let result = bytes.map(Number);
  if (size) {
    const uint8 = new Uint8Array(size);
    uint8.set(result);
    result = [...uint8];
  }
  return result;
}

/**
 * The five selection functions f1 … f5.
 * @param i – round group (0 … 4) as BigInt.
 */
function fi(x: bigint, y: bigint, z: bigint, i: bigint): bigint {
  switch (true) {
    case i === 0n:
      return x ^ y ^ z;
    case i === 1n:
      return (x & y) | (~x & z);
    case i === 2n:
      return (x | ~y) ^ z;
    case i === 3n:
      return (x & z) | (y & ~z);
    case i === 4n:
      return x ^ (y | ~z);
    default:
      throw new TypeError('Unknown I value: ' + i);
  }
}

/** Rotate the bottom 32 bits of `x` left by `i` bits. */
function rol(x: bigint, i: bigint): bigint {
  return ((x << i) | ((x & 0xffffffffn) >> (32n - i))) & 0xffffffffn;
}

/**
 * Compress a 64‑byte block into the 5‑word state.
 * @returns new state as a tuple of 5 BigInts.
 */
function compress(
  h0: bigint,
  h1: bigint,
  h2: bigint,
  h3: bigint,
  h4: bigint,
  block: Uint8Array
): [bigint, bigint, bigint, bigint, bigint] {
  // Expand the 64‑byte block into 16 32‑bit words (little‑endian)
  const x: bigint[] = [];
  for (let i = 0; i < 16; i++) {
    const slice = block.slice(4 * i, 4 * (i + 1));
    x.push(bytesToBigInt(slice));
  }

  // Initialize left and right sides of the state
  let al = h0,
    bl = h1,
    cl = h2,
    dl = h3,
    el = h4;

  let ar = h0,
    br = h1,
    cr = h2,
    dr = h3,
    er = h4;

  // 80 rounds
  for (let i = 0; i < 80; i++) {
    const rnd = BigInt(i) >> 4n; // 0 … 4

    // --- Left side ---
    const toRotateLeft =
      al + fi(bl, cl, dl, rnd) + x[Number(ML[i])] + KL[Number(rnd)];

    al = rol(toRotateLeft, RL[i]) + el;

    const elt = el;
    el = dl;
    dl = rol(cl, 10n);
    cl = bl;
    bl = al;
    al = elt;

    // --- Right side ---

    const toRotateRight =
      ar + fi(br, cr, dr, 4n - rnd) + x[Number(MR[i])] + KR[Number(rnd)];

    ar = rol(toRotateRight, RR[i]) + er;

    const ert = er;
    er = dr;
    dr = rol(cr, 10n);
    cr = br;
    br = ar;
    ar = ert;
  }

  // Compose the final state
  return [h1 + cl + dr, h2 + dl + er, h3 + el + ar, h4 + al + br, h0 + bl + cr];
}

/**
 * Compute the RIPEMD‑160 hash of an arbitrary byte array.
 * @returns a 20‑byte Uint8Array.
 */
export function hash160(data: Uint8Array): Uint8Array {
  // Initial state
  let state: [bigint, bigint, bigint, bigint, bigint] = [
    0x67452301n,
    0xefcdab89n,
    0x98badcfen,
    0x10325476n,
    0xc3d2e1f0n,
  ];

  // Process full 64‑byte blocks
  for (let b = 0; b < data.length >> 6; b++) {
    const block = data.slice(64 * b, 64 * (b + 1));
    state = compress(state[0], state[1], state[2], state[3], state[4], block);
  }

  // Construct final blocks (with padding and size).
  const remainder = data.length & ~63; // largest multiple of 64 <= length
  const remainderBytes = data.slice(remainder); // remaining bytes (0–63)
  const zfillLength = (119 - data.length) & 63; // number of zero bytes after 0x80
  const pad = [0x80, ...new Array(zfillLength).fill(0)];
  const lengthBytes = bigIntToBytes(BigInt(8 * data.length), 8);

  // Build final block as a Uint8Array so that slicing yields Uint8Array.
  const fin = new Uint8Array([...remainderBytes, ...pad, ...lengthBytes]);

  // Process the final block(s)
  for (let i = 0; i < fin.length >> 6; i++) {
    const block = fin.slice(64 * i, 64 * (i + 1));
    state = compress(state[0], state[1], state[2], state[3], state[4], block);
  }

  // Output
  const result: number[] = [];
  for (const word of state) {
    const num = word & 0xffffffffn;
    result.push(...bigIntToBytes(num, 4));
  }

  return Uint8Array.from(result);
}

export default class RipeMd160 implements OneWayTransformLib {
  async hash(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = hash160(data);

    return new Uint8Array(hashBuffer).toHex();
  }
}
