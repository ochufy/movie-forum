import SideHeading from "./SideHeading.js";
import SearchBar from "./SearchBar.js";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PopularCarousel from "./PopularCarousel.js";
//import ForumButton from "./ForumButton.js";
// import CarouselTest from "./CarouselTest.js";

function Home() {
  return (
    <div>
    <Box
    >
    <SideHeading />
    <SearchBar />
    </Box>
    <Box
    sx={{
      width: "100%",
      height: 500,
      margin: "2% auto",
      backgroundColor: "blue",
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
          flexDirection: 'column',
          backgroundColor: "red"
        }}
      >
      <Typography variant="h5">POPULAR MOVIES</Typography>
      <PopularCarousel />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: "green"
        }}
      >
      <Typography variant="h5">OUR TOP PICKS</Typography>
      <PopularCarousel />
      </Box>
    </ Box>

    </div>
  );
}
export default Home;
