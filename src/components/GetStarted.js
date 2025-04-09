import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
  background: 'rgba(17, 34, 64, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -100,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent)',
    transition: 'all 0.5s ease',
    transform: 'skewX(-15deg)',
  },
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 45px 0 rgba(100, 255, 218, 0.2)',
    '&:before': {
      left: '100%',
    },
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
  textShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#8892b0',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: theme.spacing(8),
}));

const CardButton = styled(Button)(({ theme }) => ({
  padding: '10px 24px',
  fontSize: '1rem',
  borderRadius: '25px',
  textTransform: 'none',
  marginTop: theme.spacing(2),
  background: 'transparent',
  border: '2px solid #64ffda',
  color: '#64ffda',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    transform: 'scale(1.05)',
    '& .MuiSvgIcon-root': {
      transform: 'translateX(5px)',
    },
  },
  '& .MuiSvgIcon-root': {
    marginLeft: theme.spacing(1),
    transition: 'transform 0.3s ease',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 32px',
  fontSize: '1.1rem',
  borderRadius: '30px',
  textTransform: 'none',
  marginTop: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&.primary': {
    background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
    color: '#0a192f',
    fontWeight: 'bold',
    boxShadow: '0 3px 5px 2px rgba(0, 188, 212, .3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #00bcd4 30%, #64ffda 90%)',
      transform: 'scale(1.05)',
    },
  },
  '&.secondary': {
    background: 'transparent',
    border: '2px solid #64ffda',
    color: '#64ffda',
    '&:hover': {
      background: 'rgba(100, 255, 218, 0.1)',
      transform: 'scale(1.05)',
    },
  },
}));

const GetStarted = () => {
  const showcaseItems = [
    {
      title: 'Strategic Planning',
      description: 'Develop comprehensive strategies tailored to your goals and aspirations. Our expert team will guide you through every step of the journey.',
      image: '/images/planning.jpg',
      buttonText: 'Start Planning',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions. Embrace the future with innovative technologies and strategies.',
      image: '/images/digital.jpg',
      buttonText: 'Transform Now',
    },
    {
      title: 'Success Coaching',
      description: 'Personal coaching to unlock your full potential. Get one-on-one guidance from experienced mentors who understand your journey.',
      image: '/images/coaching.jpg',
      buttonText: 'Begin Coaching',
    },
  ];

  return (
    <StyledBox id="get-started">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MainHeading>
            PROVEN TO HELP OTHERS SUCCEED
          </MainHeading>
          <SubHeading>
            Until you make the unconscious conscious, it will direct your life and you will call it fate
          </SubHeading>

          <Grid container spacing={4} sx={{ marginBottom: 6 }}>
            {showcaseItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <GlassCard>
                    <Box
                      sx={{
                        width: '100%',
                        height: '250px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        marginBottom: 3,
                        background: 'linear-gradient(45deg, #1a2940, #233554)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        <Typography 
                          variant="body2" 
                          sx={{
                            color: 'rgba(100, 255, 218, 0.7)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: 'bold',
                          }}
                        >
                          {item.title}
                        </Typography>
                      </motion.div>
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#64ffda', 
                        mb: 2,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#8892b0', 
                        textAlign: 'center',
                        mb: 3,
                        px: 2,
                        flex: 1,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CardButton>
                        {item.buttonText}
                        <ArrowForwardIcon />
                      </CardButton>
                    </motion.div>
                  </GlassCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StyledButton
                variant="contained"
                href="#contact"
                component={motion.a}
                className="primary"
              >
                Join Now
              </StyledButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StyledButton
                variant="outlined"
                href="#about"
                component={motion.a}
                className="secondary"
              >
                Learn More
              </StyledButton>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </StyledBox>
  );
};

export default GetStarted; 