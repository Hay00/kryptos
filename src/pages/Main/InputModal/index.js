import React, { useState } from 'react';

import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import {
  ButtonsContainer,
  CancelButtonContainer,
  Content,
  Input,
  InputContainer,
  InputLabel,
  ModalContent,
  ModalTitle,
  Select,
  TextArea,
  Title,
} from './styles';
import UtilFactory from '../../../utils';

const initialOptions = {
  hasLowercase: false,
  hasUppercase: false,
  hasNumbers: false,
  hasSymbols: false,
};

export default function InputModal({ isOpen, item, onClose }) {
  const { id, type, title, options } = item;

  // Modal input and output
  const [text, setText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [passLength, setPasswordLength] = useState(25);
  const [blockType, setBlockType] = useState('cbc');
  const [checkBoxes, setOptions] = useState(initialOptions);

  // Create a new util for encoding and decoding input
  const myUtil = UtilFactory.createInstance(id);

  /**
   * Validate user input `text` and properly encode for its type
   */
  function encode() {
    try {
      if (passLength > 0 || text.length > 0) {
        if (type === 'password') {
          setEncodedText(myUtil.encode(passLength, checkBoxes));
        } else if (type === 'block') {
          setEncodedText(myUtil.encode(text, blockType, secretKey));
        } else {
          setEncodedText(myUtil.encode(text));
        }
      } else {
        const errMsg =
          type === 'password'
            ? 'Password length input is empty!'
            : 'Input is empty!';
        throw new Error(errMsg);
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Validate user input `encodedText` and decode
   */
  function decode() {
    try {
      if (encodedText.length < 1) {
        alert('Output is empty!');
      } else {
        setText(myUtil.decode(encodedText, blockType, secretKey));
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Updates selected options
   * @param {String} name option to update
   * @param {Event} event component event
   */
  function optionChange(name, event) {
    setOptions({ ...checkBoxes, [name]: event.target.checked });
  }

  /**
   * Closes modal and clear local states
   */
  function handleClose() {
    setText('');
    setEncodedText('');
    setOptions(initialOptions);
    setPasswordLength(25);
    onClose();
  }

  /**
   * Renders modal input according to item type
   *
   * * Render Function
   * @param {String} type item type
   */
  function modalInput(type) {
    switch (type) {
      case 'password':
        return (
          <ModalContent>
            <InputContainer>
              <InputLabel>Password Length:</InputLabel>
              <Input
                type="number"
                value={passLength}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </InputContainer>
            <div style={{ marginTop: '12px' }}>
              {options.map((item, key) => (
                <Checkbox
                  key={key}
                  checked={checkBoxes[item.name]}
                  onChange={(e) => optionChange(item.name, e)}
                >
                  {item.title}
                </Checkbox>
              ))}
            </div>
          </ModalContent>
        );
      case 'block':
        return (
          <>
            <ModalContent>
              <Title>Text</Title>
              <TextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </ModalContent>
            <InputContainer>
              <InputLabel>Secret Key:</InputLabel>
              <Input
                type="text"
                large
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Select Mode:</InputLabel>
              <Select
                value={blockType}
                onChange={({ target }) => setBlockType(target.value)}
              >
                <option value="cbc">CBC (Cipher Block Chaining)</option>
                <option value="ecb">ECB (Electronic CodeBook)</option>
                <option value="ctr">CTR (Counter)</option>
              </Select>
            </InputContainer>
          </>
        );

      default:
        return (
          <ModalContent>
            <Title>Text</Title>
            <TextArea value={text} onChange={(e) => setText(e.target.value)} />
          </ModalContent>
        );
    }
  }

  /**
   * Renders modal buttons according to item type
   *
   * * Render Function
   * @param {String} type item type
   */
  function modalButtons(type) {
    const encodeLabels = {
      encoder: 'Encode',
      hash: 'Create Hash',
      block: 'Encrypt',
      password: 'Create Password',
      transform: 'Transform Text',
    };

    const canDecode = {
      encoder: true,
      hash: false,
      block: true,
      password: false,
      transform: false,
    };

    return (
      <ButtonsContainer>
        <Button onClick={encode} label={encodeLabels[type]}>
          {canDecode[type] && <BsArrowDown size={24} />}
        </Button>
        {canDecode[type] && (
          <Button onClick={decode} label="Decode">
            <BsArrowUp size={24} />
          </Button>
        )}
      </ButtonsContainer>
    );
  }

  return (
    <Content isOpen={isOpen} onRequestClose={handleClose}>
      <ModalTitle>{title}</ModalTitle>
      {modalInput(type)}
      {modalButtons(type)}
      <ModalContent>
        <Title>Encoded Text</Title>
        <TextArea
          value={encodedText}
          onChange={(e) => setEncodedText(e.target.value)}
        />
      </ModalContent>
      <CancelButtonContainer>
        <Button cancel onClick={handleClose} label={'Close'} />
      </CancelButtonContainer>
    </Content>
  );
}
