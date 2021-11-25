import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import style from "styled-components";

const FooterStyled = style.footer`
position: fixed;
left: 0;
bottom: 0;
width: 100%
` 

const Footer: React.FC = () => {
  return (
    <FooterStyled >
      <AppBar position="static">
        <Container fixed>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography color="inherit">
              Copyright BIT 2021.
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </FooterStyled>
  );
}

export default Footer;