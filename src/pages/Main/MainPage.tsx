import { useCallback, useState } from 'react';

import { Frame, ItemButton } from '@/components';
import { type Content, rawPageContents, ContentType } from '@/data';

import Modal from './Modal/Modal';

import { ModalSection } from './main-page.styles';
import { ModalContent } from './Modal/modal.interface';

const DEFAULT_MODAL_STATE: ModalContent = {
  id: 'none',
  type: 'none',
  kind: 'none',
  title: '',
  options: [],
  show: false,
};

export default function MainPage() {
  const [modal, setModal] = useState<ModalContent>(DEFAULT_MODAL_STATE);

  const handleOpen = useCallback((item: Content, type: ContentType) => {
    setModal({ ...item, type, show: true });
  }, []);

  const handleClose = useCallback(() => {
    setModal(DEFAULT_MODAL_STATE);
  }, []);

  return (
    <div>
      <ModalSection>
        <ul>
          {rawPageContents.map((section) => (
            <li key={section.title}>
              <Frame title={section.title}>
                {section.content.map((item) => (
                  <ItemButton
                    key={item.id}
                    onClick={() => handleOpen(item, section.type)}
                  >
                    {item.title}
                  </ItemButton>
                ))}
              </Frame>
            </li>
          ))}
        </ul>
      </ModalSection>
      <Modal isOpen={modal.show} item={modal} onClose={handleClose} />
    </div>
  );
}
