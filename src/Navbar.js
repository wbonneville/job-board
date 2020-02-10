import React from "react";
import styled from "styled-components";

const JobBoardWrapper = styled.div`
  margin-top: 2%;

  & .jobboard {
    font-size: 20px;
  }

  & .postings {
    font-size: 20px;
    font-weight: 200;
  }
`;

const Jobs = styled.div`
  margin-bottom: 5%;
  margin: 2%;
  & div {
    border: 1px solid black;
    padding: 8px;
    font-size: 15px;
    font-weight: 100;
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
        <div className="col-xs-2">Electrical</div>
        <div className="col-xs-2">Plumbing</div>
        <div className="col-xs-2">Irrigation</div>
        <div className="col-xs-2">Carpentry</div>
        <div className="col-xs-2">Roofing</div>
        <div className="col-xs-2">Landscaping</div>
        <div className="col-xs-2">Construction</div>
        <div className="col-xs-2">Heating</div>
        <div className="col-xs-2">Machinist</div>
        <div className="col-xs-2">Cooling</div>
        <div className="col-xs-2">Repair</div>
        <div className="col-xs-2">Other</div>
      </Jobs>
      <div className="row">
        <br />
      </div>
    </JobBoardWrapper>
  );
}
