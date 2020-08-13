import styled from "styled-components";

export const UserLoginContainer = styled.main`
  & {
    height: 100vh;
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
