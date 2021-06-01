import React, { useState } from 'react';

import { connect } from 'react-redux';

import { actions as commentActions } from '../../resources/comments';
import { actions as postActions } from '../../resources/posts';

import { Wrapper, Textarea, BtnWrapp, Button } from './styles';

const CommentForm = ({ createCommentAction, getPostAction, postId }) => {
  const [state, setState] = useState({
    body: '',
  });

  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const createComment = (e) => {
    e.preventDefault();
    createCommentAction({
      ...state,
      postId: +postId,
    });
    getPostAction(
      { id: postId },
      {
        query: {
          _embed: 'comments',
        },
      }
    );
  };

  return (
    <>
      <Wrapper>
        <Textarea
          placeholder="Write Your comment"
          name="body"
          value={state.body}
          onChange={onChange}
        />
        <BtnWrapp>
          <Button onClick={createComment}>Add comment</Button>
        </BtnWrapp>
      </Wrapper>
    </>
  );
};

export default connect(
  (state) => ({
    comments: state.comments.items,
    isFetching: state.posts.isFetching,
  }),
  {
    createCommentAction: commentActions.createComment,
    getPostAction: postActions.getPost,
  }
)(CommentForm);
