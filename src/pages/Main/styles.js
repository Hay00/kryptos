import styled from 'styled-components';

export const Contents = styled.div`
  margin: auto;

  @media only screen and (min-width: 2000px) {
    max-width: 1840px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1999px) {
    max-width: 920px;
  }
  @media only screen and (min-width: 512px) and (max-width: 1023px) {
    max-width: 368px;
  }
  @media only screen and (max-width: 511px) {
    margin: 0px 12px;
  }
`;

export const Title = styled.p`
  color: #fff;
  background-color: #000000;
  padding: 12px 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TextContainer = styled.div`
  margin-top: 8px;
`;

export const TextInput = styled.textarea`
  font-size: 0.875em;
  background-color: #484848;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  padding: 16px;
  margin-bottom: 8px;
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
