import React from 'react';
import HBSCGenderChart from "../components/gender-chart";
import HBSCAgeChart from "../components/age-chart";
import HBSCBarChart from "../components/chart";
import PieChart from "../components/pie-chart";
import HBSCSleepChart from "../components/bar-chart";
import HBSCStressRadar from "../components/radar-chart";

const HBSCData = () => (
    <div className="container my-5">
        <div className="text-center mb-5 px-3">
            <h2
                className="fw-bold mb-3"
                style={{
                    fontSize: '2.75rem',
                    color: '#00B9F2',
                    textShadow: '1px 1px 4px rgba(0, 185, 242, 0.6)',
                    letterSpacing: '2px',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
            >
                HBSC Податоци
            </h2>
            <p
                className="mx-auto"
                style={{
                    maxWidth: '600px',
                    fontSize: '1.15rem',
                    color: '#555',
                    lineHeight: '1.6',
                    fontWeight: '500',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
            >
                Податоците се базирани на истражувањето HBSC и ја прикажуваат состојбата со менталното здравје според пол и возраст.
            </p>
        </div>


        <div className="row g-4">
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary">Според Пол</h5>
                        <HBSCGenderChart />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center text-success">Според Возраст</h5>
                        <HBSCAgeChart />
                    </div>
                </div>
            </div>
        </div>

        <div className="row g-4 mt-4">
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center text-info">Ученици</h5>
                        <HBSCBarChart />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center text-info">Ученици</h5>
                        <PieChart />
                    </div>
                </div>
            </div>
        </div>
        <div className="row g-4  mt-4">
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary">Според Возраст</h5>
                        <HBSCSleepChart />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center text-success">Ученици</h5>
                        <HBSCStressRadar />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HBSCData;
