import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/Form/index";
// styled-components
import { LoginProfessorContainer } from "./styles";
import { Input } from "../../styles/objects/input";
import { Button } from "../../styles/objects/button";
// imgs
import logoImg from "../../assets/logo.svg";

const LoginProfessor = () => {
  return (
    <LoginProfessorContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container sm={4}></Grid>
          <Grid item container xs={12} sm={4}>
            <Form
              title="SEJA BEM VINDO PROFESSOR"
              subtitle="JÁ TEM UMA CONTA ?"
            >
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
                to="/professor/painel"
              >
                Entrar
              </Button>
              <span>or</span>
              <Button
                background="var(--support-1)"
                color="var(--support-4)"
                width="100%"
                to="/professor/cadastro"
              >
                Cadastrar
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </LoginProfessorContainer>
  );
};

export default LoginProfessor;
