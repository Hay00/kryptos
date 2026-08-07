import { useCallback } from 'react';

import { Button } from '@/components';
import { useTextTransform } from '@/hooks/useTextTransform';
import Actions from './Actions/Actions';

import type { ModalProps } from './modal.interface';

import {
  CancelButtonContainer,
  Content,
  ModalContent,
  ModalTitle,
  TextArea,
  Title,
} from './modal.styles';

export default function Modal({ isOpen, item, onClose }: Readonly<ModalProps>) {
  const { id, type, kind, title, options } = item;
  const inputRequired = kind !== 'password';

  const {
    plaintext,
    transformedText,
    setPlaintext,
    setTransformedText,
    clearTextValues,
    doPlaintext,
    doTransform,
    doPassword,
  } = useTextTransform(id, type);

  const handleClose = useCallback(() => {
    clearTextValues();
    onClose();
  }, [clearTextValues, onClose]);

  return (
    <Content isOpen={isOpen} onRequestClose={handleClose}>
      <ModalTitle>{title}</ModalTitle>
      {inputRequired && (
        <ModalContent>
          <Title>Plain Text</Title>
          <TextArea
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
          />
        </ModalContent>
      )}

      <Actions
        type={type}
        kind={kind}
        options={options}
        doTransform={doTransform}
        doPlaintext={doPlaintext}
        doPassword={doPassword}
      />

      <ModalContent>
        <Title>Transformed Text</Title>
        <TextArea
          value={transformedText}
          onChange={(e) => setTransformedText(e.target.value)}
        />
      </ModalContent>

      <CancelButtonContainer>
        <Button type="cancel" onClick={handleClose} label="Close" />
      </CancelButtonContainer>
    </Content>
  );
}
