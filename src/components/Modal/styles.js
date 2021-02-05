import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 960px;
  }
  @media (min-width: 512px) and (max-width: 1023px) {
    width: 512px;
  }
  @media (max-width: 511px) {
    width: 80%;
  }
  position: fixed;
  background: #212121;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  padding: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  @media (max-width: 512px) {
    justify-content: center;
  }

  @media (min-width: 513px) {
    justify-content: flex-end;
  }
`;
