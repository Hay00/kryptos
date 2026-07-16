import { useState } from 'react';

import { Frame, ItemButton } from '@/components';

import { type Content, rawPageContents } from '@/data';

import InputModal from './InputModal/InputModal';

import { ModalProps } from './main-page.interface';
import { ModalSection } from './main-page.styles';

const DEFAULT_MODAL_STATE: ModalProps = {
  id: '',
  title: '',
  type: 'none',
  options: [],
  show: false,
};

export default function MainPage() {
  const [modal, setModal] = useState<ModalProps>(DEFAULT_MODAL_STATE);

  /**
   * Shows modal
   * @param {Object} item modal item
   */
  function handleOpen(item: Content) {
    if (item.type === 'password' && item.options) {
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
  function closeModal() {
    setModal(DEFAULT_MODAL_STATE);
  }

  return (
    <div>
      <ModalSection showModal={modal.show}>
        <ul>
          {rawPageContents.map((section, index) => (
            <li key={index + section.title}>
              <Frame title={section.title}>
                {section.content.map((item) => (
                  <ItemButton key={item.id} onClick={() => handleOpen(item)}>
                    {item.title}
                  </ItemButton>
                ))}
              </Frame>
            </li>
          ))}
        </ul>
      </ModalSection>
      <InputModal isOpen={modal.show} item={modal} onClose={closeModal} />
    </div>
  );
}
