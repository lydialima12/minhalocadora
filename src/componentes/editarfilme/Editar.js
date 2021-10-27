import React, { useEffect } from 'react';
import './Editar.css';
import axios from 'axios'
import Botao from '../botao/Botao';
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2'

const validacaoFormulario = yup.object().shape({
    nome: yup.string().required("O nome do filme é obrigatório").max(30, "O nome do filme precisa ter menos de 30 caracteres."),
    //Não consegui validar o ano de lançamento como Number
    lancamento: yup.string().required("O ano de lançamento é obrigatório").min(4, "O ano de lançamento do filme deve ter 4 dígitos."),
    diretor: yup.string().required("O nome do diretor do filme é obrigatório").max(20, "O nome do diretor  do filme precisa ter menos de 20 caracteres."),
})


function Editar() {
    const { id } = useParams()

    let history = useHistory()

    

    const addFilme = data => axios.put(`https://api-minha-locadora.herokuapp.com/filmes/${id}`, data)
        .then(() => {
            // console.log("Deu tudo certo");
            // alert("Seu filme foi editado!");
            Swal.fire({

                title: 'Editado!',
                html: 'Seu vídeo foi editado com sucesso!',
                icon: 'success',
                confirmButtonColor: '#0080c0',
                timer: 4000
                })

            history.push("/listadefilmes");
        })
        .catch(() => {
            console.log("DEU ERRADO")
        })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validacaoFormulario)
    })

    useEffect(() => {
        axios.get(`https://api-minha-locadora.herokuapp.com/filmes/${id}`)
            .then((response) => {
                console.log('passou no useEfect');
                reset(response.data)
            })

    }, )

    return (
        <div className="containerCadastro">
            <div className="tituloCadastrar">
                <h1>Cadastrar filme</h1>
                <Link to="/">
                    <Botao className="btnVoltar" title="voltar" />
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

                    <Botao type="submit" className="btnCadastro" title="Atualizar"/>


                </form>
            </section>
        </div>
    )
}

export default Editar;