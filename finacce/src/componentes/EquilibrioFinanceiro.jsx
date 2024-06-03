import React from 'react';
import './EquilibrioFinanceiro.css';

const EquilibrioFinanceiro = ({ gastosEssenciais, gastosNaoEssenciais }) => {
    const formatarValor = (valor) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    };

    return (
        <div className="equilibrio-financeiro">
            <h2>Equilíbrio financeiro</h2>
            <div className="gasto">
                <h3>Gastos essenciais</h3>
                <div className="barra-progresso">
                    <div className="progresso" style={{ width: `${gastosEssenciais.percentual}%` }}></div>
                </div>
                <p>{formatarValor(gastosEssenciais.quantia)}</p>
            </div>
            <div className="gasto">
                <h3>Gastos não essenciais</h3>
                <div className="barra-progresso">
                    <div className="progresso" style={{ width: `${gastosNaoEssenciais.percentual}%` }}></div>
                </div>
                <p>{formatarValor(gastosNaoEssenciais.quantia)}</p>
            </div>
        </div>
    );
};

export default EquilibrioFinanceiro;
