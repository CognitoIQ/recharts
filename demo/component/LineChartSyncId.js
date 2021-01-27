import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data1 = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

// Reversed of data1
const data2 = [
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
];

const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const height = 400;
const width = 400;

const initialState = {
  syncMethod: null,
};

export default class Demo extends Component {
  static displayName = 'LineChartDemo Sync Method';

  state = initialState;

  setSyncMethodToValue = () => {
    this.setState(prevState => ({
      syncMethod: prevState.syncMethod === 'value' ? 'index' : 'value',
    }));
  };

  render() {
    const { syncMethod } = this.state;
    return (
      <div className="line-charts">
        <button type="button" onClick={this.setSyncMethodToValue}>
          switch sync Method between value and index
        </button>
        <br />
        <p>
Sync Method used:
          {syncMethod}
        </p>
        <br />

        <p>A simple LineChart with syncId = test</p>
        <div className="line-chart-wrapper">
          <LineChart
            width={width}
            height={height}
            data={data1}
            margin={margin}
            syncId="test"
            syncMethod={syncMethod}
          >
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
            />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>

        <p>A simple LineChart with customized line dot</p>
        <div className="line-chart-wrapper">
          <LineChart
            width={width}
            height={height}
            data={data2}
            margin={margin}
            syncId="test"
            syncMethod={syncMethod}
          >
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
            />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    );
  }
}
