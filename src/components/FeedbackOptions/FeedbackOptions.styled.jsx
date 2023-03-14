import styled from 'styled-components';

export const Button = styled.button`
  :not(:last-child) {
    margin-right: 20px;
  }
  background-color: #a2f493;
  width: 100px;
  padding: 8px 0;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
`;
