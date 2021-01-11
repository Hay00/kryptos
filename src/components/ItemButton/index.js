import React from 'react';

import { Container, Text } from './styles';

export default function ItemButton({onClick, children }) {
  return (
    <Container onClick={onClick}>
      <Text>{children}</Text>
    </Container>
  );
}
