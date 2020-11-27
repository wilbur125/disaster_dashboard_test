import React from "react";

function CovidDetail(props) {
  return (
    <div>
      <h3>New Cases: {props.newCases}</h3>
      <h3>New Deaths: {props.newDeaths}</h3>
    </div>
  );
}

export default CovidDetail;
