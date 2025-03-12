import React from "react";
import '../../../assets/styles/BottomFixed.css'

const BottomFixed = () => {
  return (
    <>
      {/* Botão e-Contrib */}
      <div className="fixed-button" id="fixedButton">
        <i className="fas fa-sign-in-alt"></i>
        <span className="button-text">e-Contrib</span>
      </div>

      {/* Botão NFS-e */}
      <div className="fixed-button fixed-button-nfse" id="fixedButtonNfse">
        <i className="fas fa-file-invoice-dollar"></i>
        <span className="button-text">NFS-e</span>
      </div>

      {/* Botão Protocolo */}
      <div className="fixed-button fixed-button-protocolo" id="fixedButtonProtocolo">
        <i className="fas fa-file-alt"></i>
        <span className="button-text">Protocolo</span>
      </div>
    </>
  );
};

export default BottomFixed;
