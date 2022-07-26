import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import movieListForSearchBar from "./movieListForSearchBar.js";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";



import {useState} from "react";
import Axios from "axios";

function SearchBar() {

  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  var id;
  const getId = () => {
    Axios.get(`https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_IMDB_KEY}/` + title)
    .then(
      (response) => {
        id = response.data.results[0].id;
        console.log(id);
        console.log(response.data.results[0].title);
      }
    );
    setTimeout(()=>
      {navigate(`moviepage/${id}`, { replace: true, state:{imdbId: {id}}})},
    3000);

  }

  return(
    <Box>
      <Autocomplete
      freeSolo
      sx={{
        width: "55%",
        backgroundColor: "white",
        opacity: 0.8,
        margin: "3rem 5rem auto auto",
        mb: 0,
        borderRadius: 1
      }}
        options={movieListForSearchBar.map((option) => option.title)}
        // inputValue={title}
        onInputChange={(event, newTitle) => {
          setTitle(newTitle);
          // console.log(title);

        }}
        renderInput={(params) =>
          <TextField
            {...params}
            label="search movie"
            sx={{
              "& label": {
                marginLeft: "40%",
                "&.Mui-focused": {marginLeft: 0},
              }
            }}
          />
        }
      />
      <Button onClick={getId} variant="contained" size="small" sx={{mt:"0.5%", ml:"90%"}}>search</ Button>
    </Box>
  );
}

export default SearchBar;
