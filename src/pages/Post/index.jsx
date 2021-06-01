import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { actions as postActions } from '../../resources/posts';

import Header from '../../components/Header';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';

import { Title, Body } from './styles';

const Posts = ({ getPostAction, post }) => {
  const { id } = useParams();

  useEffect(() => {
    getPostAction(
      { id },
      {
        query: {
          _embed: 'comments',
        },
      }
    );
  }, []);

  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      <CommentForm postId={id} />
      <CommentList comments={post.comments} />
    </>
  );
};

export default connect(
  (state) => ({
    post: state.posts.item,
    isFetching: state.posts.isFetching,
  }),
  {
    getPostAction: postActions.getPost,
    createPostAction: postActions.createPost,
    updatePostAction: postActions.updatePost,
    deletePostAction: postActions.deletePost,
  }
)(Posts);
