import styled from 'styled-components';

export const Contents = styled.div`
  margin: auto;
  @media (min-width: 1024px) {
    max-width: 920px;
  }
  @media (min-width: 512px) and (max-width: 1023px) {
    max-width: 368px;
  }
  @media (max-width: 511px) {
    margin: 0px 12px;
  }
`;

export const TextInput = styled.textarea`
  background-color: #666;
  width: 100%;
  height: 200px;
`;
