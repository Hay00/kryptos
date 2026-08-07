import { useCallback, useMemo, useState } from 'react';

import { LibError } from '@/errors';
import { Libs } from '@/libs';

import type { ContentId, ContentType } from '@/data';
import type { AESBlockType } from '@/libs/ciphers/aes/aes.interface';
import type { CheckboxChecked } from '@/pages/Main/Modal/modal.interface';

export function useTextTransform(id: ContentId, type: ContentType) {
  const lib = useMemo(() => Libs.getInstance(id, type), [id, type]);

  const [plaintext, setPlaintext] = useState('');
  const [transformedText, setTransformedText] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const clearTextValues = useCallback(() => {
    setPlaintext('');
    setTransformedText('');
  }, []);

  const doTransform = useCallback(
    async (blockType?: AESBlockType, secretKey?: string) => {
      try {
        let result: string | undefined;

        switch (type) {
          case 'hashing':
            result = await lib.oneWayTransform().hash(plaintext);
            break;

          case 'converter':
          case 'encoder':
            result = lib.twoWayTransform().encode(plaintext);
            break;

          case 'cipher':
            if (!blockType || !secretKey) break;
            result = await lib
              .cipher()
              .encrypt(plaintext, blockType, secretKey);
            break;

          case 'misc':
            result = lib.misc().generic?.(plaintext);
            break;

          default:
            break;
        }

        setTransformedText(result || '');
      } catch (e) {
        const error = e as LibError;
        setErrorMessage(error.message);
      }
    },
    [type, lib, plaintext]
  );

  const doPlaintext = useCallback(
    async (blockType?: AESBlockType, secretKey?: string) => {
      try {
        let result: string | undefined;

        switch (type) {
          case 'converter':
          case 'encoder':
            result = lib.twoWayTransform().decode(transformedText);
            break;

          case 'cipher':
            if (!blockType || !secretKey) break;
            result = await lib
              .cipher()
              .decrypt(transformedText, blockType, secretKey);
            break;

          default:
            break;
        }

        setPlaintext(result || '');
      } catch (e) {
        const error = e as LibError;
        setErrorMessage(error.message);
      }
    },
    [type, lib, transformedText]
  );

  const doPassword = useCallback(
    async (passLength: number, checkBoxes: CheckboxChecked) => {
      try {
        const result = lib.misc().password?.(passLength, checkBoxes) || '';

        setTransformedText(result);
      } catch (e) {
        const error = e as LibError;
        setErrorMessage(error.message);
      }
    },
    [lib]
  );

  return {
    plaintext,
    transformedText,
    errorMessage,

    setPlaintext,
    setTransformedText,

    clearTextValues,
    doTransform,
    doPlaintext,
    doPassword,
  };
}
