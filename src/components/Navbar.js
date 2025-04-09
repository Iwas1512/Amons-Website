import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box, Slide, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 50,
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SocialButton = ({ icon, href, label }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconButton
        color="primary"
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
          margin: '0 8px',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#64ffda',
          },
        }}
      >
        {icon}
      </IconButton>
    </motion.div>
  );

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
      <ListItem>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <SocialButton
            icon={<InstagramIcon />}
            href="https://instagram.com"
            label="Instagram"
          />
          <SocialButton
            icon={<TwitterIcon />}
            href="https://x.com"
            label="X (Twitter)"
          />
        </Box>
      </ListItem>
    </List>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AVATAR OF SUCCESS
          </Typography>
          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SocialButton
                  icon={<InstagramIcon />}
                  href="https://instagram.com"
                  label="Instagram"
                />
                <SocialButton
                  icon={<TwitterIcon />}
                  href="https://x.com"
                  label="X (Twitter)"
                />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button 
                  color="inherit" 
                  key={item}
                  sx={{
                    mx: 1,
                    '&:hover': {
                      color: '#64ffda',
                    },
                  }}
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
              <Box sx={{ ml: 2, display: 'flex' }}>
                <SocialButton
                  icon={<InstagramIcon />}
                  href="https://instagram.com"
                  label="Instagram"
                />
                <SocialButton
                  icon={<TwitterIcon />}
                  href="https://x.com"
                  label="X (Twitter)"
                />
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 