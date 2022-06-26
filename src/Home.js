import SideHeading from "./SideHeading.js";
import SearchBar from "./SearchBar.js";
import MovieCard from "./MovieCard.js";
import Box from '@mui/material/Box';
//import ForumButton from "./ForumButton.js";

import Axios from "axios";
import {useState} from "react";



function Home() {
  const [movieId, setMovieId] = useState("");
  const [genres, setGenres] = useState("");

  const getMovie = () => {
    Axios.get("https://imdb-api.com/en/API/SearchMovie/k_i9n94ek2/jurassic")
    .then(
      (response) => {
        console.log(response.data.results[2].id);
        setMovieId(response.data.results[2].id);
      }
    )
  };

  // var url = "http://www.omdbapi.com/?apikey=450279fa&i=" + movieId;

  const getGenre = () => {
    Axios.get("http://www.omdbapi.com/?apikey=450279fa&i=" + movieId)
    .then(
      (response) => {
        console.log(response);
        setGenres(response.data.Genre);
      }
    )
  }

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
    <button onClick={getMovie}>Movie</button>
    <button onClick={getGenre}>Genre</button>

    {genres}
    </div>
  );
}
export default Home;
