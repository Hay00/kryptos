import { ChangeEvent } from 'react';

export interface InputProps {
  label?: string;
  type?: 'text' | 'number';
  size?: 'normal' | 'large';
  placeholder?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type InputComponentProps = Omit<InputProps, 'onChange'> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
