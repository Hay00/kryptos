import { EncryptedData } from '../ciphers.interface';
import {
  AesCipherOptions,
  BlockSizeMapType,
  KeyLengthMapType,
} from './aes.interface';

const KEY_LENGTH_MAP: KeyLengthMapType = {
  'SHA-128': 128,
  'SHA-192': 192,
  'SHA-256': 256,
};

const SALT_SIZE = 16;

const IV_SIZE_MAP: BlockSizeMapType = {
  CBC: 16,
  CTR: 16,
  GCM: 12,
};

const DEFAULT_OPTIONS: AesCipherOptions = {
  iterations: 100000,
  keyLength: 256,
  hash: 'SHA-256',
  blockType: 'GCM',
};

export class AES {
  private readonly password: string;
  private readonly options: AesCipherOptions;

  /**
   * @param password - The password used to derive the encryption key.
   * @param options - Optional configuration.
   */
  constructor(password: string, options?: Partial<AesCipherOptions>) {
    this.password = password;
    this.options = { ...DEFAULT_OPTIONS, ...options };

    this.options.keyLength = KEY_LENGTH_MAP[this.options.hash];
  }

  async encrypt(input: string): Promise<EncryptedData> {
    const salt = crypto.getRandomValues(new Uint8Array(SALT_SIZE));

    const ivSize = IV_SIZE_MAP[this.options.blockType];
    const iv = crypto.getRandomValues(new Uint8Array(ivSize));
    const key = await this.deriveKey(salt);

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const encrypted = await this.encryptData(data, key, iv);

    const combined = new Uint8Array(
      salt.length + iv.length + encrypted.byteLength
    );

    combined.set(salt, 0);
    combined.set(iv, salt.length);
    combined.set(new Uint8Array(encrypted), salt.length + iv.length);

    const encryptedData = this.arrayBufferToBase64(combined);
    return { encryptedData, iv, salt };
  }

  async decrypt(input: string): Promise<string> {
    const combined = this.base64ToArrayBuffer(input);
    const combinedBytes = new Uint8Array(combined);
    const ivEndBytePos = SALT_SIZE + IV_SIZE_MAP[this.options.blockType];

    const salt = combinedBytes.slice(0, SALT_SIZE);
    const iv = combinedBytes.slice(SALT_SIZE, ivEndBytePos);

    const key = await this.deriveKey(salt);

    const encrypted = combinedBytes.slice(ivEndBytePos); // rest is cipher text + tag

    try {
      const decrypted = await this.decryptData(encrypted, key, iv);

      const decoder = new TextDecoder();
      return decoder.decode(decrypted);
    } catch (err) {
      console.error('Error decoding Cipher Text:', err);
      throw err;
    }
  }

  // ------------------- Private helpers -------------------

  private async encryptData(
    data: Uint8Array<ArrayBuffer>,
    key: CryptoKey,
    iv: Uint8Array<ArrayBuffer>
  ) {
    const name = `AES-${this.options.blockType}`;

    if (this.options.blockType === 'CTR') {
      return window.crypto.subtle.encrypt(
        {
          name,
          counter: iv,
          length: 64,
        },
        key,
        data
      );
    }

    // Default counter type
    return crypto.subtle.encrypt({ name, iv }, key, data);
  }

  private async decryptData(
    cipherText: Uint8Array<ArrayBuffer>,
    key: CryptoKey,
    iv: Uint8Array<ArrayBuffer>
  ): Promise<ArrayBuffer> {
    const name = `AES-${this.options.blockType}`;

    if (this.options.blockType === 'CTR') {
      return window.crypto.subtle.decrypt(
        { name, counter: iv, length: 64 },
        key,
        cipherText
      );
    }

    // Default counter type
    return crypto.subtle.decrypt({ name, iv }, key, cipherText);
  }

  private async deriveKey(salt: Uint8Array<ArrayBuffer>): Promise<CryptoKey> {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(this.password),
      'PBKDF2',
      false,
      ['deriveBits', 'deriveKey']
    );

    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: this.options.iterations,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: `AES-${this.options.blockType}`, length: this.options.keyLength },
      true,
      ['encrypt', 'decrypt']
    );
  }

  private arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
    const bytes =
      buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    let binary = '';
    for (const element of bytes) {
      binary += String.fromCodePoint(element);
    }
    return btoa(binary);
  }

  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.codePointAt(i) || 0;
    }
    return bytes.buffer;
  }
}
