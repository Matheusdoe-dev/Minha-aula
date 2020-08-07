import React from "react";
// styles
import { FormContainer } from "./styles";

interface Props {
  title: string;
  subtitle?: string;
  children: any;
}

const Form = (props: Props) => {
  return (
    <FormContainer>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>

      {props.children}
    </FormContainer>
  );
};

export default Form;
