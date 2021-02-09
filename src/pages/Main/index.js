import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Frame from '../../components/Frame';
import ItemButton from '../../components/ItemButton';
import Modal from '../../components/Modal';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import {
  ButtonsContainer,
  Contents,
  ModalContent,
  TextArea,
  Title,
  Input,
  ModalTitle,
} from './styles';

import { pageContents } from '../../data/index';

import UtilFactory from '../../utils';

export default function MainPage() {
  const [contents, setContents] = useState([]);
  const [modalProps, setModalProps] = useState({
    id: '',
    type: 'none',
    options: [],
    show: false,
  });

  // Modal input and output
  const [text, setText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [passLen, setPassLen] = useState(25);
  const [options, setOptions] = useState({});

  // Create a new util
  const myUtil = UtilFactory.createInstance(modalProps.id);

  // Store content to avoid lag render due to state change
  useEffect(() => {
    const frames = pageContents.map((section, key) => (
      <li key={key}>
        <Frame title={section.title}>
          {section.content.map((item, key) => (
            <ItemButton key={key} onClick={() => handleOpen(item)}>
              {item.title}
            </ItemButton>
          ))}
        </Frame>
      </li>
    ));
    setContents(frames);
  }, []);

  /**
   * Shows modal
   * @param {Object} item modal item
   */
  function handleOpen(item) {
    if (item.type === 'password') {
      setOptions(
        Object.assign({}, ...item.options.map(({ name }) => ({ [name]: true })))
      );
    }
    setModalProps({ ...item, show: true });
  }

  /**
   * Hides modal
   */
  function handleClose() {
    setModalProps({
      id: '',
      type: 'none',
      options: [],
      show: false,
    });
    setText('');
    setEncodedText('');
  }

  function createPassword() {
    try {
      if (passLen.length < 1) {
        throw new Error('Password length input is empty!');
      }
      setEncodedText(myUtil.encode(passLen, options));
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Encode value from `text` input
   */
  function encode() {
    try {
      if (text.length < 1) {
        alert('Input is empty!');
      } else {
        setEncodedText(myUtil.encode(text));
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Decode value from `encodedText` input
   */
  function decode() {
    try {
      if (encodedText.length < 1) {
        alert('Output is empty!');
      } else {
        setText(myUtil.decode(encodedText));
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
    setOptions({ ...options, [name]: event.target.checked });
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
            <div style={{ margin: '8px' }}>
              <label style={{ color: '#fff', marginRight: '8px' }}>
                Password Length:
              </label>
              <Input
                value={passLen}
                onChange={(e) => setPassLen(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex-inline', margin: '8px 0px' }}>
              {modalProps.options.map((item, key) => {
                return (
                  <Checkbox
                    key={key}
                    checked={options[item.name]}
                    onChange={(e) => optionChange(item.name, e)}
                  >
                    {item.title}
                  </Checkbox>
                );
              })}
            </div>
          </ModalContent>
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
    const buttonLabels = {
      hash: 'Create Hash',
      password: 'Create Password',
      transform: 'Transform Text',
    };
    const buttonOnClick = {
      hash: encode,
      password: createPassword,
      transform: encode,
    };
    switch (type) {
      case 'encoder':
        return (
          <ButtonsContainer>
            <Button onClick={encode} label={'Encode'}>
              <BsArrowDown size={24} />
            </Button>
            <Button onClick={decode} label={'Decode'}>
              <BsArrowUp size={24} />
            </Button>
          </ButtonsContainer>
        );

      default:
        return (
          <ButtonsContainer>
            <Button
              onClick={buttonOnClick[type]}
              label={buttonLabels[type]}
            ></Button>
          </ButtonsContainer>
        );
    }
  }

  return (
    <div>
      <Contents showModal={modalProps.show}>
        <ul>{contents}</ul>
      </Contents>
      <Modal show={modalProps.show} handleClose={handleClose}>
        <ModalTitle>{modalProps.title}</ModalTitle>
        <div>{modalInput(modalProps.type)}</div>
        <div>{modalButtons(modalProps.type)}</div>
        <ModalContent>
          <Title>Encoded Text</Title>
          <TextArea
            value={encodedText}
            onChange={(e) => setEncodedText(e.target.value)}
          />
        </ModalContent>
      </Modal>
    </div>
  );
}
