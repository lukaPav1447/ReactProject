import React from 'react';
import Box from '@mui/material/Box';
import MaterialBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { APPBAR_ITEMS } from '../../constants/appBarConstants';

const NavbarMenu = (props) => {
  return (
    <MaterialBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={props.onSideMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'block' },
          }}
        >
          HRM
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {APPBAR_ITEMS.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MaterialBar>
  );
};

export default NavbarMenu;
