import logo from './logo.svg';
import './App.css';
import { ComponenteNome } from "./Componentes/ComponenteNome.jsx";
import { ComponeteResumoSobreVoce } from './Componentes/ComponenteResumoSobreVoce.jsx';
import { ComponenteCompetencia } from "./Componentes/ComponenteCompetencia.jsx";
import { ComponenteFormacao } from './exercicio/ComponenteFormacao.jsx';

function App() {
  return (
    <div className="App">
        
        <ComponenteDadosCandidato
        nome = "Esdras"
        idade = "17"
        telefone = "41248493948"
        />

        <hr />

        <p>
          <ComponenteEndereço>Endereço</ComponenteEndereço>
        </p>

        <ComponenteEndereço

        rua = "rua Curtiba"
        bairro = "bairro Batel"
        numero = "82"
        complemento = "do lado do mercado"
        />

        <hr />

        <p>
          <ComponenteFormacao>Formação</ComponenteFormacao>
        </p>

        <ComponenteFormacao

        instituição = "HARVE"
        curso = "desenvolvimento WEB"        
        />

        <hr />

        
    </div>
  );
}

export default App;
