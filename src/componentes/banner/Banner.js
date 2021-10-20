import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Botao from "../botao/Botao";

import "./Banner.css";

import teste from "./../../assets/incriveis2.png";

function Banner() {
  return (
    
      <div className="banner">
        <Jumbotron className="divisao">
          <section className="">
            <h1 className="titulo">
              Cadastre seus filmes, séries e muito mais.
            </h1>
            <h1 className="titulo">É grátis!</h1>
            <h2 className="subtitulo">Cadaste de onde quiser.</h2>
            <p>
              Salve seus títulos favoritos e sempre tenha sua lista para
              conferir e compartilhar. Acompanhe as novidades no celular,
              tablet, Smart TV ou notebook sem pagar nada por isso.
            </p>
            <section className="botoes">
              <Link to="/cadastrarfilme">
                <Button className="btnPrimario">Cadastrar</Button>
              </Link>
              <Link to="/listadefilmes">
                <Botao title="Listar" />
                {/* <Button className="btnSecundario">Listar</Button> */}
              </Link>
            </section>
          </section>
        </Jumbotron>
        <Jumbotron className="divImagem">
          <section className="divImagem">
            <img
              className="divImagem"
              src={teste}
              alt="Imagens dos super-herois 'os incríveis'."
              title="Os Incríveis"
            />
          </section>
        </Jumbotron>
      </div>
    
  );
}

export default Banner;