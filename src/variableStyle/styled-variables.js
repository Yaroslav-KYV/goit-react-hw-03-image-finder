import styled from 'styled-components';

const RoundBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  transition: background-color 200ms linear, opacity 200ms linear;

  :hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export default { RoundBtn };
