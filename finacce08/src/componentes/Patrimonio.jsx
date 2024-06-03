import React from 'react';
import './Patrimonio.css';

const Patrimonio = ({ patrimonios }) => {
    const totalPatrimonio = patrimonios.reduce((acc, patrimonio) => acc + parseFloat(patrimonio.valor || 0), 0);

    return (
        <div className="patrimonio-container">
            <h2>Patrimônio</h2>
            <p>Total: R${totalPatrimonio.toFixed(2)}</p>
            <div className="patrimonios-lista">
                {patrimonios.map((patrimonio, index) => (
                    <div key={index} className="patrimonio-item">
                        <img src={patrimonio.logo} alt={patrimonio.nome} className="patrimonio-logo" />
                        <div className="patrimonio-info">
                            <p>{patrimonio.nome}</p>
                            <p>R${patrimonio.valor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Patrimonio;
