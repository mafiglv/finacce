import React from 'react';
import { Link } from 'react-router-dom';
import './SecondPage.css';

const SecondPage = () => {
  return (
    <div className="second-page-container">
      <img src={`${process.env.PUBLIC_URL}/assets/bem-vindo.png`} alt="Calculadora" className="background-image" />
      <div className="content">
        <p>Bem Vindos ao Finacce!</p>
        <div className="button-group">
          <Link to="/fourth" className="skip-button">Pular</Link>
          <Link to="/third" className="next-button">→</Link>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
