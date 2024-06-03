import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignupStepTwo.css';

const SignupStepTwo = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    history.push('/signup-step-three'); 
  };

  return (
    <div className="signup-step-two-container">
      <div className="header">
        <button className="back-button" onClick={() => history.goBack()}>Voltar</button>
        <img src={`${process.env.PUBLIC_URL}/assets/finacce-logo.png`} alt="Finacce Logo" className="logo" />
      </div>
      <h2>Passo 1 de 2</h2>
      <h3>Criar Conta</h3>
      <form onSubmit={handleSubmit}>
        <label>Como gostaria de ser chamado?</label>
        <input type="text" name="nickname" required />

        <label>Qual sua ocupação?</label>
        <input type="text" name="occupation" required />

        <label>Qual sua renda?</label>
        <input type="text" name="income" required />

        <button type="submit" className="continue-button">Continue</button>
      </form>
    </div>
  );
};

export default SignupStepTwo;
