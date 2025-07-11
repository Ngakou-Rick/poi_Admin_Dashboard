"use client";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
  height?: number;
}

const PieChart: React.FC<PieChartProps> = ({
  title,
  labels,
  datasets,
  height = 300,
}) => {
  const defaultColors = [
    'rgba(139, 92, 246, 0.8)', // primary
    'rgba(59, 130, 246, 0.8)',  // blue
    'rgba(16, 185, 129, 0.8)',  // green
    'rgba(245, 158, 11, 0.8)',  // yellow
    'rgba(239, 68, 68, 0.8)',   // red
    'rgba(168, 85, 247, 0.8)',  // purple
  ];

  const defaultBorderColors = [
    'rgba(139, 92, 246, 1)',
    'rgba(59, 130, 246, 1)',
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
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: !!title,
        text: title,
      },
              tooltip: {
          callbacks: {
            label: function(context: { label?: string; parsed: number; dataset: { data: number[] } }) {
              const label = context.label || '';
              const value = context.parsed;
              const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
    },
  };

  const chartData = {
    labels,
    datasets: datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor || defaultColors,
      borderColor: dataset.borderColor || defaultBorderColors,
      borderWidth: dataset.borderWidth || 2,
    })),
  };

  return (
    <div style={{ height }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
