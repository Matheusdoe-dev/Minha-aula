import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Input from "../../components/Input/index";
// styled-components
import { UserLoginContainer } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import logoImg from "../../assets/logo-2.svg";

const UserLogin = () => {
  return (
    <UserLoginContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container md={4}></Grid>
          <Grid item container xs={12} md={4}>
            <h3>Já tem uma conta?</h3>
            <form>
              <Input
                label="E-mail"
                name="email"
                placeholder="Digite seu e-mail"
              />

              <Input
                type="password"
                label="Senha"
                name="senha"
                placeholder="Digite sua senha"
              />

              <Button
                background="var(--secondary-1)"
                color="var(--support-4)"
                width="100%"
                to="/teacher-list"
              >
                Entrar
              </Button>
              <span>or</span>
              <Button
                background="var(--support-1)"
                color="var(--support-4)"
                width="100%"
                to="/user/register"
              >
                Cadastrar
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </UserLoginContainer>
  );
};

export default UserLogin;
