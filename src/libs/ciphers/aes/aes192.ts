import { AES } from './aes';

import type { CipherLib } from '@/libs/libs.interface';
import type { AESBlockType } from './aes.interface';

export default class AES192 implements CipherLib {
  async encrypt(input: string, blockType: AESBlockType, password: string) {
    const aesCipher = new AES(password, { hash: 'SHA-192', blockType });

    const { encryptedData } = await aesCipher.encrypt(input);

    return encryptedData;
  }

  async decrypt(
    input: string,
    blockType: AESBlockType,
    password: string
  ): Promise<string> {
    const aesCipher = new AES(password, { hash: 'SHA-192', blockType });

    const decryptedData = await aesCipher.decrypt(input);

    return decryptedData;
  }
}
