import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from './DonutChart.module.scss';

const DonutChart = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const chartRef = useRef(null);

  const data = {
    labels: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5'],
    datasets: [
      {
        data: [20, 20, 20, 20, 20],
        backgroundColor: ['green', 'green', 'green', 'green', 'green'],
        cutout: '70%',
        datalabels: {
          color: 'white',
          anchor: 'center',
          align: 'center',
          font: {
            size: 16
          }
        }
      }
    ]
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        }
      },
      legend: {
        display: false // This will hide the legend
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSelectedSegment(index);
      }
    }
  };

  return (
    <div>
      <div className={styles.chartContainer}>
        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
      <div>
        {selectedSegment != null && <p>{data.labels[selectedSegment]}</p>}
      </div>
    </div>
  )
}
export default DonutChart;
