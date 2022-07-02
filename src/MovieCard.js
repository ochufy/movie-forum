import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Axios from "axios";
import {useState} from "react";

function MovieCard(props) {

  var infoLink = "http://www.omdbapi.com/?apikey=450279fa&i=" + props.imdbId;

  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState("");

  Axios.get(infoLink)
  .then(
    (response) => {
      setPoster(response.data.Poster);
      setTitle(response.data.Title);
      setGenres(response.data.Genre);
    }
  )

  return (
    <Card  sx={{ height: 440, width: 225, margin: "auto"}}>
        <CardMedia
          component="img"
          width="185.3"
          height="274.233"
          image={poster}
        />

        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {genres}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="error">
          Rate
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
