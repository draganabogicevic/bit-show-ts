import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"


const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container fixed>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link to="/" className={style.link}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                BIT Shows
              </Typography>
            </Link>
            <Link to="/about" className={style.link}>
              <Typography color="inherit">
                About
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
