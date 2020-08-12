import { createGlobalStyle } from "styled-components";

const Elements = createGlobalStyle`
    body {
        font-family: Lato, Roboto, Helvetica, Arial, sans-serif !important;
        color: var(--support-4);
        background: var(--support-3);
    }
    
    h1 {
        font-weight: 900;
    }
    
    h2,h3,h4 {
        font-weight: 700;
    }

    h1, h2, h3, h4 {
        text-transform: uppercase;
        letter-spacing: .2px;
        line-height: 1.15em;
    }

    h1 {
        font-size: 3rem;
        font-weight: 900;
        
        @media (max-width: 600px) {
            & {
                font-size: 2.25rem;
            }
        }
    }

    h2 {
        font-size: 2.25rem;
        @media (max-width: 600px) {
        & {
            font-size: 1.5rem;
        }
      }
    }

    h3 {
        font-size: 1.5rem;
    }

    p, label, span, input::placeholder {
        font-weight: 400;
    }

    p {
        font-size: 1.25rem;
        font-weight: 400rem;
        line-height: 1.5em;
    }

    a, button {
        font-size: 1.375;
        letter-spacing: .3px;
        text-transform: uppercase;
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
    }
`;

export default Elements;
