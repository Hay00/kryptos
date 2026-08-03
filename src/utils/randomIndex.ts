/**
 * Generates a random index within the range [0, length - 1].
 *
 * @param length - The upper bound (exclusive) for the random index.
 * @returns A random index between 0 (inclusive) and length (exclusive).
 */
export function getRandomIndex(length: number): number {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);

  return Math.floor((getRandomValue()[0] / 0xffffffff) * length);
}

export function getRandomValue() {
  const crypto = window.crypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);

  return crypto.getRandomValues(array);
}

export function getRandomBoolean(): boolean {
  return getRandomValue()[0] % 2 === 0;
}
