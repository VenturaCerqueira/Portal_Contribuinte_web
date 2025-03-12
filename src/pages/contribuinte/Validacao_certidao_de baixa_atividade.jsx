import React, { useState } from "react";
import { FaFileAlt, FaDownload, FaPrint } from "react-icons/fa"; // Ícones
import "../../assets/styles/validacao_certidao.css"; // Importação do CSS

const ValidacaoCertidao = () => {
  const [documento, setDocumento] = useState("");
  const [chaveValidacao, setChaveValidacao] = useState("");
  const [pdfVisible, setPdfVisible] = useState(false);

  const handleDocumentoChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{3})(\d)/, "$1.$2");
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    } else {
      value = value.slice(0, 14);
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }
    setDocumento(value);
  };

  const handleChaveValidacaoChange = (e) => {
    setChaveValidacao(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chaveValidacao) {
      alert("Por favor, insira a chave de validação.");
      return;
    }
    setPdfVisible(true);
  };

  const baixarPDF = () => {
    const link = document.createElement("a");
    link.href = 'https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf'; 
    link.download = "CertidaoBaixaAtividade.pdf";
    link.click();
  };

  const imprimirPDF = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    iframe.src = 'https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf'; 
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <>
      <div className="cnd-container">
        <h2 className="cnd-title">Validação de Certidão de Baixa de Atividade</h2>
        <form className="cnd-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Digite CNPJ"
              value={documento}
              onChange={handleDocumentoChange}
              maxLength="18"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Chave de Validação"
              value={chaveValidacao}
              onChange={handleChaveValidacaoChange}
            />
          </div>
          <div className="button-group">
            <button
              type="submit"
              className="emitir-btn"
              disabled={!chaveValidacao}
            >
              <FaFileAlt className="icon" /> Validar
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
          <div className="pdf-container">
            <embed
              src="https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ValidacaoCertidao;
