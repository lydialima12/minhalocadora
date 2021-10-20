// import React from "react";
// import "./Cadastrar.css";
// import { Link } from "react-router-dom";
// import Botao from "../botao/Botao";
// import axios from "axios";

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



// class Cadastrar extends React.Component {
//   render() {

//     function adicionarFilme() {

//       const addFilme = data => axios.post('http://localhost:3001/filmes', data).then(() => {
//         console.log("deu certo");
//       })
//         .catch(() => {
//           console.log("Deu errado!")
//         })
//     }


//     return (
//       <main>
//         <div className="containerCadastrar">
//           <h1>Tela de cadastro</h1>
//           <Link to="/">
//             <Botao title="voltar" />
//           </Link>
//         </div>
//         <section>
//           <Form inline>
//             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//               <Label for="exampleEmail" className="mr-sm-2">Email</Label>
//               <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
//             </FormGroup>
//             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//               <Label for="examplePassword" className="mr-sm-2">Password</Label>
//               <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
//             </FormGroup>
//             <Button>Submit</Button>
//           </Form>
//         </section>
//       </main>
//     );
//   }
// }

// export default Cadastrar;

import React from 'react'
import axios from 'axios'

import Botao from '../botao/Botao';

import { useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

import './Cadastrar.css'

// const validationPost = yup.object().shape({
//   title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
//   description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
//   content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
// })

function Cadastrar() {

  let history = useHistory()

  const { register, handleSubmit, formState: { errors } } = useForm({
    // resolver: yupResolver(validationPost)
  })

  const addFilme = data => axios.post("https://api-minha-locadora.herokuapp.com/filmes", data)
    .then(() => {
      console.log("Deu tudo certo")
      alert("Pegou! Você será redirecionado para a home")
      history.push("/")
    })
    .catch(() => {
      console.log("DEU ERRADO")
    })

  return (
    <main className="containerCadastro">
      <div className="" >
        <h1>Cadastrar filme</h1>
        <div className="line-post" ></div>

        {/* <div className="card-body-post" >
        </div> */}
        <section className="containerFormulario">
          <form onSubmit={handleSubmit(addFilme)} >

            <div className="inputs" >
              <label>Nome do filme</label>
              <input type="text" name="nome" {...register("nome")} />
              <p className="error-message">{errors.nome?.message}</p>
            </div>

            <div className="inputs" >
              <label>Data de laçamento</label>
              <input type="text" name="lancamento" {...register("lancamento")} />
              <p className="error-message">{errors.lancamento?.message}</p>
            </div>

            <div className="inputs" >
              <label>Diretor</label>
              <input type="text" name="diretor" {...register("diretor")} />
              <p className="error-message">{errors.diretor?.message}</p>
            </div>

            <Botao type="submit" className="btnCadastro" title="Enviar" />
            <div className="btnCadastro" >
              {/* <button type="submit" >Enviar</button> */}
            </div>

          </form>
        </section>
      </div>
    </main >
  )
}

export default Cadastrar;