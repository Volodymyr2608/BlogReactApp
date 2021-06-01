import React from 'react';

import { Wrapper, Title, BtnWrapp, Button } from './styles';

export const FormConfirm = ({ deletePost, onClose, id }) => {
  const onDelete = (e) => {
    e.preventDefault();
    deletePost(id);
    onClose();
  };

  return (
    <>
      <Wrapper>
        <Title>Permanently delete?</Title>
        <BtnWrapp>
          <Button cancel onClick={onClose}>
            Cancel
          </Button>
          <Button isDelete onClick={onDelete}>
            Confirm
          </Button>
        </BtnWrapp>
      </Wrapper>
    </>
  );
};

export default FormConfirm;
