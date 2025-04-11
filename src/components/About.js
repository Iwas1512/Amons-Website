import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'transparent',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: theme.spacing(4, 0),
}));

const GlassCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(17, 34, 64, 0.6)',
  backdropFilter: 'blur(8px)',
  borderRadius: '50%',
  padding: theme.spacing(4),
  height: '250px',
  width: '250px',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
}));

const ConnectedLayout = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '500px',
  margin: '2rem 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.5), transparent)',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
}));

const FeatureContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '3px',
    height: '120px',
    background: 'linear-gradient(180deg, transparent, rgba(74, 144, 226, 0.5), transparent)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  '&:hover': {
    zIndex: 10,
  },
}));

const FeatureBox = styled(Box)({
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
});

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const features = [
    { 
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
      color: '#4a90e2'
    },
    { 
      title: 'Excellence',
      description: 'Delivering quality in every project we undertake',
      color: '#2952c4'
    },
    { 
      title: 'Partnership',
      description: 'Building lasting relationships with our clients',
      color: '#4a90e2'
    },
  ];

  return (
    <StyledBox id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              marginBottom: 6, 
              color: '#4a90e2',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
            data-aos="fade-down"
          >
            About Us
          </Typography>
        </motion.div>

        <ConnectedLayout>
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
          }}>
            {features.map((feature, index) => (
              <FeatureContainer key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <GlassCard
                    as={motion.div}
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                    whileHover={{ 
                      scale: 1.2,
                      y: -20,
                      boxShadow: '0 20px 60px 0 rgba(41, 82, 196, 0.35)',
                      background: 'rgba(17, 34, 64, 0.8)',
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    sx={{
                      height: '250px',
                      width: '250px',
                      borderRadius: '50%',
                    }}
                  >
                    <FeatureBox>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          color: feature.color,
                          marginBottom: 2,
                          fontWeight: 'bold',
                          fontSize: { xs: '1.5rem', md: '1.75rem' }
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#8892b0',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          lineHeight: 1.6
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </FeatureBox>
                  </GlassCard>
                </motion.div>
              </FeatureContainer>
            ))}
          </Box>
        </ConnectedLayout>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlassCard 
            data-aos="fade-up"
            sx={{ 
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              minHeight: '300px',
              margin: '0 auto',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <Typography variant="h4" sx={{ color: '#4a90e2', marginBottom: 3, textAlign: 'center' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: '#8892b0', lineHeight: 1.8, fontSize: '1.1rem' }}>
              We are dedicated to transforming ideas into digital reality. Our team of experts combines innovation, 
              excellence, and dedication to deliver outstanding results. Whether you're looking to establish your digital presence, 
              scale your business, or revolutionize your industry, we're here to guide you every step of the way.
            </Typography>
          </GlassCard>
        </motion.div>
      </Container>
    </StyledBox>
  );
};

export default About; 