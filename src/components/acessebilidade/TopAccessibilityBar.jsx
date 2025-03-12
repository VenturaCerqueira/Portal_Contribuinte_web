import React from 'react';
import '../../assets/styles/TopAccessibilityBar.css';


const TopAccessibilityBar = () => {
  const changeFontSize = (action) => {
    // Lógica de acessibilidade para alterar tamanhos de fonte
    console.log(`Alterar tamanho da fonte: ${action}`);
  };

  return (
    <div className="top-accessibility-bar py-1 px-3">
      <div className="container d-flex justify-content-start align-items-center gap-4">
        <span className="fw-bold">ACESSIBILIDADE</span>
        <a
          href="#"
          className="text-decoration-none"
          onClick={() => changeFontSize('decrease')}
        >
          A-
        </a>
        <a
          href="#"
          className="text-decoration-none"
          onClick={() => changeFontSize('reset')}
        >
          A
        </a>
        <a
          href="#"
          className="text-decoration-none"
          onClick={() => changeFontSize('increase')}
        >
          A+
        </a>
        <span className="mx-2">|</span>
        <a
          href="https://www.riachaodojacuipe.ba.gov.br/acessoainformacao/"
          className="text-decoration-none"
        >
          <i className="fas fa-info-circle"></i> ACESSO À INFORMAÇÃO
        </a>
      </div>
    </div>
  );
};

export default TopAccessibilityBar;
