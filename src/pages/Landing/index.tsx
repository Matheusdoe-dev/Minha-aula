import React from "react";
// components
import { Grid, Container } from "@material-ui/core";
import Header from "../../components/Header/index";
// styled-components
import { IntroContainer, Buttons } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import introImg from "../../assets/intro-img.jpg";
import logoImg from "../../assets/logo.svg";

const Landing = () => {
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
            <Grid item container xs={12} md={7}>
              <h1>SUA PLATAFORMA DE AGENDAMENTO DE AULAS</h1>
              <p>
                Marque com um professor, ou aluno, e assista ou lecione aulas de
                onde estiver
              </p>
              <Buttons>
                <Button to="/teacher-list">Assista aulas</Button>
                <Button
                  background="var(--secondary-2)"
                  color="var(--support-4)"
                  to="/class-register"
                >
                  Dê aulas
                </Button>
              </Buttons>
            </Grid>
            <Grid item container xs={12} md={5}>
              <img src={introImg} alt="Imagem da introdução" />
            </Grid>
          </Grid>
        </Container>
      </IntroContainer>
    </>
  );
};

export default Landing;
