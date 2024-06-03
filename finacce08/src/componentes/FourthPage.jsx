import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FourthPage.css';

const FourthPage = () => {
  const [selectedObjectives, setSelectedObjectives] = useState([]);

  const objectives = [
    { id: 1, label: 'Poupar mais ou começar a poupar', icon: './assets/poupar.png' },
    { id: 2, label: 'Organizar minhas despesas', icon: './assets/organizar.png' },
    { id: 3, label: 'Eliminar Dívidas', icon: './assets/dividas.png' },
    { id: 4, label: 'Mudar hábitos financeiros', icon: './assets/habitos.png' },
    { id: 5, label: 'Controlar compras compulsivas', icon: './assets/ccompulsivas.png' },
    { id: 6, label: 'Atingir um objetivo financeiro', icon: './assets/objetivo.png' },
    { id: 7, label: 'Melhorar minha pontuação de Crédito', icon: './assets/credito.png' },
    { id: 8, label: 'Apenas quero testar o aplicativo', icon: './assets/testar.png' },
  ];

  const toggleObjective = (id) => {
    setSelectedObjectives((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((objId) => objId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="fourth-page-container">
      <h2>Qual o seu objetivo?</h2>
      <p>Selecione os seus objetivos. Usaremos eles para guiar a sua experiência da melhor forma</p>
      <div className="objectives-grid">
        {objectives.map((objective) => (
          <div
            key={objective.id}
            className={`objective-card ${selectedObjectives.includes(objective.id) ? 'selected' : ''}`}
            onClick={() => toggleObjective(objective.id)}
          >
            <img src={`${process.env.PUBLIC_URL}/${objective.icon}`} alt={objective.label} className="objective-icon" />
            <p>{objective.label}</p>
          </div>
        ))}
      </div>
      <Link to="/signup" className="continue-button">Continue</Link>
    </div>
  );
};

export default FourthPage;
