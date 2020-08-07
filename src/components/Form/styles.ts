import styled from "styled-components";

export const FormContainer = styled.form`
  & {
    width: 100%;
    color: var(--support-1);

    h3 {
      margin-bottom: calc(var(--gap) / 2);
    }

    h3,
    p {
      display: block;
      text-align: center;
    }

    p {
      margin-bottom: var(--gap-sm);
    }

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

    input {
      margin-bottom: var(--gap-md);
    }
  }
`;
