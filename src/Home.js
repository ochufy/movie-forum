import SideHeading from "./SideHeading.js";
import SearchBar from "./SearchBar.js";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PopularCarousel from "./PopularCarousel.js";
import Dashboard from "./Dashboard.js";
//import ForumButton from "./ForumButton.js";
// import CarouselTest from "./CarouselTest.js";

function Home() {
  const theme1 = createTheme(
    {
      typography: {
        fontFamily: "Teko",
        fontSize: 25,
      }
    }
  );
  return (
    <>
    <Dashboard />
    <Box>
    <SideHeading />
    <SearchBar />
    </Box>
    <Box
    sx={{
      width: "100%",
      height: 500,
      margin: "2% auto",
      display: "flex",
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
      <ThemeProvider theme={theme1}>
      <Typography variant="h5">POPULAR MOVIES</Typography>
      </ ThemeProvider>
      <PopularCarousel />

      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
      <ThemeProvider theme={theme1}>
      <Typography variant="h5">RECOMMENDED</Typography>
      </ ThemeProvider>
      <PopularCarousel />
      </Box>
    </ Box>
    </>
  );
}
export default Home;
