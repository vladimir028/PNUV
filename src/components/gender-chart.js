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

const HBSCGenderChart = () => {
    const data = {
        labels: ['Стрес секојдневно', 'Чувство на осаменост', 'Проблеми со спиење'],
        datasets: [
            {
                label: 'Момчиња',
                data: [25, 18, 30],
                backgroundColor: '#74b9ff',
            },
            {
                label: 'Девојчиња',
                data: [43, 36, 51],
                backgroundColor: '#ff7675',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Ментално здравје по пол (HBSC)',
                font: {
                    size: 18,
                },
            },
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        const category = context.label;

                        let description = '';

                        if (category === 'Стрес секојдневно') {
                            description = 'ученици кои пријавиле секојдневно чувство на стрес';
                        } else if (category === 'Чувство на осаменост') {
                            description = 'ученици кои често се чувствуваат осамено';
                        } else if (category === 'Проблеми со спиење') {
                            description = 'ученици кои пријавиле чести проблеми со спиење';
                        }

                        return `${label}: ${value}% — ${description}`;
                    },
                },
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

export default HBSCGenderChart;
