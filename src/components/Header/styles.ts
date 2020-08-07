import styled from "styled-components";

interface Props {
  background?: any;
}

export const HeaderContainer = styled.header`
  & {
    padding: var(--gap-sm) 0;
    background: ${(props: Props) => (props.background ? props.background : "")};

    img {
      width: 174px;
      height: 26px;
    }
  }
`;
