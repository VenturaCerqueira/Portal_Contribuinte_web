import React, { useState } from "react";
import { FaFileAlt, FaDownload, FaPrint } from "react-icons/fa"; 
import "../../assets/styles/emissao_cnd.css";

const EmissaoCnd = () => {
  const [documento, setDocumento] = useState("");
  const [pdfVisible, setPdfVisible] = useState(false);
  const [emitido, setEmitido] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setPdfVisible(true);
    setEmitido(true);
  };

  const baixarPDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf";
    link.download = "CND.pdf";
    link.click();
  };

  const imprimirPDF = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    iframe.src =
      "https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf";
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <div className="emissao-cnd-container">
      <h2 className="emissao-cnd-title">Emissão de CND</h2>

      <form className="emissao-cnd-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite CPF ou CNPJ"
          value={documento}
          onChange={handleDocumentoChange}
          maxLength="18"
        />

        <button type="submit" disabled={emitido}>
          <FaFileAlt className="emissao-button-icon" /> Emitir CND
        </button>
      </form>

      {pdfVisible && (
        <div className="emissao-button-group">
          <button type="button" onClick={baixarPDF}>
            <FaDownload className="emissao-button-icon" /> Baixar PDF
          </button>
          <button type="button" onClick={imprimirPDF}>
            <FaPrint className="emissao-button-icon" /> Imprimir PDF
          </button>
        </div>
      )}

      {pdfVisible && (
        <div className="emissao-pdf-container">
          <embed
            id="pdfViewer"
            src="https://s3.sa-east-1.amazonaws.com/cdn.keep/gestaotributaria/14043269000160/contribuintes/contribuinte-21963/cnd/39865a37b4531b22624a7141bda9d80c-15-12-41.pdf#zoom=139"
            type="application/pdf"
            width="100%"
            height="500px"
          />
        </div>
      )}
    </div>
  );
};

export default EmissaoCnd;
