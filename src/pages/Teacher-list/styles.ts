import styled from "styled-components";

export const PainelAlunoContainer = styled.main`
  & {
    max-width: 100vw;
    height: auto;
    background-size: contain;
    background-repeat: repeat;
    padding-bottom: var(--gap-xl);
  }
`;

export const PainelHeader = styled.div`
  & {
    background: var(--base-2);

    input,
    select {
      background: var(--support-1);
      border-radius: 5px;
      border: none;
      padding: var(--gap);
    }

    label {
      color: var(--support-1);
      margin-bottom: var(--gap);
    }

    @media (max-width: 960px) {
      select,
      input {
        display: block;
        width: 100%;
      }
    }
  }
`;

export const PainelFeed = styled.section`
  & {
    padding: var(--gap-xl) 0;
  }
`;
