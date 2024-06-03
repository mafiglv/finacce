import React from 'react';
import { Bar } from 'react-chartjs-2';
import './IndicadoresFinanceiros.css';

const IndicadoresFinanceiros = ({ dados }) => {
    const data = {
        labels: dados.labels,
        datasets: [
            {
                label: 'Gastos essenciais',
                data: dados.gastosEssenciais,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Gastos não essenciais',
                data: dados.gastosNaoEssenciais,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="indicadores-container grid-item">
            <h2 className="indicadores-titulo">Indicadores financeiros</h2>
            <Bar data={data} />
        </div>
    );
};

export default IndicadoresFinanceiros;
