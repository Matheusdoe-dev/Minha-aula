import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/Form/index";
// styled-components
import { LoginAlunoContainer } from "./styles";
import { Input } from "../../styles/objects/input";
import { Button } from "../../styles/objects/button";
// imgs
import logoImg from "../../assets/logo.svg";

const LoginAluno = () => {
  return (
    <LoginAlunoContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container sm={4}></Grid>
          <Grid item container xs={12} sm={4}>
            <Form title="SEJA BEM VINDO ALUNO" subtitle="JÁ TEM UMA CONTA ?">
              <label htmlFor="email">E-mail</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                required
              />

              <label htmlFor="senha">Senha</label>
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite seu senha"
                required
              />

              <Button
                background="var(--secondary-1)"
                color="var(--support-4)"
                width="100%"
                to="/aluno/painel"
              >
                Entrar
              </Button>
              <span>or</span>
              <Button
                background="var(--support-1)"
                color="var(--support-4)"
                width="100%"
                to="/aluno/cadastro"
              >
                Cadastrar
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </LoginAlunoContainer>
  );
};

export default LoginAluno;
