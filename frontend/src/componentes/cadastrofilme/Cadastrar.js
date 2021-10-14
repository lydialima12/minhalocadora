import React from "react";
import "./Cadastrar.css";
import { Link } from "react-router-dom";
import Botao from "../botao/Botao";


class Cadastrar extends React.Component {
  render() {
    return (
      <div className="containerCadastrar">
        <h1>Tela de cadastro</h1>
        <Link to="/">
          <Botao title="voltar" />
        </Link>
      </div>
    );
  }
}

export default Cadastrar;
