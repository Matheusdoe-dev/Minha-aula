import styled from "styled-components";
// bg
import introBg from "../../assets/intro-bg.jpg";

export const IntroContainer = styled.main`
  & {
    height: 100vh;
    background: url(${introBg}) repeat-y;

    h1 {
      &:after {
        content: "";
        display: block;
        width: 88px;
        border: 3px solid var(--support-4);
        margin: var(--gap) 0;
        opacity: 20%;
      }
    }

    p {
      margin-bottom: var(--gap-md);
    }

    h1,
    p {
      max-width: 629px;
    }

    a {
      margin-right: var(--gap);
    }

    img {
      border-radius: 5px;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14)),
        drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.12)),
        drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.2));
    }

    @media (max-width: 960px) {
      & {
        height: auto;
        padding: 0 0 var(--gap-xl) 0;

        a {
          margin-right: 0;
        }
      }
    }
  }
`;

export const Buttons = styled.div`
  @media (max-width: 960px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;

      a {
        display: block;
        width: 100%;
        margin-bottom: var(--gap);
      }
    }
  }
`;
