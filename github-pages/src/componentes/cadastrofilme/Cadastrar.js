import React from 'react'
import axios from 'axios'
import Botao from '../botao/Botao';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Cadastrar.css';
import { BrowserRouter as Router, Link } from "react-router-dom";


const validacaoFormulario = yup.object().shape({
  nome: yup.string().required("O nome do filme é obrigatório").max(30, "O nome do filme precisa ter menos de 30 caracteres."),
  //Não consegui validar o ano de lançamento como Number
  lancamento: yup.string().required("O ano de lançamento é obrigatório").min(4, "O ano de lançamento do filme deve ter 4 dígitos."),
  diretor: yup.string().required("O nome do diretor do filme é obrigatório").max(20, "O nome do diretor  do filme precisa ter menos de 20 caracteres."),
})

function Cadastrar() {

  let history = useHistory()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validacaoFormulario)
  })

  const addFilme = data => axios.post("https://api-minha-locadora.herokuapp.com/filmes", data)
    .then(() => {
      alert("Cadastro realizado! Você será redirecionado para a home.")
      history.push("/")
    })
    .catch(() => {
      alert("Algo de errado aconteceu! Por favor tente mais tarde.")
    })

  return (
    <div className="containerCadastro">
      <div className="tituloCadastrar">
        <h1>Cadastrar filme</h1>
        <Link to="/">
          <Botao title="voltar" />
        </Link>
      </div>
      <section className="containerFormulario">
        <form onSubmit={handleSubmit(addFilme)} >
          <div className="inputs" >
            <label className="labelCadastrar">Nome do filme</label>
            <input type="text" name="nome" {...register("nome")} />
            <p className="mensagemErro">{errors.nome?.message}</p>
          </div>

          <div className="inputs" >
            <label className="labelCadastrar">Ano de lançamento</label>
            <input type="text" name="lancamento" {...register("lancamento")} />
            <p className="mensagemErro">{errors.lancamento?.message}</p>
          </div>

          <div className="inputs" >
            <label className="labelCadastrar">Diretor</label>
            <input type="text" name="diretor" {...register("diretor")} />
            <p className="mensagemErro">{errors.diretor?.message}</p>
          </div>

          <Botao type="submit" className="btnCadastro" title="Enviar" />
          

        </form>
      </section>
    </div>
  )
}

export default Cadastrar;