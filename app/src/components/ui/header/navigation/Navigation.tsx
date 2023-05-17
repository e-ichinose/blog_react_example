import * as React from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { NavItems } from '../../../../common/constants';

export interface NavigationProps {
  container?: () => HTMLElement;
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  container,
  drawerOpen,
  handleDrawerToggle,
}: NavigationProps) => {
  const drawerWidth = 240;
  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            ブログ
          </Typography>
          <Divider />
          <List>
            {NavItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Navigation;
