import { AES } from './aes';
import { AESBlockType } from './aes.interface';

export default class AES256 {
  async encode(input: string, blockType: AESBlockType, password: string) {
    const aesCipher = new AES(password, { hash: 'SHA-256', blockType });

    const { encryptedData } = await aesCipher.encrypt(input);

    return encryptedData;
  }

  async decode(
    input: string,
    blockType: AESBlockType,
    password: string
  ): Promise<string> {
    const aesCipher = new AES(password, { hash: 'SHA-256', blockType });

    const decryptedData = await aesCipher.decrypt(input);

    return decryptedData;
  }
}
