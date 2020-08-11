import styled from "styled-components";

export const TeacherContainer = styled.div`
  & {
    padding: var(--gap);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 1px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: var(--support-1);
    margin-bottom: var(--gap-md);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TeacherInfo = styled.div`
  & {
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-sm);

    img {
      display: inline-block;
      width: 59px;
      height: 59px;
      border-radius: 50%;
      margin-right: var(--gap);
    }
  }
`;

export const TeacherFooter = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    align-items: center;
    margin-top: var(--gap-md);

    p {
      font-size: 1.125rem;
    }

    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--base);
    }
  }
`;
