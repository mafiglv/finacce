import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    
    history.push('/home');
  };

  return (
    <div className="login-page-container">
      <img src={`${process.env.PUBLIC_URL}/assets/finacce-logo.png`} alt="Finacce Logo" className="logo" />
      <h2>Insira seus dados para entrar</h2>
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

        <a href="/forgot-password" className="forgot-password">Esqueceu sua senha?</a>

        <button type="submit" className="login-button">Entrar</button>
      </form>
      <div className="divider">
        <hr /> <span>ou</span> <hr />
      </div>
      <div className="social-login">
        <p>Continue com</p>
        <div className="social-icons">
          <button className="social-button google">G</button>
          <button className="social-button facebook">f</button>
          <button className="social-button apple"></button>
        </div>
      </div>
      <p className="signup-link">
        Ainda não tem conta? <a href="/signup">Cadastre-se!</a>
      </p>
    </div>
  );
};

export default LoginPage;
