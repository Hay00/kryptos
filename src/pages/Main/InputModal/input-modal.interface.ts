import { ModalProps } from '../main-page.interface';

export type CheckboxName = 'lowercase' | 'uppercase' | 'numbers' | 'symbols';

export type LabelsName = {
  [key in ModalProps['type']]: string;
};

export type FieldCanDecode = {
  [key in ModalProps['type']]: boolean;
};

export interface InterfaceInputModal {
  isOpen: boolean;
  item: ModalProps;
  onClose: () => void;
}

export interface ContainerProps {
  show: boolean;
}

export interface InputProps {
  size?: 'normal' | 'large';
}
