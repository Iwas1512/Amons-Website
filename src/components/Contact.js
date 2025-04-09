import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
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

const GlassForm = styled(motion.form)(({ theme }) => ({
  background: 'rgba(17, 34, 64, 0.6)',
  backdropFilter: 'blur(16px)',
  borderRadius: '16px',
  padding: theme.spacing(6),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}));

const StyledTextField = styled(TextField)({
  '& label': {
    color: '#8892b0',
  },
  '& label.Mui-focused': {
    color: '#64ffda',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8892b0',
      transition: 'border-color 0.3s ease',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#64ffda',
    },
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
});

const AnimatedButton = styled(motion.button)({
  background: 'linear-gradient(45deg, #64ffda, #00bcd4)',
  border: 'none',
  color: '#0a192f',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Contact = () => {
  const formControls = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <StyledBox id="contact">
      <Container maxWidth="md">
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
          >
            Get in Touch
          </Typography>
        </motion.div>

        <GlassForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <motion.div
                variants={formControls}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <StyledTextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <motion.div
                variants={formControls}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <StyledTextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                variants={formControls}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <StyledTextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <motion.div
                variants={formControls}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <AnimatedButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </AnimatedButton>
              </motion.div>
            </Grid>
          </Grid>
        </GlassForm>
      </Container>
    </StyledBox>
  );
};

export default Contact; 