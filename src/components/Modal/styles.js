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
  background: #333;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0px 16px;
  padding-top: 16px;
  padding-bottom: 8px;
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
  background-color: #212121;
  padding: 12px 16px;
`;

export const TextInput = styled.textarea`
  background-color: #666;
  color: #fff;
  width: 100%;
  height: 200px;
  padding: 16px;
  margin-bottom: 8px;
  resize: none;
`;

export const ButtonsContainer = styled.div`
  @media (max-width: 512px) {
    display: flex;
    justify-content: space-between;
  }
`;
