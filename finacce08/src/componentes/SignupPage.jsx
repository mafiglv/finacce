import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    email: ''
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);

    history.push('/signup-step-two');
  };

  return (
    <div className="signup-page-container">
      <img src={`${process.env.PUBLIC_URL}/assets/logo-finacce.png`} alt="Finacce Logo" className="logo" />
      <h2>Suas informações básicas</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome Completo</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Data de Nascimento</label>
        <div className="birthdate-container">
          <select name="birthDay" value={formData.birthDay} onChange={handleChange} required>
            <option value="">Dia</option>
            {[...Array(31).keys()].map(day => (
              <option key={day + 1} value={day + 1}>{day + 1}</option>
            ))}
          </select>
          <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} required>
            <option value="">Mês</option>
            {[...Array(12).keys()].map(month => (
              <option key={month + 1} value={month + 1}>{month + 1}</option>
            ))}
          </select>
          <select name="birthYear" value={formData.birthYear} onChange={handleChange} required>
            <option value="">Ano</option>
            {Array.from({ length: 100 }, (v, k) => k + 1920).reverse().map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <label>Gênero</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>

        <label>E-mail</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <button type="submit" className="continue-button">Continue</button>
      </form>
    </div>
  );
};

export default SignupPage;
