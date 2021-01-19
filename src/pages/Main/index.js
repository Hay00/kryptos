import React, { useEffect, useState } from 'react';

import { Contents } from './styles';

import Modal from '../../components/Modal';
import Frame from '../../components/Frame';
import ItemButton from '../../components/ItemButton';

import { pageContents } from '../../data/index';

export default function MainPage() {
  const [contents, setContents] = useState([]);
  const [modalProps, setModalProps] = useState({ id: '', show: false });

  /**
   * Renderiza os conteúdos uma única vez
   */
  useEffect(() => {
    let frames = [];

    function renderItems(sectionContents) {
      let frameContent = [];
      sectionContents.forEach((item, key) => {
        frameContent.push(
          <ItemButton
            key={key}
            onClick={() => handleOpen(item.id, item.canDecode)}
          >
            {item.title}
          </ItemButton>
        );
      });
      return frameContent;
    }

    pageContents.forEach((section, key) => {
      const sectionContents = section.content;
      frames.push(
        <li key={key}>
          <Frame title={section.title}>{renderItems(sectionContents)}</Frame>
        </li>
      );
    });
    setContents(frames);
  }, []);

  function handleOpen(id, canDecode) {
    setModalProps({ id: id, canDecode: canDecode, show: true });
  }

  function handleClose() {
    setModalProps({ id: '', canDecode: false, show: false });
  }

  return (
    <div>
      <Contents showModal={modalProps.show}>
        <ul>{contents}</ul>
      </Contents>
      <Modal
        contentId={modalProps.id}
        canDecode={modalProps.canDecode}
        show={modalProps.id}
        handleClose={handleClose}
      ></Modal>
    </div>
  );
}
