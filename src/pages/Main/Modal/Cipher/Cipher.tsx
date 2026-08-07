import { useState } from 'react';

import { Button, Input } from '@/components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

import type { AESBlockType } from '@/libs/ciphers/aes/aes.interface';
import type { BaseActionsProps } from '../Actions/actions.interface';

import {
  ButtonsContainer,
  InputContainer,
  InputLabel,
  Select,
} from '../modal.styles';

export default function CipherModal({
  doTransform,
  doPlaintext,
}: Readonly<BaseActionsProps>) {
  const [secretKey, setSecretKey] = useState('');
  const [blockType, setBlockType] = useState<AESBlockType>('GCM');

  return (
    <>
      <InputContainer>
        <InputLabel>Select Mode:</InputLabel>
        <Select
          value={blockType}
          onChange={(e) => setBlockType(e.target.value as AESBlockType)}
        >
          <option value="GCM">GCM (Galois Counter Mode)</option>
          <option value="CBC">CBC (Cipher Block Chaining)</option>
          <option value="CTR">CTR (Counter Mode)</option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Input
          label="Secret Key:"
          type="text"
          size="large"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
      </InputContainer>

      <ButtonsContainer>
        <Button
          onClick={() => doTransform(blockType, secretKey)}
          label="Encrypt"
        >
          <BsArrowDown size={24} />
        </Button>
        <Button
          onClick={() => doPlaintext(blockType, secretKey)}
          label="Decrypt"
        >
          <BsArrowUp size={24} />
        </Button>
      </ButtonsContainer>
    </>
  );
}
