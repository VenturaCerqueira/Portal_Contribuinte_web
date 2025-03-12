import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BottomFixed from './components/bottom/bottom_fixed/FixedButtons';
import Acessessibilidade from './components/acessebilidade/TopAccessibilityBar'
import Headers from './components/header/Header'
import Navbars  from './components/navbar/Navbar';
import Footers from  './components/footer/footer_layout'

// Contribuinte
import Emissao_cnd from './pages/Contribuinte/Emissao_cnd';
import Validacao_cnd from './pages/Contribuinte/validacao_cnd';
import Validacao_certidao from './pages/Contribuinte/Validacao_certidao_de baixa_atividade';
import DeclaracaoNao from './pages/Contribuinte/Declaracao_nao_inscrito';

// Mobiliário
import Via_2_iss from './pages/Mobiliario/2_via_iss';
import Via_2_tff from './pages/Mobiliario/2_via_tff';
import ConsultarAutenticidade from './pages/Mobiliario/Consultar_autenticidade';

// Imobiliário
import Via_2_iptu from './pages/Imobiliario/2_via_iptu';
import Via_2_itiv from './pages/Imobiliario/2_via_itvi';

// Protocolo


// NFS-e


// Estilos globais
import '../src/assets/styles/global.css';
import '../src/assets/styles/reset.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Acessessibilidade />
      <Headers />
      <BottomFixed />
      <Navbars />
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Home />} />

        {/* Rotas para Contribuinte */}
        <Route path="/contribuinte/emissao-cnd" element={<Emissao_cnd />} />
        <Route path="/contribuinte/validacao-cnd" element={<Validacao_cnd />} />
        <Route path="/contribuinte/validacao-certidao" element={<Validacao_certidao />} />
        <Route path="/contribuinte/declaracao-nao-inscrito" element={<DeclaracaoNao />} />

        {/* Rotas para Mobiliário */}
        <Route path="/mobiliario/emissao-cnd" element={<Emissao_cnd />} />
        <Route path="/mobiliario/validacao-cnd" element={<Validacao_cnd />} />
        <Route path="/mobiliario/2via-iss" element={<Via_2_iss />} />
        <Route path="/mobiliario/2via-tff" element={<Via_2_tff />} />
        <Route path="/mobiliario/consultar-autenticidade" element={<ConsultarAutenticidade />} />

        {/* Rotas para Imobiliário */}
        <Route path="/imobiliario/2via-iptu" element={<Via_2_iptu />} />
        <Route path="/imobiliario/2via-itiv" element={<Via_2_itiv />} />

        {/* Rotas para Protocolo */}
      

        {/* Rotas para NFS-e */}

      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
