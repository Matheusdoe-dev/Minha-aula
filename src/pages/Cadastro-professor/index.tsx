import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/Form/index";
// styled-components
import { CadastroProfessorContainer } from "./styles";
import { Input } from "../../styles/objects/input";
import { Button } from "../../styles/objects/button";
// imgs
import logoImg from "../../assets/logo.svg";

const CadastroProfessor = () => {
  return (
    <CadastroProfessorContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container sm={4}></Grid>
          <Grid item container xs={12} sm={4}>
            <Form title="CADASTRE-SE" subtitle="E APROVEITE!">
              <label htmlFor="email">Nome completo</label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome completo"
                required
              />

              <label htmlFor="foto">
                Link da sua foto <sub>(comece com //http)</sub>
              </label>
              <Input
                type="url"
                name="foto"
                id="foto"
                placeholder="Digite o link da sua foto"
                required
              />

              <label htmlFor="whatsapp">
                Whatsapp <sub>(somente numeros)</sub>
              </label>
              <Input
                type="phone"
                name="whatsapp"
                id="whatsapp"
                placeholder="Digite o seu whatsapp"
                required
              />

              <label htmlFor="biografia">Biografia</label>
              <Input
                as="textarea"
                name="biografia"
                id="biografia"
                placeholder="Digite um pouco da sua biografia"
                style={{ height: "120px", marginBottom: "var(--gap-md)" }}
                required
              />

              <fieldset>
                <h4>Sobre aula</h4>

                <label htmlFor="materia">Matéria</label>
                <Input
                  type="text"
                  name="materia"
                  id="materia"
                  placeholder="Digite a matéria"
                  required
                />

                <label htmlFor="custo">
                  Custo da sua hora por aula <sub>(em R$)</sub>
                </label>
                <Input
                  type="text"
                  name="custo"
                  id="custo"
                  placeholder="Digite aqui sua hora por aula"
                  required
                />
              </fieldset>

              <fieldset>
                <h4>Horários disponíveis</h4>

                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <label htmlFor="dias">Dias da semana</label>
                    <Input
                      type="text"
                      name="dias"
                      id="dias"
                      placeholder="dias"
                      required
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <label htmlFor="das">Das</label>
                    <Input type="time" name="das" id="das" required />
                  </Grid>
                  <Grid item xs={3}>
                    <label htmlFor="ate">Até</label>
                    <Input type="time" name="ate" id="ate" required />
                  </Grid>
                </Grid>
              </fieldset>

              <Button
                background="var(--secondary-1)"
                color="var(--support-4)"
                width="100%"
                to="/professor/painel"
              >
                Salvar Cadastro
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </CadastroProfessorContainer>
  );
};

export default CadastroProfessor;
