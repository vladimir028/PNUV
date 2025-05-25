import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    Title
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const HBSCAgeChart = () => {
    const data = {
        labels: ['Стрес секојдневно', 'Чувство на осаменост', 'Проблеми со спиење'],
        datasets: [
            {
                label: '11 години',
                data: [15, 10, 20],
                backgroundColor: '#55efc4',
            },
            {
                label: '13 години',
                data: [30, 22, 35],
                backgroundColor: '#81ecec',
            },
            {
                label: '15 години',
                data: [50, 40, 60],
                backgroundColor: '#00cec9',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Ментално здравје по возраст (HBSC)',
                font: {
                    size: 18,
                },
            },
            legend: {
                position: 'top',
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

export default HBSCAgeChart;
