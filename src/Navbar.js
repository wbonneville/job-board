import React from "react";
import styled from "styled-components";

const JobBoardWrapper = styled.div`
  margin-top: 2%;

  .jobboard {
    font-size: 20px;
  }
`;

const Jobs = styled.div`
  margin-bottom: 5%;
  margin: 2%;
  & div {
    border: 1px solid black;
    font-size: 15px;
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
  }
`;

export default function Navbar() {
  return (
    <JobBoardWrapper>
      <div className="row center-xs jobboard">Job Board</div>
      <Jobs className="row center-xs">
        <div className="col-xs-3">Electrical</div>
        <div className="col-xs-3">Plumbing</div>
        <div className="col-xs-3">Irrigation</div>
        <div className="col-xs-3">Carpentry</div>
        <div className="col-xs-3">Roofing</div>
        <div className="col-xs-3">Landscaping</div>
      </Jobs>
    </JobBoardWrapper>
  );
}
