import React, { createRef, useEffect, useState } from 'react';

import {
  ButtonsContainer,
  Container,
  Content,
  TextContainer,
  TextInput,
  Title,
} from './styles';

import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Button from '../Button';

import UtilFactory from '../../utils';

export default function Modal({ contentId, canDecode, handleClose, show }) {
  const modalRef = createRef();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [index, setIndex] = useState(-1);

  const myUtil = UtilFactory.createInstance(contentId);

  /**
   * Bloqueia o scroll quando o modal estiver aberto
   * E ao fechar o modal os valores são limpos
   */
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
    return () => {
      setIndex(-1);
      setInput('');
      setOutput('');
    };
  }, [show]);

  /**
   * Key listener de navegação
   */
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });

  const keyListenersMap = new Map([
    [27, handleClose],
    [9, handleTabKey],
  ]);

  /**
   * Responsável pela navegação usando 'TAB'
   * @param {*} e event
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

    const elementToFocous = focusableElements[nextIndex];
    elementToFocous.focus();
    e.preventDefault();
    setIndex(nextIndex);
  }

  /**
   * Codifica um valor
   */
  function encode() {
    try {
      if (input.length < 1) {
        alert('Input is empty!');
      } else {
        setOutput(myUtil.encode(input));
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Decodifica um valor
   */
  function decode() {
    try {
      if (output.length < 1) {
        alert('Output is empty!');
      } else {
        setInput(myUtil.decode(output));
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <Container show={show}>
      <Content ref={modalRef}>
        <TextContainer>
          <Title>Input</Title>
          <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
        </TextContainer>
        <ButtonsContainer>
          <Button onClick={encode} label={'Encode'}>
            <BsArrowDown size={24} />
          </Button>
          {canDecode ? (
            <Button onClick={decode} label={'Decode'}>
              <BsArrowUp size={24} />
            </Button>
          ) : null}
        </ButtonsContainer>
        <TextContainer>
          <Title>Output</Title>
          <TextInput
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </TextContainer>
        <ButtonsContainer cancel={true}>
          <Button cancel onClick={handleClose} label={'Close'} />
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
