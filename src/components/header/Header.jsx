import React, { useState, useEffect } from 'react';
import '../../assets/styles/header.css';
import logo from'../../assets/img/logo/logo.png'
import { formatDate } from '../../utils/formatDate'; 

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    setCurrentDate(formatDate(today)); 
  }, []);

  return (
    <header className="custom-header">
      <div className="custom-logo">
        <img src={logo} alt="Logo Prefeitura" />
      </div>
      <h1 className="header-title">Secretaria Municipal da Fazenda</h1>
      <div className="icon-container">
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
      <div className="location-date">
        <span>Riachão do Jacuipe - Bahia</span>
        <br />
        <span>{currentDate}</span>
      </div>
    </header>
  );
};

export default Header;

