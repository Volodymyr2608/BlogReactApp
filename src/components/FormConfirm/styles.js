import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 2rem;
`;

export const Button = styled.button`
  color: rgb(255, 255, 255);
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border: none;
  border-radius: 3px;
  background-color: rgb(98, 159, 239);
  cursor: pointer;
  &:hover {
    background-color: rgb(80, 135, 206);
  }
  ${(props) =>
    props.cancel &&
    css`
      background-color: #e3e3e3;
      color: #969696;
      &:hover {
        background-color: #bdbdbd;
      }
    `}
  ${(props) =>
    props.isDelete &&
    css`
      background-color: #e81313;
      color: #fff;
      &:hover {
        background-color: #c91010;
      }
    `}
`;

export const BtnWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
