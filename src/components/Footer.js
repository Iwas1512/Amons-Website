import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(17, 34, 64, 0.95)',
  backdropFilter: 'blur(8px)',
  color: '#8892b0',
  padding: theme.spacing(4, 0),
  position: 'relative',
  zIndex: 1,
}));

const SocialButton = ({ icon, href, label }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    style={{ display: 'inline-block' }}
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
        color: '#64ffda',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#64ffda',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {icon}
    </IconButton>
  </motion.div>
);

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#8892b0',
  textAlign: 'center',
  fontSize: '0.9rem',
  marginTop: theme.spacing(2),
  '& .accent': {
    color: '#64ffda',
    fontWeight: 500,
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
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
            <SocialButton
              icon={<EmailIcon />}
              href="mailto:contact@avatarof.success"
              label="Email"
            />
          </Box>
          
          <Divider 
            sx={{ 
              width: '100%', 
              maxWidth: '200px',
              borderColor: 'rgba(100, 255, 218, 0.2)',
            }} 
          />

          <Box sx={{ textAlign: 'center' }}>
            <FooterText>
              Designed and built with <FavoriteIcon sx={{ color: '#64ffda', fontSize: '1rem', verticalAlign: 'middle' }} /> by <span className="accent">Anlil</span>
            </FooterText>
            <FooterText>
              © {currentYear} All rights reserved.
            </FooterText>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 