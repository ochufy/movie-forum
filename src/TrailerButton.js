import Button from "@mui/material/Button";
import Axios from "axios";
import {useState} from "react";

function TrailerButton(props){

  const [videoLink, setVideoLink] = useState("");
  var trailerLink = "https://imdb-api.com/en/API/Trailer/k_i9n94ek2/" + props.id;

  const getLink = () => {
    Axios.get(trailerLink)
    .then(
      (response) => {
        console.log(response.data.link);
        setVideoLink(response.data.link);
        window.open(videoLink);
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
