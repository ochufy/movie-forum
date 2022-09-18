import {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import RatingStars from "./RatingStars.js";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./Firebase.js";
import { UserAuth } from './Context/AuthContext.js';

function WatchedButton(props) {
  const { user } = UserAuth();
  // console.log(user.uid);

  const usersRef = collection(db, `/users/${user.uid}/watched`);
  getDocs(usersRef)
    .then((snapshot) => {
      // console.log(snapshot.docs);
      let userWatched = []
      snapshot.docs.forEach((doc) => {
        userWatched.push({...doc.data(), id: doc.id})
      })
      // console.log(userWatched);
    });

  const [rating, showRating] = useState(false);


  const handleWatched = () => {
    showRating(true);
    console.log(props.title);

    //add movie title to watched collection in users collection
    addDoc(usersRef, {title: props.title})
  }

  return (
    <Box
    sx={{
      width: "25%",
      height: "auto",
      minHeight: 150,
      display: "flex",
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'top',
    }}
    >
      <Card sx={{display: "flex", flexWrap: 'wrap', justifyContent: 'center', width: "15rem", borderRadius: 4}}>
        <FormControl sx={{marginTop: "30px", marginLeft: "5px"}}>
          <FormLabel id="demo-radio-buttons-group-label">Have you watched this movie?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="no"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes!" onClick={handleWatched}/>
            <FormControlLabel value="no" control={<Radio />} label="No" onClick={() => showRating(false)}/>
          </RadioGroup>
        </FormControl>
        {rating && <RatingStars title={props.title}/>}
      </Card>
    </Box>
  );
}
export default WatchedButton;
