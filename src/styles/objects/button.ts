import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  width?: string;
  color?: string;
  background?: string;
}

export const Button = styled(Link)`
  & {
    display: inline-block;
    border-radius: 5px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14)),
      drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.12)),
      drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.2));
    width: ${(props: Props) => (props.width ? props.width : `200px`)};
    background: ${(props: Props) =>
      props.background ? props.background : `var(--base-2)`};
    color: ${(props: Props) =>
      props.color ? props.color : `var(--support-1)`};
    padding: var(--gap) var(--gap-sm);
    text-align: center;
    border: none;
    transition: 0.2s;
    box-sizing: border-box;

    &:hover {
      filter: brightness(85%);
      transition: 0.2s;
    }
  }
`;
