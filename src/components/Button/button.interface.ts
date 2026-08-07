export interface ButtonProps {
  label: string;
  children?: React.ReactNode;
  type?: 'primary' | 'cancel';
  onClick: () => void;
}
