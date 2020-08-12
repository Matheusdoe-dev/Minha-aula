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
  setValue?: any;
  value?: any;
}

const SelectInput: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  setValue,
  ...rest
}) => {
  return (
    <SelectContainer>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      >
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
