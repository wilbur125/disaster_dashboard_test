import React from "react";
import { Chart } from "react-google-charts";

function CovidChartCases(props) {

    const options = {
      title: "New Cases of COVID-19 as Reported by State",
      hAxis: { title: "Date", viewWindow: { min:0 } },
      vAxis: { title: "Most Recent New Total", viewWindow: { min:0 } },
      legend: "none"
    };
    const data = [
      ["Date", "Most Recent New Total"],
      ["One", parseInt(props.newCasesOne)],
      ["Two", parseInt(props.newCasesTwo)],
      ["Three", parseInt(props.newCasesThree)],
      ["Four", parseInt(props.newCasesFour)],
      ["Five", parseInt(props.newCasesFive)],
    ];

    for (let i = 1 ; i < data.length; i++) {
      // set the date
      const d = new Date();
      d.setDate(d.getDate()-i);
      const hLabel = d.toDateString();

      // update variable in array
      data[data.length - i][0] = hLabel;
    }

  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width="100%"
      height="500px"
      legendToggle
    />
  );
};

export default CovidChartCases;
