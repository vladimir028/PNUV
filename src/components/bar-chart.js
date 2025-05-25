import React from "react";
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    RadialLinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    RadialLinearScale,
    PointElement,
    LineElement
);

const HBSCSleepChart = () => {
    const data = {
        labels: ["11-13 години", "14-15 години", "16-17 години", "18 години"],
        datasets: [
            {
                label: "Просечно време за спиење (часови)",
                data: [8.5, 7.8, 7.2, 6.9],
                backgroundColor: "#00B9F2",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default HBSCSleepChart;
