import React from "react";
// styles
import { FormContainer } from "./styles";

interface Props {
  title: string;
  subtitle?: string;
  children: any;
  onSubmit?: any;
}

const Form: React.FC<Props> = ({ title, subtitle, children, onSubmit }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <h3>{title}</h3>
      <p>{subtitle}</p>

      {children}
    </FormContainer>
  );
};

export default Form;
