import React from "react";
import styled from "styled-components";

const post = styled.input`
  margin-top: 3%;
`;

export default function Post({ name }) {
  return (
    <post>
      <p>{name}</p>
    </post>
  );
}
