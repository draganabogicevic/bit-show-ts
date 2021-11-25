import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinkStyle from "./UI/LinkStyle"


const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container fixed>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <LinkStyle to="/" >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                BIT Shows
              </Typography>
            </LinkStyle>
            <LinkStyle to="/about">
              <Typography color="inherit">
                About
              </Typography>
            </LinkStyle>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
