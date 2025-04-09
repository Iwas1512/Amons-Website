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
  padding: theme.spacing(4, 0),
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
  margin: '0 auto 6rem',
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

const InfoTimeline = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(8),
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  padding: theme.spacing(4, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    bottom: '10%',
    left: '50%',
    width: '2px',
    background: 'rgba(100, 255, 218, 0.2)',
    transform: 'translateX(-50%)',
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  width: '100%',
  maxWidth: '600px',
  zIndex: 1,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: '#0a192f',
  border: '2px solid #64ffda',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  zIndex: 2,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderRadius: '50%',
    background: 'rgba(100, 255, 218, 0.1)',
    zIndex: -1,
  },
  '& .MuiSvgIcon-root': {
    color: '#64ffda',
    fontSize: '2.5rem',
  },
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#8892b0',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
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
                Amon's Draft Website
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

        <InfoTimeline>
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
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