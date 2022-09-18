import SideHeading from "./SideHeading.js";
import SearchBar from "./SearchBar.js";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PopularCarousel from "./PopularCarousel.js";
import Dashboard from "./Dashboard.js";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import ForumButton from "./ForumButton.js";

function Home() {

  const navigate = useNavigate();


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
      <Typography variant="h5" sx={{color: "white", border: "3px solid white"}}>POPULAR MOVIES</Typography>
      </ ThemeProvider>
      <PopularCarousel />
      </Box>
      <ForumButton />

    <a href="http://localhost:8501/" target="blank" className="recommendButton"
      sx={{ml:"90%", mb: "0%"}}
      // onClick={() => {navigate("http://localhost:8501/")}}
    >RECOMMEND ME MOVIES!</a>
    </ Box>

    </>
  );
}
export default Home;
