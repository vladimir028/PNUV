import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const questions = [
    "Колку се чувствувате среќно денес?",
    "Колку сте се чувствувале стресирано оваа недела?",
    "Колку добро спиевте изминатата ноќ?",
    "Колку сте имале енергија денес?",
    "Колку често сте се чувствувале осамено последната недела?",
    "Колку сте се чувствувале вознемирено или анксиозно во последните денови?",
    "Колку сте биле задоволни од своите социјални односи?",
    "Колку сте имале желба за активности кои ви се допаѓаат?",
    "Колку често сте се чувствувале фрустрирано?",
    "Колку често сте се чувствувале мотивирано да учите или работите на нешто?",
    "Колку сте се чувствувале опуштено и релаксирано?",
    "Колку често сте имале проблеми со концентрација?",
    "Колку сте биле активни физички во последните 7 дена?",
    "Колку често сте се чувствувале нервозно?",
    "Колку сте задоволни од својот изглед?",
    "Колку сте имале чувство на безнадежност?",
    "Колку сте се чувствувале горди на себе?",
    "Колку сте имале можност да разговарате со некого кога ви е тешко?",
    "Колку сте биле расположени за дружење со пријателите?",
    "Колку сте се чувствувале сигурно во својата околина?"
];

const adviceByScore = (score) => {
    if (score <= 40) {
        return {
            title: "Поттикни ја твојата добросостојба!",
            text:
                "Забави малку, направи шетање на свеж воздух и пробај да пишуваш дневник со позитивни мисли.",
            challenge: "Предизвик: Следниве 3 дена напиши 3 работи за кои си благодарен/на.",
            color: "#d9534f", // црвена
        };
    } else if (score <= 70) {
        return {
            title: "Добро е, но може и подобро!",
            text: "Пробај секој ден да правиш кратка вежба за релаксација или длабоко дишење.",
            challenge: "Предизвик: Вклучи 5 минути медитација или дишење дневно.",
            color: "#f0ad4e", // портокалова
        };
    } else {
        return {
            title: "Одлично се чувствуваш!",
            text:
                "Продолжи со добрите навики и обиди се да помагаш и на другите.",
            challenge: "Предизвик: Сподели позитивна мисла или комплимент со пријател.",
            color: "#5cb85c", // зелена
        };
    }
};

const MoodTracker = () => {
    const [answers, setAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = Number(value);
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const totalScore = answers.reduce((a, b) => a + b, 0);
    const advice = adviceByScore(totalScore);

    // Progress bar calculation
    const answeredCount = answers.filter((a) => a !== null).length;
    const progressPercent = (answeredCount / questions.length) * 100;

    const isDisabled = () => {
        return answers.length < questions.length || answers.includes(undefined) || answers.includes(null);
    }

    // Chart data and options
    const chartData = {
        labels: questions.map((_, i) => `Прашање ${i + 1}`),
        datasets: [
            {
                label: "Одговор (1-5)",
                data: answers,
                fill: false,
                backgroundColor: "#00B9F2",
                borderColor: "#00B9F2",
                tension: 0.3,
                pointHoverRadius: 9,
                pointRadius: 6,
                borderWidth: 3,
                hoverBorderWidth: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: '#00B9F2',
                titleFont: { size: 16, weight: 'bold' },
                bodyFont: { size: 14 },
                cornerRadius: 6,
                padding: 10,
            },
        },
        scales: {
            y: {
                min: 1,
                max: 5,
                ticks: { stepSize: 1, color: '#00B9F2', font: { weight: '600' } },
                grid: { color: '#f2f2f2' },
                title: {
                    display: true,
                    text: "Оцена",
                    color: '#00B9F2',
                    font: { size: 14, weight: '600' },
                },
            },
            x: {
                ticks: { color: '#00B9F2', font: { weight: '600' } },
                grid: { display: false },
                title: {
                    display: true,
                    text: "Прашања",
                    color: '#00B9F2',
                    font: { size: 14, weight: '600' },
                },
            },
        },
    };

    return (
        <div
            className="container my-5"
            style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "#3a2f2f",
                maxWidth: "900px",
            }}
        >
            <h2 className="mb-4" style={{ color: "#00B9F2", textAlign: "center", fontWeight: "700", fontSize: "2.75rem", letterSpacing: "2px", textShadow: "1px 1px 2px #ccc" }}>
                Mood Tracker
            </h2>

            {!submitted ? (
                <>
                    <div className="mb-4" style={{ height: '30px', borderRadius: '15px', backgroundColor: '#f0e6d2', overflow: 'hidden' }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${progressPercent}%`,
                                backgroundColor: "#00B9F2",
                                height: '100%',
                                borderRadius: '15px',
                                transition: "width 0.7s ease-in-out",
                                boxShadow: '0 0 8px #00B9F2',
                            }}
                            aria-valuenow={progressPercent}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>
                    <p style={{ textAlign: 'right', fontWeight: '600', marginTop: '5px', color: '#00B9F2' }}>
                        {Math.round(progressPercent)}% завршено
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-4 px-3 py-2 rounded" style={{ backgroundColor: '#f2f9fb', border: '1px dashed #00B9F2' }}>
                        <span>😞 1 - Воопшто</span>
                        <span>😐 2 - Малку</span>
                        <span>😌 3 - Умерено</span>
                        <span>😊 4 - Многу</span>
                        <span>😁 5 - Премногу</span>
                    </div>
                    <form onSubmit={handleSubmit} className="m-4">
                        {questions.map((q, i) => (
                            <div
                                className="mb-4"
                                key={i}
                                style={{
                                    backgroundColor: "#f9f6f1",
                                    padding: "15px",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 6px rgba(0, 185, 242, 0.15)",
                                    transition: "transform 0.3s",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            >
                                <label
                                    className="form-label"
                                    style={{ fontWeight: "600", color: "#00B9F2", fontSize: "1.1rem" }}
                                    htmlFor={`question-${i}`}
                                >
                                    {q}
                                </label>
                                <select
                                    className="form-select shadow-sm rounded-3 px-3 py-2"
                                    id={`question-${i}`}
                                    value={answers[i]}
                                    onChange={(e) => handleChange(i, e.target.value)}
                                    style={{
                                        border: "2px solid #00B9F2",
                                        fontWeight: "600",
                                        backgroundColor: "#dde7e8",
                                        color: "#000000",
                                        transition: "0.3s ease-in-out",
                                    }}
                                >
                                    <option value={0}>Нема одговор</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="btn btn-primary mt-3"
                            disabled= {isDisabled()}
                            style={{
                                backgroundColor: "#00B9F2",
                                borderColor: "#00B9F2",
                                fontWeight: "700",
                                fontSize: "1.1rem",
                                padding: "10px 20px",
                                boxShadow: "0 4px 8px rgba(0, 185, 242, 0.4)",
                                transition: "background-color 0.3s ease",
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#008ecf"}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#00B9F2"}
                        >
                            {isDisabled() ? "Одговори на сите прашања" : "Испрати"}
                        </button>
                    </form>
                </>
            ) : (
                <div
                    className="p-4 rounded-4"
                    style={{
                        backgroundColor: "#FFFADA",
                        border: `3px solid ${advice.color}`,
                        boxShadow: `0 0 20px ${advice.color}`,
                        textAlign: "center",
                        maxWidth: "700px",
                        margin: "auto",
                    }}
                >
                    <h3 style={{ color: advice.color, fontWeight: "800", marginBottom: "10px" }}>
                        {advice.title}
                    </h3>
                    <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>{advice.text}</p>
                    <p style={{ fontStyle: "italic", marginTop: "20px", fontWeight: "600", color: advice.color }}>
                        {advice.challenge}
                    </p>
                    <p
                        style={{
                            fontWeight: "700",
                            fontSize: "1rem",
                            marginTop: "30px",
                            color: "#28231D",
                            userSelect: "none",
                        }}
                    >
                        Вкупен резултат: <span style={{ color: advice.color }}>{totalScore} поени</span>
                    </p>

                    <div style={{ marginTop: "30px" }}>
                        <Line data={chartData} options={chartOptions} />
                    </div>
                    <button
                        className="btn btn-outline-secondary mt-4"
                        onClick={() => {
                            setAnswers([]);
                            setSubmitted(false);
                        }}
                        style={{
                            borderColor: "#00B9F2",
                            color: "#00B9F2",
                            fontWeight: "600",
                            transition: "0.3s",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = "#00B9F2";
                            e.currentTarget.style.color = "#FFFADA";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#00B9F2";
                        }}
                    >
                        Поправи одговори
                    </button>
                </div>
            )}
        </div>
    );
};

export default MoodTracker;