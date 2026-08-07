import { ButtonProps } from './button.interface';
import { PrimaryButton, CancelButton, Label } from './button.styles';

export default function Button({
  children,
  label,
  onClick,
  type = 'primary',
}: Readonly<ButtonProps>) {
  if (type === 'cancel') {
    return (
      <CancelButton onClick={onClick}>
        <Label type={type}>{label}</Label>
        {children}
      </CancelButton>
    );
  }

  return (
    <PrimaryButton onClick={onClick}>
      <Label type={type}>{label}</Label>
      {children}
    </PrimaryButton>
  );
}
