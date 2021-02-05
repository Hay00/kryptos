import React, { createRef, useEffect, useState } from 'react';

import Button from '../Button';
import { ButtonContainer, Container, Content } from './styles';

export default function Modal({ children, handleClose, show }) {
  const modalRef = createRef();
  const [index, setIndex] = useState(-1);
  const modalElement = document.getElementById('modalFocus');

  /**
   * Bloqueia o scroll enquanto o modal estiver aberto
   * Ao fechar reseta o indice da navegação
   */
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
    return () => {
      setIndex(-1);
    };
  }, [show]);

  /**
   * Verifica se o modal perdeu o foco através do click
   */
  useEffect(() => {
    function lostFocous(e) {
      if (!modalElement.contains(e.target)) {
        handleClose();
      }
    }

    if (show) {
      document.addEventListener('click', lostFocous);
    }
    return () => document.removeEventListener('click', lostFocous);
  }, [handleClose, modalElement, show]);

  /**
   * Key e focous listener do modal
   */
  useEffect(() => {
    const keyListenersMap = new Map([
      [27, handleClose],
      [9, handleTabKey],
    ]);

    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }

    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });

  /**
   * Responsável pela navegação usando 'TAB'
   * @param {Event} e evento
   */
  function handleTabKey(e) {
    const focusableElements = modalRef.current.querySelectorAll(
      'button, textarea'
    );

    const maxIndex = focusableElements.length - 1;
    let nextIndex = (e.shiftKey ? -1 : 1) + index;
    if (nextIndex > maxIndex) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = maxIndex;
    }

    focusableElements[nextIndex].focus();
    e.preventDefault();
    setIndex(nextIndex);
  }

  return (
    <Container show={show}>
      <Content id={'modalFocus'} ref={modalRef}>
        {children}
        <ButtonContainer>
          <Button cancel onClick={handleClose} label={'Close'} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
