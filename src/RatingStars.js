import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./Firebase.js";
import { UserAuth } from './Context/AuthContext.js';

function RatingStars(props) {
  const { user } = UserAuth();

  const usersRef = collection(db, `/users/${user.uid}/ratings`);
  getDocs(usersRef)
    .then((snapshot) => {
      // console.log(snapshot.docs);
      let userRatings = []
      snapshot.docs.forEach((doc) => {
        userRatings.push({...doc.data(), id: doc.id})
      })
      console.log(userRatings);
    });

  return (
    <Stack sx={{mb: "6%", display: "flex", alignItems: "center"}} spacing={1}>
    <Typography variant="body1">
      Rate it!
    </Typography>
      <Rating onChange={(event)=> {addDoc(usersRef, {rating: event.target.value,title: props.title})}} name="half-rating" defaultValue={0} precision={0.5} />
    </Stack>
  );
}

export default RatingStars;
