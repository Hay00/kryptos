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