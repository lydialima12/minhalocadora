import "./App.css";
import Toolbar from "./componentes/toolbar/Toolbar";
import Banner from "./componentes/banner/Banner";
import Footer from "./componentes/footer/Footer";

function App(props) {
  return (
    <div className="App">
      <Toolbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
