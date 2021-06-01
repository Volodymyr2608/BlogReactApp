import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AddPost = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #92d36e;
  padding: 20px;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    background-color: #86c261;
  }
`;
