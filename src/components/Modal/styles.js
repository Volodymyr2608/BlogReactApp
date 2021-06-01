import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

export const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: 600px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  border-radius: 5px;
  transform: translateY(0);
  opacity: 1;
`;
