import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log('dataPointsValues:', dataPointsValues);
    const totalMax = Math.max(...dataPointsValues);
    console.log("Total max is : ", totalMax);

  return (
    <div className="chart w-75 container">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

