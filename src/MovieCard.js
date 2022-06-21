import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import poster from "./samplePoster.jpg";

function MovieCard() {
  return (
    <Card  sx={{ height: 450, maxWidth: 300, margin: "auto"}}>
        <CardMedia
          component="img"
          height="250"
          image={poster}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Id leo in vitae turpis massa.
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
