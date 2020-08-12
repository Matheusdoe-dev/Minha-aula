import styled from "styled-components";
// bg
import loginBg from "../../assets/login-bg.jpg";

export const CadastroAlunoContainer = styled.main`
  & {
    max-width: 100vw;
    height: auto;
    background: url(${loginBg});
    background-size: contain;
    background-repeat: repeat;
    padding-bottom: var(--gap-xl);

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
  }
`;
