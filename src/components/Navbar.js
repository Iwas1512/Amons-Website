import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item} onClick={handleDrawerToggle}>
          <Link
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <ListItemText primary={item} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(0,0,0,0.8)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AVATAR OF SUCCESS
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div>
            {menuItems.map((item) => (
              <Button 
                color="inherit" 
                key={item}
              >
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 