import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'transparent',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(4),
}));

const MainContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
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
    background: 'linear-gradient(180deg, rgba(10, 25, 47, 0) 0%, rgba(10, 25, 47, 0.8) 100%)',
    borderRadius: '10px',
    zIndex: 1,
  },
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '10px',
    filter: 'contrast(1.1) brightness(1.1)',
  },
});

const ContentBox = styled(motion.div)({
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto 6rem',
  textAlign: 'center',
  padding: '3rem',
  background: 'rgba(0, 0, 0, 0.2)',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -100,
    width: '200%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.1), transparent)',
    transform: 'skewX(-15deg)',
    animation: 'shimmer 6s infinite linear',
  },
  '@keyframes shimmer': {
    '0%': {
      transform: 'translateX(-100%) skewX(-15deg)',
    },
    '100%': {
      transform: 'translateX(100%) skewX(-15deg)',
    },
  },
});

const WelcomeText = styled(motion.h1)({
  color: '#fff',
  fontSize: '4rem',
  fontFamily: 'Orbitron, sans-serif',
  fontWeight: 700,
  margin: '0 0 1rem 0',
  textAlign: 'center',
  lineHeight: 1.2,
  '@media (max-width: 600px)': {
    fontSize: '2.5rem',
  },
});

const GradientText = styled(motion.span)({
  background: 'linear-gradient(45deg, #00ffcc, #4a90e2)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'block',
  fontSize: '4.5rem',
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 700,
  letterSpacing: '0.05em',
  marginTop: '0.5rem',
  textShadow: '0 0 20px rgba(0, 255, 204, 0.3)',
  '@media (max-width: 600px)': {
    fontSize: '3rem',
  },
});

const SubTitle = styled(motion.h2)({
  color: '#8892b0',
  fontSize: '2rem',
  fontFamily: 'Rajdhani, sans-serif',
  fontWeight: 500,
  margin: '2rem 0',
  letterSpacing: '0.1em',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
});

const Description = styled(motion.p)({
  color: '#8892b0',
  fontSize: '1.2rem',
  fontFamily: 'Space Grotesk, sans-serif',
  lineHeight: 1.8,
  maxWidth: '800px',
  margin: '0 auto',
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
});

const InfoTimeline = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  padding: theme.spacing(4, 0),
  '&::before': {
    display: 'none'
  }
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  width: 'auto',
  maxWidth: '300px',
  zIndex: 1,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: '#0a192f',
  border: '2px solid #64ffda',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  position: 'relative',
  zIndex: 2,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: '50%',
    background: 'rgba(100, 255, 218, 0.1)',
    zIndex: -1,
  },
  '& .MuiSvgIcon-root': {
    color: '#64ffda',
    fontSize: '1.8rem',
  },
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: theme.spacing(0.5),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#8892b0',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const Home = () => {
  const infoItems = [
    {
      icon: <LocationOnIcon />,
      mainText: 'BASED IN AUSTIN,',
      subText: 'TEXAS',
    },
    {
      icon: <PublicIcon />,
      mainText: 'HAS HELPED MANY',
      subText: 'WORLDWIDE',
    },
    {
      icon: <VerifiedIcon />,
      mainText: 'DIGITAL ARCHITECT',
      subText: '+ HEALTH & WEALTH',
    },
  ];

  return (
    <StyledBox id="home">
      <MainContainer maxWidth="lg">
        <ImageContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            component={motion.div}
            whileHover={{ 
              scale: 1.05,
              filter: 'brightness(1.2)',
            }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: '100%',
              height: '500px',
              backgroundColor: 'rgba(26, 41, 64, 0.7)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img 
              src={require('../images/jcole.jpg')} 
              alt="J Cole"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.1) brightness(1.1)',
              }}
            />
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
            <WelcomeText>
              Welcome to
              <GradientText
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Amon's Draft Website
              </GradientText>
            </WelcomeText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <SubTitle>
              Transforming ideas into digital reality
            </SubTitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Description>
              We specialize in creating innovative digital solutions
              that help businesses thrive in the modern world.
            </Description>
          </motion.div>
        </ContentBox>

        <InfoTimeline>
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 2 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <InfoItem>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconWrapper>
                    {item.icon}
                  </IconWrapper>
                </motion.div>
                <MainText>
                  {item.mainText}
                </MainText>
                <SubText>
                  {item.subText}
                </SubText>
              </InfoItem>
            </motion.div>
          ))}
        </InfoTimeline>
      </MainContainer>
    </StyledBox>
  );
};

export default Home; 