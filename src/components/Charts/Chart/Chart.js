import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const calculateMaxValue = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={calculateMaxValue}
            label={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
};

export default Chart;
