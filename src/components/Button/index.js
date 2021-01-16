import React from 'react';

import { ButtonContainer, Label } from './styles';

export default function Button({ children, label, onClick, cancel }) {
  return (
    <ButtonContainer cancel={cancel} onClick={onClick}>
      <Label cancel={cancel}>{label}</Label>
      {children}
    </ButtonContainer>
  );
}
