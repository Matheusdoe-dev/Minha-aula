import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Index from "./pages/Index/index";
import LoginAluno from "./pages/Login-aluno/index";
import LoginProfessor from "./pages/Login-professor/index";
import CadastroProfessor from "./pages/Cadastro-professor/index";
import CadastroAluno from "./pages/Cadastro-aluno/index";
import PainelAluno from "./pages/Painel-aluno/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        {/* aluno */}
        <Route path="/aluno/login" component={LoginAluno} />
        <Route path="/aluno/cadastro" component={CadastroAluno} />
        <Route path="/aluno/painel" component={PainelAluno} />
        {/* professor */}
        <Route path="/professor/login" component={LoginProfessor} />
        <Route path="/professor/cadastro" component={CadastroProfessor} />
        {/* <Route path="/professor/painel" component={PainelProfessor} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
