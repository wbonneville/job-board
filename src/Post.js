import React from "react";
import styled from "styled-components";

const PostBox = styled.form`
  margin-top: 3%;

  & .name {
    font-size: 18px;
    font-weight: 100;
  }
`;

const Modal = styled.div`
  height: 200px;
  background-color: #f6f6f6;
  border: 1px solid whitesmoke;
  margin-left: 1%;
  margin-right: 1%;
  box-shadow: 0px 4px 12px grey;
`;

export default function Post({ name }) {
  return (
    <PostBox>
      <Modal>
        <p className="name">{name}</p>
      </Modal>
    </PostBox>
  );
}
