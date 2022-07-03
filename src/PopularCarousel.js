import MovieCard from "./MovieCard.js";
import Carousel from 'react-material-ui-carousel'
import Axios from "axios";
import {useState} from "react";

function PopularCarousel() {

  var mostPopularMovies = "https://imdb-api.com/en/API/MostPopularMovies/k_i9n94ek2";
  const [popularId1, setPopularId1] = useState("");
  const [popularId2, setPopularId2] = useState("");
  const [popularId3, setPopularId3] = useState("");
  const [popularId4, setPopularId4] = useState("");
  const [popularId5, setPopularId5] = useState("");


  Axios.get(mostPopularMovies)
    .then(
      (response) => {
        setPopularId1(response.data.items[0].id);
        setPopularId2(response.data.items[1].id);
        setPopularId3(response.data.items[2].id);
        setPopularId4(response.data.items[3].id);
        setPopularId5(response.data.items[4].id);
      }
  )

  return(
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible
      sx={{width:290}}
    >
      <MovieCard imdbId={popularId1}/>
      <MovieCard imdbId={popularId2}/>
      <MovieCard imdbId={popularId3}/>
      <MovieCard imdbId={popularId4}/>
      <MovieCard imdbId={popularId5}/>

    </Carousel>
  )
}

export default PopularCarousel;
