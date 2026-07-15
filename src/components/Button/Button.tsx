import { ButtonProps } from './button.interface';
import { Primary, Cancel, Label } from './button.styles';

export default function Button({
  children,
  label,
  onClick,
  cancel,
}: Readonly<ButtonProps>) {
  if (cancel) {
    return (
      <Cancel onClick={onClick}>
        <Label cancel={cancel}>{label}</Label>
        {children}
      </Cancel>
    );
  }

  return (
    <Primary onClick={onClick}>
      <Label>{label}</Label>
      {children}
    </Primary>
  );
}
