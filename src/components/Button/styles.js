import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => (props.cancel ? '#d32f2f' : '#fff')};
  border-radius: 4px;
  font-size: 1em;
  margin-bottom: 8px;
  border: 2px solid #333;
  padding: 6px 16px;
  :hover {
    background-color: ${(props) => (props.cancel ? '#9a0007' : '#808080')};
  }
`;

export const Label = styled.p`
  text-align: center;
  color: ${(props) => (props.cancel ? '#fff' : '#000')};
`;
