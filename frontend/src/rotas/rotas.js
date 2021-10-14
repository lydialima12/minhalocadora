import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../componentes/home/Home";
import Lista from "../componentes/listafilmes/Lista";
import Cadastrar from "../componentes/cadastrofilme/Cadastrar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* O exact força a aplicação pesquisar a rota exata. Sem o exact, a aplicação pesquisa a rota considerando a / */}
        <Route exact component={Home} path="/" />
        <Route component={Lista} path="/listadefilmes" />
        <Route component={Cadastrar} path="/cadastrarfilme" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
