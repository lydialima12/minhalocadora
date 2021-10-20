import "./App.css";
import Toolbar from "./componentes/toolbar/Toolbar";
import Footer from "./componentes/footer/Footer";
import Routes from "./rotas/rotas";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
