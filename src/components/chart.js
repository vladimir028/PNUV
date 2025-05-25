import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const HBSCBarChart = () => {
    const data = {
        labels: ['Стрес секојдневно', 'Чувство на осаменост', 'Проблеми со спиење'],
        datasets: [
            {
                label: 'Процент на ученици (%)',
                data: [34, 27, 42],
                backgroundColor: ['#74b9ff', '#55efc4', '#ffeaa7'],
                borderColor: '#2d3436',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Ментално здравје кај ученици (HBSC)',
                font: {
                    size: 18,
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default HBSCBarChart;
