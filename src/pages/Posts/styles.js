import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AddPost = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 20px;
  color: #fff;
  font-size: 3rem;
  background-color: rgb(98, 159, 239);
  cursor: pointer;
  &:hover {
    background-color: rgb(80, 135, 206);
  }
`;
