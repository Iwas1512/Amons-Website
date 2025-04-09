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
  padding: theme.spacing(8, 0),
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(17, 34, 64, 0.6)',
  backdropFilter: 'blur(8px)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const FeatureBox = styled(Box)({
  textAlign: 'center',
  marginBottom: '2rem',
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
    { title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions' },
    { title: 'Excellence', description: 'Delivering quality in every project we undertake' },
    { title: 'Partnership', description: 'Building lasting relationships with our clients' },
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
              color: '#64ffda',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            data-aos="fade-down"
          >
            About Us
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ marginBottom: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <GlassCard data-aos="fade-up" data-aos-delay={index * 200}>
                <FeatureBox>
                  <Typography variant="h4" sx={{ color: '#64ffda', marginBottom: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#8892b0' }}>
                    {feature.description}
                  </Typography>
                </FeatureBox>
              </GlassCard>
            </Grid>
          ))}
        </Grid>

        <GlassCard 
          data-aos="fade-up"
          sx={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            background: 'rgba(17, 34, 64, 0.8)',
          }}
        >
          <Typography variant="body1" sx={{ color: '#8892b0', lineHeight: 1.8 }}>
            At Avatar of Success, we believe in transforming visions into reality. Our team of dedicated professionals 
            works tirelessly to deliver innovative solutions that help our clients achieve their goals. With years of 
            experience and a passion for excellence, we're committed to pushing the boundaries of what's possible in 
            the digital realm.
          </Typography>
        </GlassCard>
      </Container>
    </StyledBox>
  );
};

export default About; 