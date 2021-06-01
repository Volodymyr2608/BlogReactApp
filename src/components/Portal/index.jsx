import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const parent = document.getElementById('modal');

export const Portal = ({ children }) => {
  const el = document.createElement('div');
  useEffect(() => {
    parent.appendChild(el);
  }, []);
  return ReactDOM.createPortal(children, el);
};
