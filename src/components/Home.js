import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'transparent',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: theme.spacing(4),
}));

const ImageContainer = styled(motion.div)({
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto 4rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(10, 25, 47, 0.2)',
    borderRadius: '10px',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '10px',
    filter: 'brightness(1.1)',
  },
});

const ContentBox = styled(motion.div)({
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'center',
  padding: '3rem',
  background: 'rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
});

const GradientText = styled(motion.span)({
  background: 'linear-gradient(45deg, #64ffda, #00bcd4)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
});

const Home = () => {
  return (
    <StyledBox id="home">
      <Container maxWidth="lg">
        <ImageContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: '100%',
              height: '400px',
              backgroundColor: 'rgba(26, 41, 64, 0.7)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="h6" color="rgba(255,255,255,0.5)">
              Profile Image Placeholder
            </Typography>
          </Box>
        </ImageContainer>
  
        <ContentBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Typography variant="h2" sx={{ marginBottom: 2 }}>
              Welcome to <GradientText
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Avatar of Success
              </GradientText>
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Typography variant="h5" sx={{ color: '#8892b0', marginBottom: 4 }}>
              Transforming ideas into digital reality
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Typography variant="body1" sx={{ color: '#8892b0' }}>
              We specialize in creating innovative digital solutions
              that help businesses thrive in the modern world.
            </Typography>
          </motion.div>
        </ContentBox>
      </Container>
    </StyledBox>
  );
};

export default Home; 