import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/Form/index";
// styled-components
import { CadastroAlunoContainer } from "./styles";
import { Input } from "../../styles/objects/input";
import { Button } from "../../styles/objects/button";
// imgs
import logoImg from "../../assets/logo-2.svg";

const CadastroAluno = () => {
  return (
    <CadastroAlunoContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container md={4}></Grid>
          <Grid item container xs={12} md={4}>
            <Form title="CADASTRE-SE" subtitle="E APROVEITE!">
              <label htmlFor="email">Nome completo</label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome completo"
                required
              />

              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Digite o seu email"
                required
              />

              <label htmlFor="email">Confirme seu e-mail</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Confirme o seu email"
                required
              />

              <label htmlFor="senha">Senha</label>
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite sua senha"
                required
              />

              <label htmlFor="senha">Confirme sua senha</label>
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Confirme sua senha"
                required
              />

              <Button
                background="var(--secondary-1)"
                color="var(--support-4)"
                width="100%"
                to="/aluno/painel"
              >
                Salvar Cadastro
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </CadastroAlunoContainer>
  );
};

export default CadastroAluno;
