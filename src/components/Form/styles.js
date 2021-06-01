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

export const Input = styled.input`
  color: rgb(32, 41, 53);
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border: 1px solid #ced4cb;
  border-radius: 3px;
  background-color: rgb(245, 245, 245);
  outline: none;
  max-width: 430px;
  width: 100%;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(134 194 97 / 25%);
  }
`;
export const Textarea = styled.textarea`
  color: rgb(32, 41, 53);
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border: 1px solid #ced4cb;
  border-radius: 3px;
  background-color: rgb(245, 245, 245);
  outline: none;
  resize: none;
  max-width: 440px;
  min-height: 200px;
  width: 100%;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(134 194 97 / 25%);
  }
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
`;
export const BtnWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
