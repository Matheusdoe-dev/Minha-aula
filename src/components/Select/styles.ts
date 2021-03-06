import styled from "styled-components";

interface Props {
  width?: string;
  color?: string;
  background?: string;
}

export const SelectContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-bottom: var(--gap);
    }

    select {
      background: ${(props: Props) =>
        props.width ? props.width : `var(--support-1)`};
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

      @media (max-width: 960px) {
        display: block;
        width: 100%;
      }
    }
  }
`;
