"use client";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title?: string;
  labels: string[];
  data: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  height?: number;
}

const PieChart: React.FC<PieChartProps> = ({
  title,
  labels,
  data,
  backgroundColor,
  borderColor,
  height = 300,
}) => {
  const defaultColors = [
    'rgba(14, 165, 233, 0.7)',
    'rgba(79, 70, 229, 0.7)',
    'rgba(16, 185, 129, 0.7)',
    'rgba(245, 158, 11, 0.7)',
    'rgba(239, 68, 68, 0.7)',
    'rgba(168, 85, 247, 0.7)',
  ];

  const defaultBorderColors = [
    'rgba(14, 165, 233, 1)',
    'rgba(79, 70, 229, 1)',
    'rgba(16, 185, 129, 1)',
    'rgba(245, 158, 11, 1)',
    'rgba(239, 68, 68, 1)',
    'rgba(168, 85, 247, 1)',
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: backgroundColor || defaultColors,
        borderColor: borderColor || defaultBorderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
