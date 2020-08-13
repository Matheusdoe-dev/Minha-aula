import React, { InputHTMLAttributes } from "react";
// styles
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  setValue?: any;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  setValue,
  value,
  ...rest
}) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

export default Input;
