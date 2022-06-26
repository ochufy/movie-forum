import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from "./top100Films.js";

import {useState} from "react";
import Axios from "axios";

function SearchBar() {

  const [title, setTitle] = useState("");
  // const [id, setId] = useState("");

  const getId = () => {
    Axios.get("https://imdb-api.com/en/API/SearchMovie/k_i9n94ek2/" + title)
    .then(
      (response) => {
        var id = response.data.results[0].id;
        console.log(id);
      }
    )
  }

  return(
    <Stack
      spacing={2}
      sx={{
        width: "55%",
        backgroundColor: "white",
        borderRadius: 1,
        opacity: 0.5,
        margin: "3rem 5rem auto auto"
      }}>
      <Autocomplete
        options={top100Films.map((option) => option.title)}
        // inputValue={title}
        onInputChange={(event, newTitle) => {
          console.log(newTitle);

          setTitle(newTitle);
          // console.log(title);

        }}
        renderInput={(params) =>
          <TextField
            {...params}
            label="search movie"
            onKeyPress={getId}
            sx={{
              "& label": {
                marginLeft: "40%",
                "&.Mui-focused": {marginLeft: 0}
              }
            }}
          />
        }
      />

    </Stack>
  );
}

export default SearchBar;
