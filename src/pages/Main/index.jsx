import React, { useState } from 'react';

import Frame from '../../components/Frame';
import ItemButton from '../../components/ItemButton';
import { pageContents } from '../../data/index';
import InputModal from './InputModal';
import { Contents } from './styles';

export default function MainPage() {
  const [modal, setModal] = useState({
    id: '',
    type: 'none',
    options: [],
    show: false,
  });

  /**
   * Shows modal
   * @param {Object} item modal item
   */
  function handleOpen(item) {
    if (item.type === 'password') {
      const options = Object.assign(
        {},
        ...item.options.map(({ name }) => ({ [name]: true }))
      );
      setModal({ ...item, options, show: true });
    }
    setModal({ ...item, show: true });
  }

  /**
   * Hides modal
   */
  function handleClose() {
    setModal({
      id: '',
      type: 'none',
      options: [],
      show: false,
    });
  }

  function renderItems() {
    return pageContents.map((section, key) => (
      <li key={key}>
        <Frame title={section.title}>
          {section.content.map((item) => (
            <ItemButton key={item.id} onClick={() => handleOpen(item)}>
              {item.title}
            </ItemButton>
          ))}
        </Frame>
      </li>
    ));
  }

  return (
    <div>
      <Contents showModal={modal.show}>
        <ul>{renderItems()}</ul>
        <InputModal isOpen={modal.show} item={modal} onClose={handleClose} />
      </Contents>
    </div>
  );
}
