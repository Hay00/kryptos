import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import Frame from '../../components/Frame';
import ItemButton from '../../components/ItemButton';
import Modal from '../../components/Modal';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import UtilFactory from '../../utils';
import {
  ButtonsContainer,
  Contents,
  TextContainer,
  TextInput,
  Title,
} from './styles';
import { pageContents } from '../../data/index';

export default function MainPage() {
  const [contents, setContents] = useState([]);
  const [modalProps, setModalProps] = useState({ id: '', show: false });

  const [toEncode, setToEncode] = useState('');
  const [toDecode, setToDecode] = useState('');

  // Instancia uma util
  const myUtil = UtilFactory.createInstance(modalProps.id);

  // Renderiza os conteúdos uma única vez
  useEffect(() => {
    const frames = pageContents.map((section, key) => (
      <li key={key}>
        <Frame title={section.title}>
          {section.content.map((item, key) => (
            <ItemButton
              key={key}
              onClick={() => handleOpen(item.id, item.canDecode)}
            >
              {item.title}
            </ItemButton>
          ))}
        </Frame>
      </li>
    ));
    setContents(frames);
  }, []);

  /**
   * Mostra o modal
   * @param {String} id id do componente que irá aparecer no modal
   * @param {Boolean} canDecode o componente pode decodificar?
   */
  function handleOpen(id, canDecode) {
    setModalProps({ id: id, canDecode: canDecode, show: true });
  }

  /**
   * Esconde o modal
   */
  function handleClose() {
    setModalProps({ id: '', canDecode: false, show: false });
    setToEncode('');
    setToDecode('');
  }

  /**
   * Codifica um valor do `toEncode`
   */
  function encode() {
    try {
      if (toEncode.length < 1) {
        alert('Input is empty!');
      } else {
        setToDecode(myUtil.encode(toEncode));
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Decodifica um valor do `toDecode`
   */
  function decode() {
    try {
      if (toDecode.length < 1) {
        alert('Output is empty!');
      } else {
        setToEncode(myUtil.decode(toDecode));
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Contents showModal={modalProps.show}>
        <ul>{contents}</ul>
      </Contents>
      <Modal show={modalProps.show} handleClose={handleClose}>
        <TextContainer>
          <Title>Input</Title>
          <TextInput
            value={toEncode}
            onChange={(e) => setToEncode(e.target.value)}
          />
        </TextContainer>
        <ButtonsContainer>
          <Button onClick={encode} label={'Encode'}>
            <BsArrowDown size={24} />
          </Button>
          {modalProps.canDecode && (
            <Button onClick={decode} label={'Decode'}>
              <BsArrowUp size={24} />
            </Button>
          )}
        </ButtonsContainer>
        <TextContainer>
          <Title>Output</Title>
          <TextInput
            value={toDecode}
            onChange={(e) => setToDecode(e.target.value)}
          />
        </TextContainer>
      </Modal>
    </div>
  );
}
