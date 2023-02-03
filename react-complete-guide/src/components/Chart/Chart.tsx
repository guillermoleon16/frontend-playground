import "./Chart.css";
import ChartBar from "./ChartBar";

export interface ChartDataPoint {
  value: number;
  label: string;
}

interface ChartProps {
  dataPoints: ChartDataPoint[];
}

function Chart(props: ChartProps) {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
