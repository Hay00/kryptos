import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-size: 1em;
  margin-bottom: 8px;
  padding: 6px 16px;
  margin: 8px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  @media (max-width: 375px) {
    justify-content: center;
    width: 100%;
  }
`;

export const Primary = styled(Button)`
  background-color: #e0e0e0;
  :hover,
  :focus {
    background-color: #aeaeae;
  }
`;

export const Cancel = styled(Button)`
  background-color: #d32f2f;
  :hover,
  :focus {
    background-color: #9a0007;
  }
`;

export const Label = styled.span`
  text-align: center;
  color: ${(props) => (props.cancel ? '#fff' : '#000')};
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
`;
