import "./Lista.css";

import { Link } from "react-router-dom";
import Botao from "../botao/Botao";
import React, { Component, useState} from 'react';
import api from '../../servicos/api';
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";

function atualizarPagina() {
  window.location.reload(true);

}


class Lista extends Component {


  state = {
    filmes: [],
  }

  teste = {
    bola:''
  }




  async componentDidMount() {
    const response = await api.get('filmes');
    this.setState({ filmes: response.data });
  }




  render() {
    const { filmes } = this.state;    

    let filmeObj = {
      nome: 'ana',
      lancamento: '',
      diretor: '',
      id: ''
    }



    function apagarFilme(id) {
      axios.delete(`https://api-minha-locadora.herokuapp.com/filmes/${id}`);
      alert("Seu vídeo foi apagado");
      atualizarPagina();
    }

    function editarFilme(id) {
      axios.put(`https://api-minha-locadora.herokuapp.com/filmes/${id}`);
      alert("Seu vídeo foi editado");
      atualizarPagina();
    }

    function carregarDadosEditar(filme) {
      filmeObj = filme;      
      console.log(filmeObj.nome);
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
              <li className="listaFilme" key={filme?.id}>
                <h2 className="tituloFilme">
                  {filme?.nome}
                </h2>
                <h2 className="lancamento">Lançamento: {filme?.lancamento}</h2>
                <h2 className="diretor">Diretor: {filme?.diretor}</h2>
                <div className="acoes">
                  {/* <Botao title="editar" /> */}
                  {/* <Botao onClick={apagar(filme._id)} title="excluir" /> */}

                  <h3 className="btnEditar" onClick={() => carregarDadosEditar(filme)}><AiOutlineEdit /> editar</h3>
                  <h3 className="btnApagar" onClick={() => apagarFilme(filme.id)}><MdDeleteOutline /> excluir</h3>
                </div>
              </li>
            </div>
          ))}
        </div>
        <input type="text" value={filmeObj.nome} />
      </div>
    );
  };
};
export default Lista;