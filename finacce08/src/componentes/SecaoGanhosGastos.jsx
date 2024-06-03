import React from 'react';
import './SecaoGanhosGastos.css';

const SecaoGanhosGastos = ({ ganhos, gastos }) => {
    const formatarValor = (valor) => {
        if (typeof valor !== 'number' || isNaN(valor)) {
            return 'R$ 0,00';
        }
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    };

    return (
        <div className="secao-ganhos-gastos">
            <div className="ganhos-gastos">
                <div className="ganhos">
                    <i className="bi bi-arrow-up-circle icon-grande" style={{ color: '#00aaff' }}></i>
                    <p>Ganhos</p>
                    <p>{formatarValor(ganhos)}</p>
                </div>
                <div className="gastos">
                    <i className="bi bi-arrow-down-circle icon-grande" style={{ color: '#ff0000' }}></i>
                    <p>Gastos</p>
                    <p>{formatarValor(gastos)}</p>
                </div>
            </div>
            <div className="botoes-movimentacao">
                <button className="btn-movimentacao" onClick={() => window.location.hash = '#/adicionar-movimentacao'}>+ Adicionar Nova Movimentação</button>
                <button className="btn-movimentacao" onClick={() => window.location.hash = '#/movimentacoes'}>Visualizar Movimentações</button>
            </div>
        </div>
    );
};

export default SecaoGanhosGastos;
