import SideHeading from "./SideHeading.js";
import SearchBar from "./SearchBar.js";
import Box from '@mui/material/Box';
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
      height: 450,
      margin: "2% auto",
      //backgroundColor: 'blue',
      display: "flex",
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}
    >
    <PopularCarousel />

    {/*<CarouselTest />*/}
    </ Box>
    </div>
  );
}
export default Home;
