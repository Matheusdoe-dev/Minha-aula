import React from "react";
// components
import Header from "../../components/Header/index";
import { Container, Grid } from "@material-ui/core";
import SelectInput from "../../components/Select";
import Teacher from "../../components/Teacher/index";
// styles
import {
  TeacherListContainer,
  TeacherListHeader,
  TeacherListFeed,
} from "./styles";
import { Input } from "../../styles/objects/input";
// imgs
import logoImg from "../../assets/logo-2.svg";
// hooks
import TeacherListHook from "../../hooks/teachers-list";
import { Button } from "../../styles/objects/button";

const TeacherList = () => {
  const {
    materia,
    week_day,
    time,
    setMateria,
    setWeekDay,
    setTime,
    searchTeachers,
    teachers,
  } = TeacherListHook();

  return (
    <TeacherListContainer>
      <TeacherListHeader>
        <Header background="var(--base)" logo={logoImg} />

        <Container>
          <form onSubmit={searchTeachers}>
            <Grid container spacing={2} style={{ padding: "var(--gap-md) 0" }}>
              <Grid item container xs={12} md={3}>
                <SelectInput
                  name="materia"
                  label="Materia"
                  value={materia}
                  onChange={(e) => {
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
              </Grid>
              <Grid item container xs={12} md={3}>
                <SelectInput
                  name="week_day"
                  label="Dia da semana"
                  value={week_day}
                  onChange={(e) => {
                    setWeekDay(e.target.value);
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
              <Grid item container xs={12} md={3}>
                <label htmlFor="time">Horário</label>
                <Input
                  type="time"
                  name="time"
                  id="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
              </Grid>
              <Grid item container xs={12} md={3} alignContent="flex-end">
                <Button
                  as="button"
                  type="submit"
                  background="var(--secondary-1)"
                  color="var(--support-4)"
                  width="100%"
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </TeacherListHeader>

      <TeacherListFeed>
        <Container>
          <Grid container spacing={2}>
            <Grid item container xs={12}>
              {teachers.map(
                ({
                  name,
                  materia,
                  custo,
                  teacher_id,
                  avatar,
                  whatsapp,
                  bio,
                }) => (
                  <Teacher
                    key={teacher_id}
                    name={name}
                    materia={materia}
                    custo={custo}
                    avatar={avatar}
                    bio={bio}
                    whatsapp={whatsapp}
                  />
                )
              )}
            </Grid>
          </Grid>
        </Container>
      </TeacherListFeed>
    </TeacherListContainer>
  );
};

export default TeacherList;
