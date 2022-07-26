import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActions } from '@mui/material';
import ForumButton from "./ForumButton.js";
import HomeButton from "./HomeButton.js";
import TrailerButton from "./TrailerButton.js";
import WatchedButton from "./WatchedButton.js";

import Axios from "axios";
import {useState} from "react";
import {useLocation} from "react-router-dom";


function MoviePage(){

  const location = useLocation();
  var id = location.state.imdbId.id;
  var infoLink = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${id}&plot=short`;

  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [releasedDate, setReleasedDate] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [genres, setGenres] = useState("");
  const [plot, setPlot] = useState("");

  Axios.get(infoLink)
  .then(
    (response) => {
      setPoster(response.data.Poster);
      setTitle(response.data.Title);
      setReleasedDate(response.data.Released);
      setImdbRating(response.data.imdbRating);
      setGenres(response.data.Genre);
      setPlot(response.data.Plot);
    }
  )

  return(
    <>
      <Box
      sx={{
        width: "80%",
        height: 450,
        margin: "7% auto auto auto",
        display: "flex",
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row'
      }}
      >
      <Card
        sx={{
          borderRadius: 5,
          display: "flex",
          flexDirection: 'row',
          height: 450,
          maxWidth: 800
        }}>
      <CardMedia
        component="img"
        height="450"
        image={poster}
      />
      <CardContent sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: "3rem"}}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {releasedDate}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {imdbRating}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {genres}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {plot}
        </Typography>
        <CardActions>
          <ForumButton title={title} id={id}/>
          <TrailerButton id={id}/>
          <HomeButton />
        </CardActions>
      </CardContent>
      </Card>
      <WatchedButton title={title}/>
      </Box>
    </>
  );
}

export default MoviePage;
