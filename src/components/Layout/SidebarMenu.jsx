import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { APPBAR_ITEMS } from '../../constants/appBarConstants';
import Drawer from '@mui/material/Drawer';

export default function SidebarMenu(props) {
  return (
    <Drawer
      //container={container}
      variant='temporary'
      open={props.openDrawer}
      onClose={props.onBackdropClick}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240,
        },
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography onClick={props.onTitleClick} variant='h6' sx={{ my: 2 }}>
          HRM
        </Typography>
        <Divider />
        <List>
          {APPBAR_ITEMS.map((item) => {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
