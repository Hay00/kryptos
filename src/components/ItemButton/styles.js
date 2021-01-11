import styled from 'styled-components';

export const Container = styled.button`
  width: 184px;
  //text-decoration: none;
  background-color: #222629;
  :hover {
    background-color: #363b40;
  }
  border: 1px solid #424242;
  border-radius: 4px;
  padding: 16px 0px;

  @media (max-width: 512px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  text-align: center;
`;
