import MovieCard from "./MovieCard.js";
import Axios from "axios";
import {useState} from "react";

function PopularCarousel() {

  var mostPopularMovies = "https://imdb-api.com/en/API/MostPopularMovies/k_w49t687e";
  const [popularId1, setPopularId1] = useState("");
  const [popularId2, setPopularId2] = useState("");
  const [popularId3, setPopularId3] = useState("");
  const [popularId4, setPopularId4] = useState("");
  const [popularId5, setPopularId5] = useState("");


  Axios.get(mostPopularMovies)
    .then(
      (response) => {
        setPopularId1(response.data.items[0].id);
      }
  )
  Axios.get(mostPopularMovies)
    .then(
      (response) => {
        setPopularId2(response.data.items[1].id);
      }
  )
  Axios.get(mostPopularMovies)
    .then(
      (response) => {
        setPopularId3(response.data.items[2].id);
      }
  )
  Axios.get(mostPopularMovies)
    .then(
      (response) => {
        setPopularId4(response.data.items[3].id);
      }
  )
  Axios.get(mostPopularMovies)
    .then(
      (response) => {
        setPopularId5(response.data.items[4].id);
      }
  )


  return(
    <>
      <MovieCard imdbId={popularId1}/>
      <MovieCard imdbId={popularId2}/>
      <MovieCard imdbId={popularId3}/>
      <MovieCard imdbId={popularId4}/>
      <MovieCard imdbId={popularId5}/>
    </>
  )
}

export default PopularCarousel;
