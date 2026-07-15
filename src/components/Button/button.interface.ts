export interface ButtonProps {
  label: string;
  children?: React.ReactNode;
  cancel?: boolean;
  onClick: () => void;
}
