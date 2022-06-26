import {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import RatingStars from "./RatingStars.js";

function WatchedButton() {
  const [rating, showRating] = useState(false);

  return (
    <Box
    sx={{
      width: "25%",
      height: 300,
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
            <FormControlLabel value="yes" control={<Radio />} label="Yes!" onClick={() => showRating(true)}/>
            <FormControlLabel value="no" control={<Radio />} label="No" onClick={() => showRating(false)}/>
          </RadioGroup>
        </FormControl>
        {rating && <RatingStars />}
      </Card>
    </Box>
  );
}
export default WatchedButton;
