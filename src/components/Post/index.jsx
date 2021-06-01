import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions as postActions } from '../../resources/posts';

import { Modal } from '../Modal';
import { FormPost } from '../Form';
import { FormConfirm } from '../FormConfirm';

import { Wrapper, Title, Body, Header, WrappBtn, Icon } from './styles';

const Post = ({
  post,
  fetchPostsAction,
  updatePostAction,
  deletePostAction,
}) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const updatePost = (changedPost) => {
    updatePostAction(changedPost);
  };

  const deletePost = (id) => {
    deletePostAction(id);
    fetchPostsAction();
  };
  return (
    <>
      <Wrapper>
        <Header>
          <Title>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </Title>
          <WrappBtn>
            <Icon onClick={() => setOpenUpdateModal(true)}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                fill="orange"
              >
                <path d="M432 0c44.182 0 80 35.817 80 80 0 18.010-5.955 34.629-16 48l-32 32-112-112 32-32c13.371-10.045 29.989-16 48-16zM32 368l-32 144 144-32 296-296-112-112-296 296zM357.789 181.789l-224 224-27.578-27.578 224-224 27.578 27.578z" />
              </svg>
            </Icon>
            <Icon onClick={() => setOpenRemoveModal(true)}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                fill="red"
              >
                <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32v-320h-352zM160 448h-32v-224h32v224zM224 448h-32v-224h32v224zM288 448h-32v-224h32v224zM352 448h-32v-224h32v224z" />
                <path d="M424 64h-104v-40c0-13.2-10.8-24-24-24h-112c-13.2 0-24 10.8-24 24v40h-104c-13.2 0-24 10.8-24 24v40h416v-40c0-13.2-10.8-24-24-24zM288 64h-96v-31.599h96v31.599z" />
              </svg>
            </Icon>
          </WrappBtn>
        </Header>
        <Body>{post.body}</Body>
      </Wrapper>
      <Modal open={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <FormPost
          post={post}
          updatePost={updatePost}
          onClose={() => setOpenUpdateModal(false)}
        />
      </Modal>
      <Modal open={openRemoveModal} onClose={() => setOpenRemoveModal(false)}>
        <FormConfirm
          id={post.id}
          deletePost={deletePost}
          onClose={() => setOpenRemoveModal(false)}
        />
      </Modal>
    </>
  );
};

export default connect(
  (state) => ({
    isFetching: state.posts.isFetching,
  }),
  {
    fetchPostsAction: postActions.fetchPosts,
    updatePostAction: postActions.updatePost,
    deletePostAction: postActions.deletePost,
  }
)(Post);
