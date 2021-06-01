import React from 'react';

import { Wrapper, Body } from './styles';

const Comment = ({ comment }) => {
  return (
    <>
      <Wrapper>
        <Body>{comment.body}</Body>
      </Wrapper>
    </>
  );
};

export default Comment;
