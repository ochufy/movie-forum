import HomeButton from "./HomeButton.js";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { UserAuth } from './Context/AuthContext.js';
import { db } from "./Firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function Account() {
  const { user } = UserAuth();
  let userWatched = [];
  let watched = [];
  const [movieList, setMovieList] = useState([]);
  const [ratedList, setRateList] = useState([]);

  const watchedRef = collection(db, `/users/${user.uid}/watched`);
  const ratingsRef = collection(db, `/users/${user.uid}/ratings`);

  useEffect(()=>{
    const getMovies = async() => {
      const data = await getDocs(watchedRef);
      setMovieList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getRatings = async() => {
      const data2 = await getDocs(ratingsRef);
      setRateList(data2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMovies();
    getRatings();
  }, []);

    const watchedMovies = (
      <div>
        <List>
          { movieList.map((item)=>(
            <ListItem key={item.id}>
              <ListItemText primary={item.title} />
            </ListItem>
            ))
          }
        </List>
      </div>
    );

    const ratedMovies = (
      <div>
        <List>
          { ratedList.map((item)=>(
            <ListItem key={item.id}>
              <ListItemText primary={item.title} />
              <ListItemText primary={item.rating} />
            </ListItem>
            ))
          }
        </List>
      </div>
    );

    const photoURL = user.photoURL;
    console.log(photoURL);

  return(
    <>
    <HomeButton sx={{position: "fixed", ml: "10%"}}/>

    <Box
      sx={{borderRadius: 5,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 450,
        maxWidth: 850,
        margin: "6% auto",
        // backgroundColor: "red"
      }}
    >

    <Card
      sx={{borderRadius: 5,
        display: "flex",
        flexDirection: 'column',
        height: 350,
        maxWidth: 300,
        margin: "auto"
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height="60%"
        image={photoURL}
        // image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F550%2F731%2Foriginal%2Fuser-icon-vector.jpg&f=1&nofb=1"
      />
      <Typography variant="h6" sx={{ml:"14%", mt: "5%"}}>
        {user.displayName}
      </Typography>
    </ Card>

    <Box className="watchedBox"
      sx={{borderRadius: 5,
        display: "flex",
        flexDirection: 'column',
        height: 350,
        width: 240,
        margin: "auto",
        backgroundColor: "white"
      }}
    >

      <Typography variant="h6" sx={{ml:"14%", mt: "5%"}}>
        Watched Movies:
      </Typography>

      {watchedMovies}

    </ Box>

    <Card
      sx={{borderRadius: 5,
        display: "flex",
        flexDirection: 'column',
        height: 350,
        width: 240,
        margin: "auto"
      }}
    >

      <Typography variant="h6" sx={{ml:"14%", mt: "5%"}}>
        Rated Movies:
      </Typography>

      {ratedMovies}

    </ Card>

    </ Box>
    </>
  )
}

export default Account;
