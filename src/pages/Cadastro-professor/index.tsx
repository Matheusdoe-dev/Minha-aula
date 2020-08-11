import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/Form/index";
import SelectInput from "../../components/Select/index";
// styled-components
import { CadastroProfessorContainer, HorariosDisponiveis } from "./styles";
import { Button } from "../../styles/objects/button";
import { Input } from "../../styles/objects/input";
// imgs
import logoImg from "../../assets/logo.svg";
// hooks
import CadastroProfessorHooks from "../../hooks/cadastro-professor";
import ScheduleItems from "../../hooks/schedule-items";

const CadastroProfessor = () => {
  const {
    addScheduleItem,
    scheduleItems,
    setScheduleItemValue,
  } = ScheduleItems();
  const {
    name,
    setName,
    avatar,
    setAvatar,
    bio,
    setBio,
    whatsapp,
    setWhatsapp,
    materia,
    setMateria,
    custo,
    setCusto,
    handleCreateClass,
  } = CadastroProfessorHooks();

  return (
    <CadastroProfessorContainer>
      <Header logo={logoImg} />
      <Container>
        <Grid container spacing={2}>
          <Grid item container sm={4}></Grid>
          <Grid item container xs={12} sm={4}>
            <Form
              title="CADASTRE-SE"
              subtitle="E APROVEITE!"
              onSubmit={handleCreateClass}
            >
              <fieldset>
                <h4>Seus dados</h4>
                <label htmlFor="email">Nome completo</label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Digite seu nome completo"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <label htmlFor="avatar">
                  Link da sua foto <sub>(comece com //http)</sub>
                </label>
                <Input
                  type="text"
                  name="avatar"
                  id="avatar"
                  placeholder="Digite o link da sua foto"
                  value={avatar}
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                />

                <label htmlFor="whatsapp">
                  Whatsapp <sub>(somente numeros)</sub>
                </label>
                <Input
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                  placeholder="Digite o seu whatsapp"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                  }}
                />

                <label htmlFor="bio">Biografia</label>
                <Input
                  as="textarea"
                  name="bio"
                  id="bio"
                  placeholder="Digite um pouco da sua biografia"
                  style={{ height: "120px", marginBottom: "var(--gap-md)" }}
                  value={bio}
                  onChange={(e: any) => {
                    setBio(e.target.value);
                  }}
                />
              </fieldset>

              <fieldset>
                <h4>Sobre aula</h4>

                <SelectInput
                  name="materia"
                  label="Materia"
                  value={materia}
                  onChange={(e: any) => {
                    setMateria(e.target.value);
                  }}
                  options={[
                    { value: "Matemática", label: "Matemática" },
                    { value: "Biologia", label: "Biologia" },
                    { value: "Literatura", label: "Literatura" },
                    { value: "Geografia", label: "Geografia" },
                    { value: "História", label: "História" },
                    { value: "Física", label: "Física" },
                    { value: "Química", label: "Química" },
                    { value: "Artes", label: "Artes" },
                    { value: "Inglês", label: "Inglês" },
                    { value: "Espanhol", label: "Espanhol" },
                  ]}
                />

                <label htmlFor="custo">
                  Custo da sua hora por aula <sub>(em R$)</sub>
                </label>
                <Input
                  type="text"
                  name="custo"
                  id="custo"
                  placeholder="Digite aqui sua hora por aula"
                  value={custo}
                  onChange={(e: any) => {
                    setCusto(e.target.value);
                  }}
                />
              </fieldset>

              <fieldset>
                <HorariosDisponiveis>
                  <h4>Horários disponíveis</h4>
                  <button onClick={addScheduleItem}>+ Novo horário</button>
                </HorariosDisponiveis>
                {scheduleItems.map((schedule, index) => (
                  <div key={schedule.week_day}>
                    <Grid item container spacing={2}>
                      <Grid item xs={6}>
                        <SelectInput
                          name="week_day"
                          label="Dia"
                          value={schedule.week_day}
                          onChange={(e: any) => {
                            setScheduleItemValue(
                              index,
                              "week_day",
                              e.target.value
                            );
                          }}
                          options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sabádo" },
                          ]}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <label htmlFor="from">Das</label>
                        <Input
                          type="time"
                          name="from"
                          id="from"
                          value={schedule.from}
                          onChange={(e) => {
                            setScheduleItemValue(index, "from", e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <label htmlFor="to">Até</label>
                        <Input
                          type="time"
                          name="to"
                          id="to"
                          value={schedule.to}
                          onChange={(e) =>
                            setScheduleItemValue(index, "to", e.target.value)
                          }
                        />
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </fieldset>

              <Button
                as="button"
                type="submit"
                background="var(--secondary-1)"
                color="var(--support-4)"
                width="100%"
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
