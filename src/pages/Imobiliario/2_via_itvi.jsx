import React, { useState } from "react";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaListUl,
  FaDollarSign,
  FaCalendarCheck,
  FaPrint,
  FaCheckCircle,
} from "react-icons/fa"; // Ícones
import "../../assets/styles/ITVI.css"; // Importação do CSS

const SegundaViaTFF = () => {
  const [documento, setDocumento] = useState("");
  const [exercicio, setExercicio] = useState("");
  const [tabelaVisible, setTabelaVisible] = useState(false);
  const [dadosTabela, setDadosTabela] = useState([]);

  // Atualiza o estado do CPF/CNPJ
  const handleDocumentoChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setDocumento(value);
  };

  // Atualiza o estado do Exercício
  const handleExercicioChange = (e) => {
    setExercicio(e.target.value);
  };

  // Geração de dados simulados e exibição da tabela
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documento || !exercicio) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Data atual simulada
    const hoje = new Date("2025-03-10");

    // Simulação de dados para a tabela
    const dadosSimulados = Array.from({ length: 10 }, (_, index) => {
      const pago = index % 4 === 0; // Define pago para 1/4 dos itens
      const dataVencimento = new Date(`2025-${(index % 12) + 1}-30`);
      const vencido = !pago && dataVencimento < hoje; // Documento vencido se não estiver pago e a data for anterior a hoje

      return {
        numeroDAM: `DAM${index + 1}`,
        exercicio: exercicio,
        inscricao: `INS${Math.floor(Math.random() * 10000)}`,
        valor: parseFloat((Math.random() * 1000).toFixed(2)),
        vencimento: dataVencimento.toLocaleDateString("pt-BR"),
        vencido, // Define se está vencido
        pago, // Define se está pago
      };
    });

    setDadosTabela(dadosSimulados);
    setTabelaVisible(true);
  };

  return (
    <>
      <div className="cnd-container">
        <h2 className="cnd-title">2ª Via ITVI</h2>
        <form className="cnd-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite CPF ou CNPJ"
            value={documento}
            onChange={handleDocumentoChange}
            maxLength="18"
          />
          <input
            type="text"
            placeholder="Exercício Ex: 2025"
            value={exercicio}
            onChange={handleExercicioChange}
          />
          <button type="submit" className="emitir-btn">
            <FaPrint style={{ marginRight: "8px" }} /> Gerar
          </button>
        </form>

        {tabelaVisible && (
          <div className="tabela-wrapper">
            <table className="tabela-resultados">
              <thead>
                <tr>
                  <th>
                    <FaFileAlt style={{ marginRight: "8px" }} /> Número DAM
                  </th>
                  <th>
                    <FaCalendarAlt style={{ marginRight: "8px" }} /> Exercício
                  </th>
                  <th>
                    <FaListUl style={{ marginRight: "8px" }} /> Inscrição
                  </th>
                  <th>
                    <FaDollarSign style={{ marginRight: "8px" }} /> Valor
                  </th>
                  <th>
                    <FaCalendarCheck style={{ marginRight: "8px" }} /> Vencimento
                  </th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {dadosTabela.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      color: item.pago
                        ? "gray" // Cinza claro para pagos
                        : item.vencido
                        ? "red" // Vermelho para vencidos
                        : "inherit", // Cor padrão para itens normais
                      opacity: item.pago ? 0.8 : 1, // Mais claro para pagos
                    }}
                  >
                    <td>{item.numeroDAM}</td>
                    <td>{item.exercicio}</td>
                    <td>{item.inscricao}</td>
                    <td>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.valor)}
                    </td>
                    <td>{item.vencimento}</td>
                    <td>
                      {item.pago ? (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          Pago <FaCheckCircle style={{ color: "green" }} />
                        </span>
                      ) : (
                        <button
                          className="icon-btn print-btn"
                          title="Imprimir"
                        >
                          <FaPrint />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total Valor:</td>
                  <td colSpan="3">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(
                      dadosTabela.reduce((total, item) => total + item.valor, 0)
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default SegundaViaTFF;
