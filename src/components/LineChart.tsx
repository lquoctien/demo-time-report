import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

type productsByMinute = {
    products: number,
    timeToEnd: number
}

interface Props {
    chartData: Array<productsByMinute>,
}


export default function LineChart({chartData}: Props){
    const Labels = chartData.map((data) => data.timeToEnd)
    const Data = chartData.map((data) => data.products)
    const state = {
        labels: Labels,
        datasets: [
        {
            label: 'Production',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            data: Data
        }
        ]
    }
  
    const options = {
        responsive: true,
        plugins: {
            title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
            },
            legend:{
            position:'top' as const
            }
        }
    };

    return (
      <div>
        <Line
          data={state}
          options={options}
        />
      </div>
    );
}
