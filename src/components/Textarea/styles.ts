import styled from "styled-components";

interface Props {
  width?: string;
  color?: string;
  background?: string;
}

export const TextAreaContainer = styled.div`
  & {
    label,
    input {
      display: block;
    }

    label {
      margin-bottom: var(--gap);

      sub {
        display: inline-block;
        font-size: 0.75rem;
        opacity: 75%;
      }
    }

    textarea {
      background: ${(props: Props) =>
        props.width ? props.width : `var(--support-1)`};
      height: 120px;
      opacity: 0.65;
      border-radius: 5px;
      width: ${(props: Props) => (props.width ? props.width : `100%`)};
      color: ${(props: Props) =>
        props.width ? props.width : `var(--support-4)`};
      border: none;
      padding: var(--gap);
      transition: 0.2s;
      box-sizing: border-box;

      &:focus {
        outline: none;
        filter: brightness(75%);
        transition: 0.2s;
      }
    }
  }
`;
