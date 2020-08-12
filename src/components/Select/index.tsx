import React, { SelectHTMLAttributes } from "react";
// styles
import { SelectContainer } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const SelectInput: React.FC<SelectProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <SelectContainer>
      <label htmlFor={name}>{label}</label>
      <select value="" name={name} id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};

export default SelectInput;
