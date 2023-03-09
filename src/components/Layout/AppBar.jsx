import { useState } from 'react';
import Box from '@mui/material/Box';
import SidebarMenu from './SidebarMenu';
import NavbarMenu from './NavbarMenu';

export default function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavbarMenu onSideMenuClick={handleDrawerToggle} />
      <Box component='nav'>
        <SidebarMenu
          openDrawer={drawerOpen}
          onTitleClick={handleDrawerToggle}
          onBackdropClick={handleDrawerToggle}
        />
      </Box>
    </Box>
  );
}
