import * as React from 'react';
import { Box } from '@mui/material';
import AppBar from './appBar/AppBar';
import Navigation from './navigation/Navigation';

interface HeaderProps {
  window?: () => Window;
}
export const Header: React.FC = (props: HeaderProps) => {
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <Navigation
        container={container}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
};
export default Header;
