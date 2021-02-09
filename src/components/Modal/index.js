import React, { createRef, useEffect, useState } from 'react';

import Button from '../Button';
import { ButtonContainer, Container, Content } from './styles';

export default function Modal({ children, handleClose, show }) {
  const modalRef = createRef();
  const [index, setIndex] = useState(-1);
  const modalElement = document.getElementById('modalFocus');

  /**
   * Block scroll when modal is open
   * Reset modal navigation index on closing modal
   */
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
    return () => {
      setIndex(-1);
    };
  }, [show]);

  /**
   * Checks if modal lost focus by mouse click
   */
  useEffect(() => {
    function lostFocus(e) {
      if (!modalElement.contains(e.target)) {
        handleClose();
      }
    }

    if (show) {
      document.addEventListener('click', lostFocus);
    }
    return () => document.removeEventListener('click', lostFocus);
  }, [handleClose, modalElement, show]);

  /**
   * Modal key and focus listener
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
   * Tab navigation
   * @param {Event} e component event
   */
  function handleTabKey(e) {
    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="number"], input[type="text"], input[type="radio"], input[type="checkbox"], select'
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
