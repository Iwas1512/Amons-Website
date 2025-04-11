import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    background: {
      default: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        zIndex: -2
      }} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent"
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#4a90e2"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.8,
              random: false
            },
            size: {
              value: 3
            },
            links: {
              enable: true,
              distance: 150,
              color: "#4a90e2",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce"
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4,
                speed: 1,
                factor: 5,
                easing: "ease-out-quad"
              },
              push: {
                quantity: 4
              }
            }
          },
          retina_detect: true
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "auto"
        }}
      />
      <div style={{ 
        position: "relative", 
        zIndex: 1,
        minHeight: '100vh'
      }}>
        <Navbar />
        <Home />
        <GetStarted />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
