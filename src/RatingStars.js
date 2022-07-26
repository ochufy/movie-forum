import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function RatingStars() {
  return (
    <Stack sx={{mb: "6%", display: "flex", alignItems: "center"}} spacing={1}>
    <Typography variant="body1">
      Rate it!
    </Typography>
      <Rating name="half-rating" defaultValue={0} precision={0.5} />
    </Stack>
  );
}

export default RatingStars;
