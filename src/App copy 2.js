import logo from './logo.svg';
import './App.css';
import "font-awesome/css/font-awesome.css"
import { ComponenteNome } from "./Componentes/ComponenteNome.jsx";
import { ComponeteResumoSobreVoce } from './Componentes/ComponenteResumoSobreVoce.jsx';
import { ComponenteCompetencia } from "./Componentes/ComponenteCompetencia.jsx";
import { ComponenteFormacao } from './exercicio/ComponenteFormacao.jsx';

function App() {
  return (
    <div className="App">
        
        <p></p>
        <hr/>
        <ComponenteNome />
        <hr />
        <ComponeteResumoSobreVoce>
          Moro em curitba, faço curso de TI
        </ComponeteResumoSobreVoce> 

        <hr />

        <ComponenteCompetencia 
        nome = "HTML"
        descricao = "desenvolvimento WEB"
        />

        <hr />

        <ComponenteCompetencia 
        nome = "CSS"
        descricao = "estilo do site"
        />

        <hr />

        <ComponenteCompetencia 
        nome = "JAVA-SCRIPT"
        descricao = "funçao para o site"
        />

    </div>
  );
}

export default App;
