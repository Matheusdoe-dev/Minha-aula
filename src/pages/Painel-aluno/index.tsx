import React from "react";
// components
import Header from "../../components/Header/index";
import Menu from "../../components/Menu/index";
import { Container, Grid } from "@material-ui/core";
// styles
import {
  PainelAlunoContainer,
  PainelHeader,
  PainelFeed,
  Professor,
} from "./styles";
import { Input } from "../../styles/objects/input";
// imgs
import logoImg from "../../assets/logo-2.svg";
// utils
import { professores } from "../../utils/professores";

const PainelAluno = () => {
  return (
    <PainelAlunoContainer>
      <PainelHeader>
        <Header background="var(--base)" logo={logoImg}>
          <Menu />
        </Header>
        <Container>
          <Grid container spacing={2}>
            <Grid item container sm={3}></Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              spacing={2}
              style={{ padding: "var(--gap-md) 0" }}
            >
              <Grid item container sm={4}>
                <label htmlFor="materia">Materia</label>
                <Input
                  type="text"
                  id="materia"
                  name="materia "
                  placeholder="Search…"
                />
              </Grid>
              <Grid item container sm={4}>
                <label htmlFor="dia">Dias da semana</label>
                <Input
                  type="text"
                  id="materia"
                  name="materia "
                  placeholder="Search…"
                />
              </Grid>
              <Grid item container sm={4}>
                <label htmlFor="horario">Horario</label>
                <Input
                  type="text"
                  id="materia"
                  name="materia "
                  placeholder="Search…"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </PainelHeader>

      <PainelFeed>
        <Container>
          <Grid container spacing={2}>
            <Grid item container xs={12}>
              {professores.map((professor) => (
                <Professor key={professor.nome}>
                  <h4>{professor.nome}</h4>
                  <span>{professor.materia}</span>
                </Professor>
              ))}
            </Grid>
          </Grid>
        </Container>
      </PainelFeed>
    </PainelAlunoContainer>
  );
};

export default PainelAluno;
