import React from 'react';

import { CloseButton, Container, Content } from './styles';

function Modal({ handleClose, show, children }) {

  return (
    <Container show={show}>
      <Content>
        {children}
        <CloseButton type="button" onClick={handleClose}>
          Close
        </CloseButton>
      </Content>
    </Container>
  );
}

export default Modal;
