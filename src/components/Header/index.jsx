import React from 'react';
import { Container, Logo, Title, About } from './styles';

import logoImage from '../../assets/logo-512.png';

export default function Header() {
  return (
    <Container>
      <Logo src={logoImage} />
      <Title>Kryptos</Title>
      <About>Encrypt and Decrypt text using various tools</About>
    </Container>
  );
}
