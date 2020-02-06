import React, { useState } from "react";
import Post from "./Post";

export default function JobPostings() {
  var names = [];

  for (let i = 0; i < 100; i++) {
    names.push("job space " + i);
  }

  var namesList = names.map(function(name) {
    return (
      <div className="col-xs-4">
        <Post name={name} />
      </div>
    );
  });

  return <div className="row center-xs ">{namesList}</div>;
}
