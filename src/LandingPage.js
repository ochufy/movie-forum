import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function LandingPage() {
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

  return(
    <>
    <ThemeProvider theme={theme1}>
      <Typography sx={{ml: "30%", mt: "5%"}}>
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
        height: 140, width: 340,
        display: "flex",
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5
      }}
    >

    <ThemeProvider theme={theme2}>
    <Typography>
      welcome back!
    </Typography>
    </ThemeProvider>

    <Button variant="contained" color="error" size="large" startIcon={<GoogleIcon />}>
        sign in using Google
    </Button>

    </ Paper>

    <Paper
      elevation={6}
      sx={{
        ml: "39%",
        mt: "3%",
        backgroundColor: "white",
        opacity: 0.9,
        height: 140, width: 340,
        display: "flex",
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5
      }}
    >

    <ThemeProvider theme={theme2}>
    <Typography>
      new here?
    </Typography>
    </ThemeProvider>

    <Button variant="contained" size="large" startIcon={<GoogleIcon />}>
        sign up using Google
    </Button>

    </Paper>
    </>
  )
}

export default LandingPage;
