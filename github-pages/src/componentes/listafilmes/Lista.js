import "./Lista.css";
import { Link } from "react-router-dom";
import Botao from "../botao/Botao";
import React, { Component } from 'react';
import api from '../../servicos/api';
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";


class Lista extends Component {


  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('filmes');
    this.setState({ filmes: response.data });
  }




  render() {
    const { filmes } = this.state;

    function apagarFilme(id) {
      // const  [filmes, setFilmes] = useState([]);
      axios.delete(`https://api-minha-locadora.herokuapp.com/filmes/${id}`);
      // setFilmes(filmes.filter(filme => filme._id !== id));
    }

    return (
      <div>
        <div>
          <h1>Listar os Filmes</h1>
          <Link to="/">
            <Botao title="voltar" />
          </Link>
        </div>
        <div className="containerLista">
          {filmes.map(filme => (
            <div className="containerFilme">
              <li className="listaFilme" key={filmes?.id}>
                <h2 className="tituloFilme">
                  {filme?.nome}
                </h2>
                <h2 className="lancamento">Lançamento: {filme?.lancamento}</h2>
                <h2 className="diretor">Diretor: {filme?.diretor}</h2>
                <div className="acoes">
                  {/* <Botao title="editar" /> */}
                  {/* <Botao onClick={apagar(filme._id)} title="excluir" /> */}

                  <h3 className="btnEditar"><AiOutlineEdit /> editar</h3>
                  <h3 className="btnApagar" onClick={() => apagarFilme(filmes._id)}><MdDeleteOutline /> excluir</h3>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    );
  };
};
export default Lista;