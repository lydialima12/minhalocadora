import "./Lista.css";

import { Link, useHistory } from "react-router-dom";
import Botao from "../botao/Botao";
import React, { Component, useState } from 'react';
import api from '../../servicos/api';
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import Swal from 'sweetalert2';

function atualizarPagina() {
  //window.location.reload(true);
  window.location.assign("https://thirsty-easley-928334.netlify.app/listadefilmes");  
}



class Lista extends Component {
  
  

  state = {
    filmes: [],
  }

  teste = {
    bola: ''
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
      Swal.fire({

        title: 'Excluído!',
        html: 'Seu vídeo foi excluído com sucesso!',
        icon: 'success',
        confirmButtonColor: '#0080c0',
        timer: 4000
        }).then(()=>{
          atualizarPagina();
        });      
    }
    



    return (
      <div>
        <div className="containerTitulo">
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
                  {/* <Botao onClick={() => apagarFilme(filme.id)} title="excluir" /> */}

                  <Link to={{ pathname: `/filmes/${filme.id}` }} >
                    <h3 className="btnEditar"><AiOutlineEdit />editar</h3>
                    {/* <button>Edit</button> */}
                  </Link>
                  <h3 className="btnApagar" onClick={() => apagarFilme(filme.id)}><MdDeleteOutline /> excluir</h3>
                </div>
              </li>
            </div>
          ))}
        </div>
        {/* <input type="text" value={filmeObj.nome} /> */}
      </div>
    );
  };
};
export default Lista;