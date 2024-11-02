import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory';

const data = [
  { month: 1, earnings: 400 },
  { month: 2, earnings: 500 },
  { month: 3, earnings: 600 },
  { month: 4, earnings: 700 },
  { month: 5, earnings: 800 },
  { month: 6, earnings: 900 },
  { month: 7, earnings: 1000 },
];

function EarningsLineChart() {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul"]}
        label="Monate"
        style={{ axisLabel: { padding: 30 } }}
      />
      <VictoryAxis
        dependentAxis
        label="Einnahmen (€)"
        style={{ axisLabel: { padding: 40 } }}
      />
      <VictoryLine
        data={data}
        x="month"
        y="earnings"
        style={{
          data: { stroke: "#4caf50" },
          parent: { border: "1px solid #ccc" }
        }}
      />
    </VictoryChart>
  );
}

export default EarningsLineChart;
