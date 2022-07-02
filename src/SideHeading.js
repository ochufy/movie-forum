import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SideHeading(){
  const theme1 = createTheme(
    {
      typography: {
        fontFamily: "Pacifico",
        fontSize: 65,
        body1: {
          color: "white",
          opacity: 0.8
        }
      }
    }
  );

  return(
      <ThemeProvider theme={theme1}>
        <Typography
          sx={{
            top:15,
            left:50,
            width: "29%",
            position: "fixed"
          }}
        >
          Movie Forum
        </Typography>
      </ThemeProvider>
  );
}

export default SideHeading;
