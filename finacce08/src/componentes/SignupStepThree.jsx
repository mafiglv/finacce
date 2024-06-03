import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupStepThree.css';

const SignupStepThree = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    history.push('/login-page'); 
  };

  return (
    <div className="signup-step-three-container">
      <div className="header">
        <button className="back-button" onClick={() => history.goBack()}>Voltar</button>
        <img src={`${process.env.PUBLIC_URL}/assets/finacce-logo.png`} alt="Finacce Logo" className="logo" />
      </div>
      <h2>Passo 2 de 2</h2>
      <h3>Criar Conta</h3>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Senha</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" className="show-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <label>Confirme sua Senha</label>
        <div className="password-container">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="button" className="show-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <label className="checkbox-container">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          />
          Aceito Termos e Condições.
        </label>

        <button type="submit" className="register-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignupStepThree;
