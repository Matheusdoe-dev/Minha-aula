import styled from "styled-components";
// bg
import loginBg from "../../assets/login-bg.jpg";

export const CadastroProfessorContainer = styled.main`
  & {
    max-width: 100vw;
    height: auto;
    background: url(${loginBg});
    background-size: contain;
    background-repeat: repeat;
    padding: var(--gap-xl) 0;

    span {
      display: block;
      text-align: center;
      margin: var(--gap-sm) auto;
    }

    h4 {
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

export const HorariosDisponiveis = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h4 {
      display: inline-block;
    }

    button {
      font-size: 1rem;
      text-transform: none !important;
      color: var(--secondary-1);
      padding: 0 var(--gap) var(--gap) var(--gap);
      background: none;
      border: none;
      margin: 0;
      &:hover {
        filter: brightness(85%);
      }
    }
  }
`;
