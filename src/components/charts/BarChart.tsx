"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  labels,
  datasets,
  height = 300,
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
  };

  const data = {
    labels,
    datasets: datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor || 'rgba(14, 165, 233, 0.5)',
      borderColor: dataset.borderColor || 'rgba(14, 165, 233, 1)',
      borderWidth: dataset.borderWidth || 1,
    })),
  };

  return (
    <div style={{ height }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
