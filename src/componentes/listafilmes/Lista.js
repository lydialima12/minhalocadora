// import React from "react";
import "./Lista.css";
import { Link } from "react-router-dom";
import Botao from "../botao/Botao";
// import { Container, Row, Col } from 'reactstrap';


// //Import do axios para fazer as chamadas à api
// import api from "../../servicos/api";
// import { useEffect, useState } from "react";

// export function Lista() {
//     const [filme, setFilme] = useState();

//     useEffect(() => {
//         api.get("/filmes/2").then((resposta) => setFilme(resposta.data)).catch((err) => {
//             console.error("Não foi possível carregar os filmes", + err);
//         })
//     }, []);

//     return (
//         <main>

//             <div className="containerCadastrar">
//                 <h1>Lista de filmes</h1>
//                 <Link to="/">
//                     <Botao title="voltar" />
//                 </Link>
//             </div>
//             <div>
//                 <p>Filme: {filme?.nome}</p>
//                 <p>Lançamento: {filme?.lancamento}</p>
//             </div>
//         </main>
//     );
// }

// export default Lista;

import React, { Component } from 'react';
import api from '../../servicos/api';

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

    return (
      <main>
        <div>
          <h1>Listar os Filmes</h1>
          <Link to="/">
            <Botao title="voltar" />
          </Link>
        </div>
        <section className="containerLista">
          {filmes.map(filme => (
            <div className="containerFilme">
              <li className="listaFilme" key={filmes?.id}>
                <h2 className="tituloFilme">
                  {filme?.nome}
                </h2>
                <h2 className="lancamento">Lançamento: {filme?.lancamento}</h2>
                <h2 className="diretor">Diretor: {filme?.diretor}</h2>

              </li>
            </div>
          ))}
        </section>
      </main>
    );
  };
};
export default Lista;