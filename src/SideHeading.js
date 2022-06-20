import Box from '@mui/material/Box';
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
          opacity: 0.6
        }
      }
    }
  );

  return(
    <Box>
      <ThemeProvider theme={theme1}>
        <Typography
          sx={{
            top:15,
            left:50,
            position: "fixed",
            width: "29%"
          }}
        >
          Movie Forum
        </Typography>
      </ThemeProvider>
    </Box>
  );
}

export default SideHeading;
