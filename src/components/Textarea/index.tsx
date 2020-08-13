import React, { TextareaHTMLAttributes } from "react";
// styles
import { TextAreaContainer } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  setValue?: any;
  value?: any;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  setValue,
  value,
  ...rest
}) => {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </TextAreaContainer>
  );
};

export default TextArea;
