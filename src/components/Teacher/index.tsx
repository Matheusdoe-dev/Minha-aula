import React from "react";
// styles
import { TeacherContainer, TeacherInfo, TeacherFooter } from "./styles";
import { Button } from "../../styles/objects/button";

interface TeacherProps {
  name: string;
  materia: string;
  bio: string;
  avatar: string;
  custo: string;
  whatsapp: string;
}

const Teacher: React.FC<TeacherProps> = ({
  name,
  materia,
  bio,
  avatar,
  custo,
  whatsapp,
}) => {
  return (
    <TeacherContainer>
      <TeacherInfo>
        <img src={avatar} alt="Avatar" />
        <div>
          <h4>{name}</h4>
          <span>{materia}</span>
        </div>
      </TeacherInfo>
      <p>{bio}</p>
      <TeacherFooter>
        <p>
          Preço: <span>R$ {custo},00</span>
        </p>
        <Button
          as="a"
          color="var(--support-1)"
          background="var(--base)"
          width="260px"
          href={`https://wa.me/${whatsapp}`}
        >
          Entrar em contato
        </Button>
      </TeacherFooter>
    </TeacherContainer>
  );
};

export default Teacher;
