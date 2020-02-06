import React from "react";
import styled from "styled-components";

const post = styled.form`
  margin-top: 3%;
`;

const Modal = styled.div`
  height: 200px;
  background-color: #f6f6f6;
  border: 1px solid whitesmoke;
`;

export default function Post({ name }) {
  return (
    <post>
      <p>{name}</p>
      <Modal />
    </post>
  );
}
