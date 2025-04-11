import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { styled } from '@mui/material/styles';

const LogoText = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  background: 'linear-gradient(45deg, #4a90e2, #2952c4)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: 'bold',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  padding: '0.5rem 0',
  '&:hover': {
    transform: 'scale(1.05)',
    textShadow: '0 0 20px rgba(74, 144, 226, 0.5)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'Get Started', 'About', 'Contact'];

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
            to={item.toLowerCase().replace(' ', '-')}
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
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ 
            flexGrow: 1, 
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <LogoText variant="h6">
            <ReactTyped
              strings={['Amon da goat, test test']}
              typeSpeed={50}
              backSpeed={50}
              backDelay={3000}
              loop
              style={{ 
                display: 'inline-block',
                paddingLeft: '0.5rem'
              }}
              cursorChar="|"
            />
          </LogoText>
        </Link>
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
                edge="end"
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
                  to={item.toLowerCase().replace(' ', '-')}
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
  );
};

export default Navbar; 