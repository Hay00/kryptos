import React, { useEffect, useState } from 'react';

import {
  ButtonsContainer,
  Container,
  Content,
  TextInput,
  Title,
} from './styles';

import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Button from '../Button';

const { utils } = require('../../utils');

export default function Modal({ handleClose, show }) {
  const [state, setState] = useState({ input: '', output: '' });

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  function _onChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function encode() {
    setState({ ...state, output: utils['base64'](state.input, true) });
  }

  function decode() {
    setState({ ...state, input: utils['base64'](state.output, false) });
  }

  return (
    <Container show={show}>
      <Content>
        <div>
          <Title>Input</Title>
          <TextInput name={'input'} value={state.input} onChange={_onChange} />
        </div>
        <ButtonsContainer>
          <Button onClick={encode} label={'Encode'}>
            <BsArrowDown size={24} />
          </Button>
          <Button onClick={decode} label={'Decode'}>
            <BsArrowUp size={24} />
          </Button>
        </ButtonsContainer>
        <div>
          <Title>Output</Title>
          <TextInput
            name={'output'}
            value={state.output}
            onChange={_onChange}
          />
          <div>
            <Button cancel={true} onClick={handleClose} label={'Close'} />
          </div>
        </div>
      </Content>
    </Container>
  );
}
