import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  background: #333;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const CloseButton = styled.button`
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  font-size: 1em;
  margin: 1em;
  border: 2px solid #333;
  padding: 0.25em 1em;
  :hover {
    background-color: #808080;
  }
`;
