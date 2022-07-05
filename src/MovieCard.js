import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function MovieCard(props) {

  const navigate = useNavigate();
  var id = props.imdbId;
  var infoLink = `http://www.omdbapi.com/?apikey=450279fa&i=${id}`;

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

  const logId = () => {
    navigate(`moviepage/${id}`, {state:{imdbId: {id}}});
  }
  return (
    <Card  sx={{ height: 385, width: 185.3, margin: "auto"}}>
        <CardMedia
          component="img"
          width="185.3"
          height="274.233"
          image={poster}
        />

        <CardContent sx={{paddingBottom:0}}>
          <Typography variant="subtitle1" component="div" noWrap={true}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap={true}>
            {genres}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" onClick={logId}>
          Rate
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
