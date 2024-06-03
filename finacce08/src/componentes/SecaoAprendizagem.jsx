import React from 'react';
import { Link } from 'react-router-dom';
import './SecaoAprendizagem.css';

const SecaoAprendizagem = () => {
    return (
        <div className="secao-aprendizagem">
            <h3>Quer aprender a gerenciar seu dinheiro?</h3>
            <Link to="/aprendizagem">
                <button className="btn">Quero aprender</button>
            </Link>
        </div>
    );
};

export default SecaoAprendizagem;
