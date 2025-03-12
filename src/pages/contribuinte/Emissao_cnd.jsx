
import React, { useState } from "react";
import { FaFileAlt, FaDownload, FaPrint } from "react-icons/fa"; 
import '../../assets/styles/emissao_cnd.css';


const Emissao_cnd = () => {
  const [documento, setDocumento] = useState("");
  const [pdfVisible, setPdfVisible] = useState(false);  
  const [emitido, setEmitido] = useState(false); 

  const handleDocumentoChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 11) {
      // CPF
      value = value.replace(/^(\d{3})(\d)/, "$1.$2");
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    } else {
      // CNPJ
      value = value.slice(0, 14);
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }

    setDocumento(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPdfVisible(true);
    setEmitido(true); 
  };

  const baixarPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf'; 
    link.download = 'CND.pdf'; 
    link.click();
  };

  const imprimirPDF = () => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.style.border = 'none';
    iframe.src = 'https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf'; 
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <>
      {/* Conteúdo principal */}
      <div className="cnd-container">
        <h2 className="cnd-title">Emissão de CND</h2>

        <form className="cnd-form" onSubmit={handleSubmit}>
          <div className="input-container" style={{ alignItems: 'center'}}>
            <input
              type="text"
              id="documento"
              placeholder="Digite CPF ou CNPJ"
              value={documento}
              onChange={handleDocumentoChange}
              maxLength="18"
            />
          </div>

          <div className="button-group" style={{ display: 'flex'}}>
            <button 
              type="submit" 
              className="emitir-btn"
              disabled={emitido} 
            >
              <FaFileAlt className="icon" /> Emitir CND
            </button>

            {pdfVisible && (
              <>
                <button 
                  type="button" 
                  className="action-btn" 
                  onClick={baixarPDF}
                >
                  <FaDownload className="button-icon" /> Baixar PDF
                </button>
                <button 
                  type="button" 
                  className="action-btn" 
                  onClick={imprimirPDF}
                >
                  <FaPrint className="button-icon" /> Imprimir PDF
                </button>
              </>
            )}
          </div>
        </form>

        {pdfVisible && (
          <div className="pdf-container" style={{ marginTop: '20px', height: '1200px', width: '90%' }}>
            <embed 
              id="pdfViewer" 
              src="https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf#zoom=139" 
              type="application/pdf" 
              width="100%" 
              height="100%" 
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Emissao_cnd;
