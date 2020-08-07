import React from "react";
// components
import { Grid, Container } from "@material-ui/core";
// styles
import { HeaderContainer } from "./styles";
// imgs
import { Link } from "react-router-dom";

interface Props {
  children?: any;
  background?: any;
  logo: any;
}

const Header = (props: Props) => {
  return (
    <HeaderContainer background={props.background}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item container xs={12} sm={4} alignItems="center">
            <Link to="/">
              <img src={props.logo} alt="Minha Aula" />
            </Link>
          </Grid>
          <Grid item container xs={12} sm={7} justify="flex-end">
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
