import "./App.css";
import Toolbar from "./componentes/toolbar/Toolbar";
import Footer from "./componentes/footer/Footer";
import Routes from "./rotas/rotas";
import Cadastrar from "./componentes/cadastrofilme/Cadastrar";
import Lista from "./componentes/listafilmes/Lista";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes />
      <Footer />
      <Cadastrar />
      {/* <Lista /> */}
    </div>
  );
}

export default App;
