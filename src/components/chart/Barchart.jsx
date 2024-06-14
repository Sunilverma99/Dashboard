import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const BarChart = () => {
  const [refresh, setRefresh] = useState(false);

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    indexAxis: 'x', // Makes the chart horizontal
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Company Sales and Expenses',
      },
    },
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Progress',
        data: [100, 150, 200, 180, 250, 300, 280],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Company Progress',
      },
    },
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setRefresh(prev => !prev);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-center p-2'>
      <div className='w-full max-w-screen-xl lg:grid lg:grid-cols-2 gap-4'>
        <div>
          <div className='h-full'>
            <Bar key={refresh} data={barData} options={barOptions} />
          </div>
        </div>
        <div>
          <div className='h-full'>
            <Line key={refresh} data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
