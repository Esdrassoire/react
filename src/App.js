import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import "font-awesome/css/font-awesome.css"
import { ToastContainer } from "react-toastify";
import { ComponenteNome } from "./Componentes/ComponenteNome.jsx";
import { ComponeteResumoSobreVoce } from './Componentes/ComponenteResumoSobreVoce.jsx';
import { ComponenteCompetencia } from "./Componentes/ComponenteCompetencia.jsx";
import { ComponenteFormacao } from './exercicio/ComponenteFormacao.jsx';
import { RouteApp } from './routes/index.jsx';

function App() {
  return (
  <RouteApp />

  )
}

export default App;
