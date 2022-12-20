import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-react-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import COLORS from './constansts';

// function to display percentage on tooltip
const renderTooltip = (context) => {
  const num = (context.point?.percentage * 100);
  return (
    <div>
      {num}
      {' '}
      %
    </div>
  );
};
// fuction for to dispaly label
const labelContent = (e) => e.category;

function Charts(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/order/top5')
      .then((res) => setData(res.data));
  }, []);

  return (
    <Chart>
      <ChartTitle text="Топ позиций меню." font="26pt sans-serif" />
      <ChartTooltip render={renderTooltip} background="#333" shared="false" font="12pt sans-serif" />
      <ChartSeries>
        <ChartSeriesItem
          type="pie"
          data={data}
          categoryField="status"
          field="value"
        >
          <ChartSeriesLabels
            color="#333"
            background="none"
            content={labelContent}
            font="16pt sans-serif"
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
}

export default Charts;
