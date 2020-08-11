import React from "react";
// components
import { Grid, Container } from "@material-ui/core";
import Header from "../../components/Header/index";
// styled-components
import { IntroContainer } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import introImg from "../../assets/intro-img.jpg";
import logoImg from "../../assets/logo.svg";

const Index = () => {
  return (
    <>
      <IntroContainer>
        <Header logo={logoImg} />
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginTop: "var(--gap-lg)" }}
          >
            <Grid item container xs={12} sm={7}>
              <h1>SUA PLATAFORMA DE AGENDAMENTO DE AULAS</h1>
              <p>
                Marque com um professor, ou aluno, e assista ou lecione aulas de
                onde estiver
              </p>
              <div>
                <Button to="/aluno/login">Assista aulas</Button>
                <Button
                  background="var(--secondary-2)"
                  color="var(--support-4)"
                  to="/professor/cadastro"
                >
                  Dê aulas
                </Button>
              </div>
            </Grid>
            <Grid item container xs={12} sm={5}>
              <img src={introImg} alt="Imagen da introdução" />
            </Grid>
          </Grid>
        </Container>
      </IntroContainer>
    </>
  );
};

export default Index;
