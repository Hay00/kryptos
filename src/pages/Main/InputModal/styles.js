import styled from 'styled-components';

import Modal from 'react-modal';

Modal.setAppElement('#root');

export const Container = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(Modal).attrs({
  style: { overlay: { backgroundColor: '#00000088' } },
})`
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

export const ModalTitle = styled.h1`
  font-size: calc(16px + 1vw);
  color: #fff;
  margin: 12px auto;
`;

export const Title = styled.p`
  color: #fff;
  background-color: #000000;
  padding: 12px 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const ModalContent = styled.div`
  margin: 8px 0px;
`;

export const TextArea = styled.textarea`
  font-size: 0.875em;
  background-color: #484848;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  height: 150px;

  @media (min-height: 711px) and (max-height: 810px) {
    height: 100px;
  }
  @media (max-height: 710px) {
    height: auto;
  }

  padding: 16px;
  resize: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: 'auto';

  @media (min-width: 376px) and (max-width: 512px) {
    justify-content: space-between;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 512px) {
    justify-content: stretch;
  }
`;

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
  margin: 8px;
  @media (min-width: 513px) {
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  @media (min-width: 513px) {
    width: ${({ large }) => (large ? '819px' : 'auto')};
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

export const Select = styled.select`
  color: #fff;
  background-color: #484848;
  font-size: 1em;
  padding: 6px;
  border-radius: 4px;
`;
