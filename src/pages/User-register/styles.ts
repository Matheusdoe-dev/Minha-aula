import styled from "styled-components";

export const UserRegisterContainer = styled.main`
  & {
    max-width: 100vw;
    height: auto;
    background: var(--base);
    padding-bottom: var(--gap-xl);
    color: var(--support-1);

    form {
      width: 100%;
    }

    h3 {
      margin: 0 auto var(--gap-lg) auto;
      color: var(--support-1);
    }

    span {
      display: block;
      text-align: center;
      margin: var(--gap-sm) auto;
    }

    h4 {
      margin-bottom: var(--gap-md);

      &::after {
        content: "";
        display: block;
        width: 46px;
        border: 1px solid var(--support-1);
        opacity: 20%;
        margin: calc(var(--gap) / 2) 0 var(--gap-md) 0;
      }
    }

    @media (max-width: 960px) {
      background: var(--base);
    }

    input,
    select,
    textarea {
      margin-bottom: var(--gap-sm);
    }
  }
`;
