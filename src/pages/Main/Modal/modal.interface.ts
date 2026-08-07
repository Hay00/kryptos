import type { Content, ContentType } from '@/data';
import type { ChangeEvent } from 'react';

export interface ModalContent extends Content {
  type: ContentType;
  show: boolean;
}

export type CheckboxName = 'lowercase' | 'uppercase' | 'numbers' | 'symbols';

export type CheckboxChecked = {
  [key in CheckboxName]: boolean;
};

export interface ModalProps {
  isOpen: boolean;
  item: ModalContent;
  onClose: () => void;
}

export interface ContainerProps {
  show: boolean;
}

export interface InputProps {
  size?: 'normal' | 'large';
}

export interface ModalVariantProps {
  type: string;
  plainText: string;
  transformedText: string;
  onChangePlainText: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTransformedText?: (event: ChangeEvent<HTMLInputElement>) => void;
}
