import { useState, FormEvent } from "react";
import ScheduleItems from "./schedule-items";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const CadastroProfessores = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [materia, setMateria] = useState("");
  const [custo, setCusto] = useState("");
  const { scheduleItems } = ScheduleItems();

  const history = useHistory();

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    console.log({ name, avatar, bio, whatsapp, materia, custo, scheduleItems });

    api
      .post(`classes`, {
        name,
        avatar,
        whatsapp,

        bio,
        materia,
        custo: Number(custo),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro");
      });
  };

  return {
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
  };
};

export default CadastroProfessores;
