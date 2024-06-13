import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend);
const PieChart = () => {
    const data = {
      labels: ['IT', 'Marketing', 'Accounts', 'Production', 'Deveops', 'HR'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      plugins: {
        title: {
          display: true,
          text: 'Employees in differnet departments',
        },
        legend: {
          position: 'bottom',
        },
      },
    };
  
    return (
      <div className=' flex justify-center items-center'>
        <div className=' '>
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default PieChart;
  