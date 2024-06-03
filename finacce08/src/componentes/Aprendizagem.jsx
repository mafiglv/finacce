import React from 'react';
import { Link } from 'react-router-dom';
import './Aprendizagem.css';

const Aprendizagem = () => {
    return (
        <div className="aprendizagem-page">
            <div className="aprendizagem-container">
                <h2>Educação financeira</h2>
                <div className="video-item">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/CdRX4ESGQ_k" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    <p>COMO ORGANIZAR SUAS FINANÇAS E GUARDAR DINHEIRO</p>
                    <button className="btn assistir-btn">Assistir</button>
                </div>
                <div className="video-item">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Ljj2qCSX6Fw" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    <p>EDUCAÇÃO FINANCEIRA: Você Está Usando Seu Dinheiro Do Jeito Certo?</p>
                    <button className="btn assistir-btn">Assistir</button>
                </div>
                <Link to="/">
                    <button className="btn voltar-btn">Voltar</button>
                </Link>
            </div>
        </div>
    );
};

export default Aprendizagem;
