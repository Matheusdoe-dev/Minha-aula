import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Input from "../../components/Input/index";
// styled-components
import { UserRegisterContainer } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import logoImg from "../../assets/logo-2.svg";

const UserRegister = () => {
  return (
    <UserRegisterContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container md={4}></Grid>
          <Grid item container xs={12} md={4}>
            <h3>Cadastre-se</h3>
            <form>
              <Input
                label="Nome completo"
                name="name"
                placeholder="Digite seu nome completo"
              />

              <Input
                label="E-mail"
                name="email"
                placeholder="Digite o seu email"
              />

              <Input
                label="Confirme seu e-mail"
                name="email"
                placeholder="Digite o seu email"
              />

              <Input
                type="password"
                label="Senha"
                name="senha"
                placeholder="Digite sua senha"
              />

              <Input
                type="password"
                label="Confirme sua senha"
                name="senha"
                placeholder="Digite sua senha"
              />

              <Button
                background="var(--secondary-1)"
                color="var(--support-4)"
                width="100%"
                to="/aluno/painel"
              >
                Salvar Cadastro
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </UserRegisterContainer>
  );
};

export default UserRegister;
