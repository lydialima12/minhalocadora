import React from "react";
import { Jumbotron} from "reactstrap";
import {  Link } from "react-router-dom";
import Botao from "../botao/Botao";
import "./Banner.css";
import img from "./../../assets/incriveis2.png";

function Banner() {
  return (
    <div className="banner">
      <Jumbotron className="divisao">
        <section>
          <h1 className="titulo">
            Cadastre grátis seus filmes, séries e muito mais.
          </h1>
          <h2 className="subtitulo">Cadaste de onde quiser.</h2>
          <p className="textoApoio">
            Salve seus títulos favoritos e sempre tenha sua lista para
            conferir e compartilhar. Acompanhe as novidades no celular,
            tablet, Smart TV ou notebook sem pagar nada por isso.
          </p>
          <section>
            <Link to="/cadastrarfilme">
              <Botao title="Cadastrar"/>
            </Link>
            <Link to="/listadefilmes">
              <Botao title="Listar" />
            </Link>
          </section>
        </section>
      </Jumbotron>
      <Jumbotron className="divImagem">
        <section className="divImagem">
          <img
            className="divImagem"
            src={img}
            alt="Imagens dos super-herois 'os incríveis'."
            title="Os Incríveis"
          />
        </section>
      </Jumbotron>
    </div>

  );
}

export default Banner;
