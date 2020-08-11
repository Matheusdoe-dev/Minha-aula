import { useState, FormEvent } from "react";
import api from "../services/api";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const [materia, setMateria] = useState("Matemática");
  const [week_day, setWeekDay] = useState("1");
  const [time, setTime] = useState("19:00");

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        materia,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  };

  return {
    materia,
    week_day,
    time,
    setMateria,
    setWeekDay,
    setTime,
    searchTeachers,
    teachers,
  };
};

export default TeacherList;
