import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { actions as postActions } from '../../resources/posts';

import PostsList from '../../components/PostsList';
import { Modal } from '../../components/Modal';
import { FormPost } from '../../components/Form';
import Header from '../../components/Header';

import { AddPost, Wrapper } from './styles';

const Posts = ({ isFetching, fetchPostsAction, createAssetAction, posts }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const addPost = () => {
    setOpenCreateModal(true);
  };
  const savePost = (value) => {
    createAssetAction(value);
  };
  useEffect(() => {
    fetchPostsAction();
  }, []);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header />
      <Wrapper>
        {posts ? <PostsList posts={posts} /> : <div>There are no posts</div>}
      </Wrapper>
      <AddPost onClick={addPost}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M496 192h-176v-176c0-8.836-7.164-16-16-16h-96c-8.836 0-16 7.164-16 16v176h-176c-8.836 0-16 7.164-16 16v96c0 8.836 7.164 16 16 16h176v176c0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16v-176h176c8.836 0 16-7.164 16-16v-96c0-8.836-7.164-16-16-16z" />
        </svg>
      </AddPost>
      <Modal open={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        <FormPost
          savePost={savePost}
          onClose={() => setOpenCreateModal(false)}
        />
      </Modal>
    </>
  );
};

export default connect(
  (state) => ({
    isFetching: state.posts.isFetching,
    posts: state.posts.items,
  }),
  {
    fetchPostsAction: postActions.fetchPosts,
    createAssetAction: postActions.createPost,
  }
)(Posts);
