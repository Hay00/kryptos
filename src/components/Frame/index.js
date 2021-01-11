import React from 'react';

import { Container, Title, Content } from './styles';

export default function Frame({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}
