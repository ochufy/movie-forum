import SideHeading from "./SideHeading.js";
import SearchBar from "./SearchBar.js";
import MovieCard from "./MovieCard.js";
import Box from '@mui/material/Box';
import ForumButton from "./ForumButton.js";


function Home() {
  return (
    <div>
    <SideHeading />
    <SearchBar />
    <Box
    sx={{
      width: "90%",
      height: 450,
      margin: "2% auto",
      //backgroundColor: 'blue',
      display: "flex",
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}
    >
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ Box>
    {/*<ForumButton />*/}
    </div>
  );
}

export default Home;
