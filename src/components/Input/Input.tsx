import { InputComponent, InputContainer, InputLabel } from './input-styles';
import { InputProps } from './input.interface';

export default function Input({
  label,
  type = 'text',
  size = 'normal',
  placeholder,
  value,
  onChange,
}: Readonly<InputProps>) {
  return (
    <InputContainer>
      {!!label && <InputLabel>{label}</InputLabel>}
      <InputComponent
        type={type}
        value={value}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
}
