import React from 'react';
import {
  Container,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  CheckboxLabel,
} from './styles';

export default function Checkbox({ checked, children, ...props }) {
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
