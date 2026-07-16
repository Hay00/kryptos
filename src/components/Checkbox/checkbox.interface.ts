import { ChangeEvent } from 'react';

export interface CheckboxProps {
  checked: boolean;
  children: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
