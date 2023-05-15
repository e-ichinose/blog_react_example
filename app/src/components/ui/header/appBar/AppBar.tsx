import React from 'react';
import { AppBar as MUIAppBar } from '@mui/material';
import { Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface AppBarProps {
  handleDrawerToggle: () => void;
}
export const AppBar: React.FC<AppBarProps> = ({ handleDrawerToggle }: AppBarProps) => {
  return (
    <MUIAppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ブログ記事
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </MUIAppBar>
  );
};
export default AppBar;
