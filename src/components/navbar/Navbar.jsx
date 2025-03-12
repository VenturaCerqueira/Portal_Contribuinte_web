import { Link } from "react-router-dom";
import "../../assets/styles/navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl custom-navbar">
      <div className="container">
        {/* Botão para colapsar o menu em dispositivos menores */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens da Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Link para Início */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i> Início
              </Link>
            </li>

            {/* Dropdown Contribuinte */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/contribuinte"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i> Contribuinte
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/contribuinte/emissao-cnd">
                    <i className="fas fa-file-alt"></i> Emissão de CND
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contribuinte/validacao-cnd">
                    <i className="fas fa-check-circle"></i> Validação CND
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contribuinte/validacao-certidao">
                    <i className="fas fa-check-circle"></i> Validação de Certidão
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contribuinte/declaracao-nao-inscrito">
                    <i className="fas fa-file-invoice-dollar"></i> Declaração de Não Inscrito
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown Mobiliário */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/mobiliario"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-building"></i> Mobiliário
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/mobiliario/emissao-cnd">
                    <i className="fas fa-file-alt"></i> Emissão de CND
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mobiliario/validacao-cnd">
                    <i className="fas fa-check-circle"></i> Validação CND
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mobiliario/2via-iss">
                    <i className="fas fa-file-alt"></i> 2ª Via ISS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mobiliario/2via-tff">
                    <i className="fas fa-check-circle"></i> 2ª Via TFF
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mobiliario/consultar-autenticidade">
                    <i className="fas fa-search"></i> Consultar Autenticidade
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown Imobiliário */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/imobiliario"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-home"></i> Imobiliário
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/imobiliario/2via-iptu">
                    <i className="fas fa-file-alt"></i> 2ª Via IPTU
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/imobiliario/2via-itiv">
                    <i className="fas fa-check-circle"></i> 2ª Via ITIV
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown Protocolo */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/protocolo"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-folder"></i> Protocolo
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/protocolo/sistema">
                    <i className="fas fa-file-invoice-dollar"></i> Acesse o Sistema de Protocolo
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown NFS-e */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/nfse"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-receipt"></i> NFS-e
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/nfse/sistema">
                    <i className="fas fa-file-invoice-dollar"></i> Acesse o Sistema de NFS-e
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/nfse/consulta">
                    <i className="fas fa-file-invoice-dollar"></i> Consultar Autenticidade de NFS-e
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
