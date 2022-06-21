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
import poster from "./samplePoster.jpg";

function MoviePage(){
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
      <Card sx={{borderRadius: 5, display: "flex", flexDirection: 'row', height: 350, maxWidth: 800}}>
      <CardMedia
        component="img"
        height="350"
        image={poster}
      />
      <CardContent sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: "3rem"}}>
        <Typography gutterBottom variant="h3" component="div">
          Movie Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          released date
        </Typography>
        <Typography variant="body2" color="text.secondary">
          imdb rating
        </Typography>
        <Typography variant="body2" color="text.secondary">
          genre
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PLOT: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <CardActions>
          <ForumButton />
          <TrailerButton/>
          <HomeButton />
        </CardActions>
      </CardContent>
      </Card>
      <WatchedButton />

      </Box>
    </>
  );
}

export default MoviePage;
