import HomeButton from "./HomeButton.js";
import { UserAuth } from './Context/AuthContext.js';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Account() {
  const { user } = UserAuth();
  let photoURL = user.photoURL;

  return(
    <>
    <HomeButton />
    
    <Box
      sx={{borderRadius: 5,
        display: "flex",
        flexDirection: 'row',
        height: 450,
        maxWidth: 800,
        margin: "6% auto",
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
        borderRadius="5"
      />
      <Typography variant="h6" sx={{ml:"14%", mt: "5%"}}>
        {user.displayName}
      </Typography>
    </ Card>
    </ Box>
    </>
  )
}

export default Account;
