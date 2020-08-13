import styled from "styled-components";

export const ClassFormContainer = styled.main`
  & {
    min-height: 100vh;
    height: auto;
    padding-bottom: var(--gap-xl);
    background: var(--base);
    color: var(--support-1);

    h3 {
      margin: 0 auto var(--gap-lg) auto;
      color: var(--support-1);
    }

    h4 {
      margin-bottom: var(--gap-sm);

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

export const ScheduleItemsContainer = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h4 {
      display: inline-block;
      margin-bottom: 0;
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
