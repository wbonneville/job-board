import React, { useState } from "react";
import Post from "./Post";
import styled from "styled-components";

const Container = styled.div`
  margin: 2%;
`;
export default function JobPostings() {
  const [postnames, setPostName] = useState([]);

  for (let i = 0; i < 120; i++) {
    postnames.push("job space " + i);
  }

  var namesList = postnames.map(function(name) {
    return (
      <>
        <div className="col-xs-3">
          <Post name={name} />
        </div>
      </>
    );
  });

  return <Container className="row center-xs ">{namesList}</Container>;
}
