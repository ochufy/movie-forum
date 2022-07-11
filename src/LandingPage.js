import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserAuth } from "./Context/AuthContext.js";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

  const Signin = () => {
    const theme1 = createTheme(
      {
        typography: {
          fontFamily: "Pacifico",
          fontSize: 90,
          body1: {
            color: "white"
          }
        }
      }
    );

    const theme2 = createTheme(
      {
        typography: {
          fontFamily: "Pacifico",
          fontSize: 30
        }
      }
    );

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    }
  }, [user, navigate]);

  return(
    <>
    <ThemeProvider theme={theme1}>
      <Typography id="landingText" sx={{ml: "30%", mt: "9%"}}>
        Movie Forum
      </Typography>
    </ ThemeProvider>

    <Paper
      elevation={6}
      sx={{
        ml: "39%",
        mt: "2%",
        backgroundColor: "white",
        opacity: 0.9,
        height: 170, width: 340,
        display: "flex",
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5
      }}
    >

    <ThemeProvider theme={theme2}>
    <Typography>
      welcome!
    </Typography>
    </ThemeProvider>

    <Button
      variant="contained" color="error" size="large"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleSignIn}
    >
        sign in using Google
    </Button>

    </ Paper>
    </>
  )
};

export default Signin;
