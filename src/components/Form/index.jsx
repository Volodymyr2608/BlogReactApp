import React, { useState } from 'react';

import { Wrapper, Title, Input, Textarea, BtnWrapp, Button } from './styles';

export const FormPost = ({ savePost, updatePost, onClose, post }) => {
  const [state, setState] = useState({
    title: post.title ? post.title : '',
    body: post.body ? post.body : '',
  });
  console.log('Post', post);
  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSave = (e) => {
    e.preventDefault();
    savePost(state);
    onClose();
  };
  const onUpdate = (e) => {
    e.preventDefault();
    updatePost({
      ...state,
      id: post.id,
    });
    onClose();
  };

  return (
    <>
      <Wrapper>
        <Title>{post ? 'Update post' : 'Create new post'}</Title>
        <Input
          placeholder="Title"
          name="title"
          value={state.title}
          onChange={onChange}
        />
        <Textarea
          placeholder="Description"
          name="body"
          value={state.body}
          onChange={onChange}
        />
        <BtnWrapp>
          <Button cancel onClick={onClose}>
            Cancel
          </Button>
          {post ? (
            <Button onClick={onUpdate}>Update</Button>
          ) : (
            <Button onClick={onSave}>Save</Button>
          )}
        </BtnWrapp>
      </Wrapper>
    </>
  );
};

export default FormPost;
