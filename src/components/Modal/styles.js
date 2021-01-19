import styled from 'styled-components';

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

export const Container = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.p`
  color: #fff;
  background-color: #000000;
  padding: 12px 16px;
`;

export const TextContainer = styled.div`
  margin-top: 8px;
`;

export const TextInput = styled.textarea`
  font-size: 0.875em;;
  background-color: #484848;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  padding: 16px;
  margin-bottom: 8px;
  resize: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.cancel ? 'flex-end' : 'auto')};

  @media (min-width: 376px) and (max-width: 512px) {
    justify-content: space-between;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
