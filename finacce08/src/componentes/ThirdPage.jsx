import React from 'react';
import { Link } from 'react-router-dom';
import './ThirdPage.css';

const ThirdPage = () => {
  return (
    <div className="third-page-container">
      <img src={`${process.env.PUBLIC_URL}/assets/bem-vindo2.png`} alt="Cofrinho" className="background-image" />
      <div className="content">
        <p>Transforme sua jornada financeira e lidere uma vida mais organizada com a Finacce!</p>
        <div className="button-group">
          <Link to="/fourth" className="skip-button">Pular</Link>
          <Link to="/fourth" className="next-button">→</Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
