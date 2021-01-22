import styled from 'styled-components';

export const Container = styled.button`
  margin: 2px;
  width: 180px;
  background-color: #222629;
  cursor: pointer;
  border: 1px solid #424242;
  border-radius: 4px;
  padding: 16px 0px;

  @media (max-width: 512px) {
    width: 100%;
  }

  :hover {
    background-color: #363b40;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  text-align: center;
`;
