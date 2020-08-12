import styled from "styled-components";
// bg
import loginBg from "../../assets/login-bg.jpg";

export const LoginAlunoContainer = styled.main`
  & {
    height: 100vh;
    background: url(${loginBg});
    background-size: cover;

    span {
      display: block;
      text-align: center;
      margin: var(--gap-sm) auto;
    }

    @media (max-width: 960px) {
      background: var(--base);
    }
  }
`;
