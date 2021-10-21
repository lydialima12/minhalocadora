import "./App.css";
import Toolbar from "./componentes/toolbar/Toolbar";
import Footer from "./componentes/footer/Footer";
import Routes from "./rotas/rotas";
import Banner from "./componentes/banner/Banner";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Banner />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
