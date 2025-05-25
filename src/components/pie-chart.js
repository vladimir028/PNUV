import React from "react";
import { Pie } from "react-chartjs-2";

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


const HBSCPieChart = () => {
    const data = {
        labels: ["Среќни", "Незадоволни", "Анксиозни", "Тажни"],
        datasets: [
            {
                data: [35, 25, 20, 20],
                backgroundColor: ["#00B9F2", "#FF6384", "#FFCE56", "#36A2EB"],
                hoverBackgroundColor: ["#0077C8", "#FF3366", "#FFB347", "#1D8FE5"],
            },
        ],
    };

    return <div style={{ width: "250px", height: "250px", margin: "0 auto" }}>
        <Pie data={data} options={{ maintainAspectRatio: false }} />
    </div>
};

export default HBSCPieChart;
