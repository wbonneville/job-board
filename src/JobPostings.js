import React, { useState } from "react";
import Post from "./Post";
import styled from "styled-components";

const Container = styled.div`
  margin: 3.5%;
`;
export default function JobPostings() {
  const [postnames, setPostName] = useState([]);

  let tempName = "space ";

  for (let i = 0; i < 120; i++) {
    postnames.push(tempName + i);
  }

  var namesList = postnames.map(name => {
    return (
      <>
        <div className="col-xs-4">
          <Post name={name} />
        </div>
      </>
    );
  });

  return <Container className="row center-xs ">{namesList}</Container>;
}
