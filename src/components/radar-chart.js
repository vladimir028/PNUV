import React from "react";
import { Radar } from "react-chartjs-2";
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

const HBSCStressRadar = () => {
    const data = {
        labels: ["Училишен притисок", "Семејни проблеми", "Социјални односи", "Финансиски грижи", "Лични очекувања"],
        datasets: [
            {
                label: "Ниво на стрес",
                data: [65, 59, 90, 81, 56],
                backgroundColor: "rgba(0, 185, 242, 0.4)",
                borderColor: "#00B9F2",
                pointBackgroundColor: "#00B9F2",
            },
        ],
    };

    return <Radar data={data} />;
};

export default HBSCStressRadar;
