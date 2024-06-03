import React from 'react';
import { useHistory } from 'react-router-dom';
import './SecaoSaldo.css';

const SecaoSaldo = ({ saldoTotal, contas }) => {
    const history = useHistory();

    return (
        <div className="secao-saldo">
            <h2>Saldo Total</h2>
            <p>{saldoTotal}</p>
            <div className="contas">
                {contas.map((conta, index) => (
                    <div key={index} className="conta">
                        <img src={conta.logo} alt={conta.nome} className="conta-logo" />
                        <span>{conta.nome}</span>
                        <span>{conta.saldo}</span>
                    </div>
                ))}
            </div>
            <button className="btn-ajustar-saldo" onClick={() => history.push('/ajustar-saldos')}>Ajustar Saldos</button>
        </div>
    );
};

export default SecaoSaldo;
