import React from "react";
import styled from "styled-components";

const JobBoardWrapper = styled.div`
  margin-top: 2%;

  .jobboard {
    font-size: 20px;
  }
`;

const Jobs = styled.div`
  margin-top: 2%;
  margin-bottom: 5%;
`;

export default function Navbar() {
  return (
    <JobBoardWrapper>
      <div className="row center-xs jobboard">Job Board</div>
      <Jobs className="row center-xs">
        <div className="col-xs-2">Electrical</div>
        <div className="col-xs-2">Plumbing</div>
        <div className="col-xs-2">Irrigation</div>
        <div className="col-xs-2">Carpentry</div>
        <div className="col-xs-2">Roofing</div>
        <div className="col-xs-2">Landscaping</div>
      </Jobs>
    </JobBoardWrapper>
  );
}
