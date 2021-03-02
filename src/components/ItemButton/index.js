import React from 'react';

import { Container, Title } from './styles';

export default function ItemButton({ onClick, children }) {
  return (
    <Container onClick={onClick}>
      <Title>{children}</Title>
    </Container>
  );
}
