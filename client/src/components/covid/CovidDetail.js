import React from "react";

function CovidDetail(props) {
  return (
    <div>
      <h2>{props.stateFullName}</h2>
      <h3>New Cases: {props.newCases}*</h3>
      <h3>New Deaths: {props.newDeaths}*</h3>
      <p>*Result of 0 at this time may be due to the state not reporting data on a daily basis or data for that date is unavailable by the CDC.</p>
    </div>
  );
}

export default CovidDetail;
