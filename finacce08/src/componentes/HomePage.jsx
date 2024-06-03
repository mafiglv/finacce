import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/second');
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="homepage-container">
      <img src={`${process.env.PUBLIC_URL}/assets/finacce-logo.png`} alt="Finacce Logo" className="logo" />
    </div>
  );
};

export default HomePage;
