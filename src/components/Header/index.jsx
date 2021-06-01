import React from 'react';
import { useHistory } from 'react-router-dom';

import { Wrapper, Title } from './styles';

const Header = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Title onClick={() => history.push('/')}>Blog React application</Title>
    </Wrapper>
  );
};

export default Header;
