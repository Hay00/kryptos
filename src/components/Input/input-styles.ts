import styled from 'styled-components';
import { InputComponentProps } from './input.interface';

export const InputLabel = styled.label`
  @media (min-width: 513px) {
    margin-right: 8px;
  }
  @media (max-width: 512px) {
    margin-bottom: 8px;
  }
  color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  @media (min-width: 513px) {
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

export const InputComponent = styled.input<InputComponentProps>`
  @media (max-width: 512px) {
    width: ${({ size }) => (size === 'large' ? '100%' : 'auto')};
  }
  @media (max-width: 375px) {
    width: 100%;
  }
  background-color: #d3d3d3;
  padding: 6px;
  border-radius: 4px;
  *:focus:not(.focus-visible) {
    box-shadow: none;
  }
  :focus-visible {
    box-shadow: 0 0 0 3px #63a4ff;
  }
`;
