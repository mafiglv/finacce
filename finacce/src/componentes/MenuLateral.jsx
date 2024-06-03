import React from 'react';
import './Patrimonio.css';

const Patrimonio = ({ patrimonios }) => {
    return (
        <div className="patrimonio">
            <h3>Meus Patrimônios</h3>
            {patrimonios.length > 0 ? (
                <ul>
                    {patrimonios.map((patrimonio, index) => (
                        <li key={index} className="patrimonio-item">
                            <img src={patrimonio.logo} alt={patrimonio.nome} />
                            <div>
                                <p>{patrimonio.nome}</p>
                                <p>R${patrimonio.valor}</p>
                                <p>{patrimonio.descricao}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Não há patrimônios cadastrados.</p>
            )}
        </div>
    );
};

export default Patrimonio;
