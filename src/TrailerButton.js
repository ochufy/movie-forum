import Button from "@mui/material/Button";
import Axios from "axios";
import {useState} from "react";

function TrailerButton(props){

  const [videoLink, setVideoLink] = useState("");
  var trailerLink = `https://imdb-api.com/en/API/Trailer/${process.env.REACT_APP_IMDB_KEY}/${props.id}`;

  const getLink = () => {
    Axios.get(trailerLink)
    .then(
      (response) => {
        setVideoLink(response.data.link);
        // console.log(videoLink);
        setTimeout(() => {window.open(videoLink);}, 4000)

      }
    )
  }

  return(
    <Button
      variant="outlined"
      color="primary"
      onClick={getLink}
    >
      Watch Trailer!
    </Button>
  );
}

export default TrailerButton;
