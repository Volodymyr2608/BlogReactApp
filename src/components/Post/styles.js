import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 12px;
  background-color: #fff;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  padding: 10px;
  margin: 0;
  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #92d36e;
      cursor: pointer;
      transition: all 0.2s;
    }
  }
`;

export const Body = styled.div`
  font-size: 1rem;
  padding: 10px;
  margin: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrappBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  cursor: pointer;
  & + div {
    margin-left: 10px;
  }
`;
