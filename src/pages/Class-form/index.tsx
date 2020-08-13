import React from "react";
import { Container, Grid } from "@material-ui/core";
// components
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
// styles
import { ClassFormContainer, ScheduleItemsContainer } from "./styles";
// imgs
import logoImg from "../../assets/logo-2.svg";
// hooks
import ClassFormHooks from "../../hooks/teacher-register";
import ScheduleItems from "../../hooks/schedule-items";
import Header from "../../components/Header";
import { Button } from "../../styles/objects/button";

const ClassForm = () => {
  const {
    addNewScheduleItem,
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
  } = ClassFormHooks();

  return (
    <ClassFormContainer>
      <Container>
        <Header logo={logoImg} />
        <Grid container spacing={2}>
          <Grid item container md={4} />
          <Grid item container xs={12} md={4} direction="column">
            <h3>Cadastre sua aula</h3>
            <form onSubmit={handleCreateClass}>
              <fieldset>
                <h4>Seus dados</h4>
                <Input
                  label="Nome Completo"
                  name="name"
                  placeholder="Digite seu nome completo"
                  value={name}
                  setValue={setName}
                />
                <Input
                  label="Link da sua foto"
                  name="avatar"
                  placeholder="Digite o link da sua foto"
                  value={avatar}
                  setValue={setAvatar}
                />
                <Input
                  label="Whatsapp"
                  name="whatsapp"
                  placeholder="Digite o número do seu whatsapp"
                  value={whatsapp}
                  setValue={setWhatsapp}
                />
                <Textarea
                  label="Biografia"
                  name="bio"
                  placeholder="Digite o número do seu whatsapp"
                  value={bio}
                  setValue={setBio}
                />
              </fieldset>
              <fieldset>
                <h4>Sobre a aula</h4>

                <Select
                  name="materia"
                  label="Materia"
                  value={materia}
                  setValue={setMateria}
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

                <Input
                  label="Custo da sua hora por aula"
                  name="custo"
                  placeholder="Digite aqui o preço da sua hora aula"
                  value={custo}
                  setValue={setCusto}
                />
              </fieldset>

              <fieldset>
                <ScheduleItemsContainer>
                  <h4>Horários disponíveis</h4>
                  <button onClick={addNewScheduleItem}>+ Novo horário</button>
                </ScheduleItemsContainer>

                {scheduleItems.map((schedule, index) => (
                  <div key={schedule.week_day}>
                    <Grid item container spacing={2}>
                      <Grid item xs={6}>
                        <Select
                          name="week_day"
                          label="Dia"
                          value={schedule.week_day}
                          onChange={(e) =>
                            setScheduleItemValue(
                              index,
                              "week_day",
                              e.target.value
                            )
                          }
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
                        <Input
                          type="time"
                          label="Das"
                          name="from"
                          value={schedule.from}
                          onChange={(e) =>
                            setScheduleItemValue(index, "from", e.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Input
                          type="time"
                          label="Até"
                          name="to"
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
            </form>
          </Grid>
        </Grid>
      </Container>
    </ClassFormContainer>
  );
};

export default ClassForm;
