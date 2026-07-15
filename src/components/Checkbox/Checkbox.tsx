import { CheckboxProps } from './checkbox.interface';
import {
  CheckboxLabel,
  Container,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './checkbox.styles';

export default function Checkbox({
  checked,
  children,
  ...props
}: Readonly<CheckboxProps>) {
  return (
    <Container>
      <div style={{ height: '20px' }}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </div>
      <div>
        <CheckboxLabel>{children}</CheckboxLabel>
      </div>
    </Container>
  );
}
