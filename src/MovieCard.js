import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import {makeStyles} from "@mui/styles";
//
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   }
// });

function MovieCard() {
  //const classes = useStyles();
  // className={classes.root}
  // className={classes.media}
  return (
    <Card  sx={{ height: 450, maxWidth: 300, margin: "auto"}}>
      <CardActionArea>
        <CardMedia

          style={{height: 0, paddingTop: '83%'}}
          component="img"
          height="250"
          image="/public/samplePoster.jpg"
          //sx={{backgroundColor: "red", opacity: 0.6}}
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="error">
          Rate
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
