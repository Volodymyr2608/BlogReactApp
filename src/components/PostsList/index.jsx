import React from 'react';

import Post from '../Post';

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Posts;
