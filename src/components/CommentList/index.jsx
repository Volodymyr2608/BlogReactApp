import React from 'react';

import Comment from '../Comment';

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </>
  );
};

export default CommentList;
