import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import CardMovies from "../../components/card/card-components";

import Stack from "@mui/material/Stack";

import { getDataMovies, getMoviesByName } from "../../store/actions/movies";

import { useSelector, useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function MovieList() {
  const [nameMovies, setNameMovies] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies);
  const dataByName = useSelector((state) => state.movies.moviesByName);

  let onChange = (e) => {
    dispatch(getDataMovies(e.target.value));
  };

  let onChangeSearch = (e) => {
    const { name, value } = e.target;
    setNameMovies({ ...setNameMovies, [name]: value });
  };

  let searchByName = (e) => {
    e.preventDefault();
    dispatch(getMoviesByName(nameMovies.searchName));
  };

  useEffect(() => {
    if (!data.movies.length === 0) {
      dispatch(getDataMovies());
    }
    dispatch(getDataMovies("top_rated"));
  }, []);

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">List Movies</FormLabel>
            <RadioGroup
              row
              aria-label="movies"
              name="row-radio-buttons-group"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 15,
                },
              }}
            >
              <FormControlLabel
                value="top_rated"
                control={<Radio />}
                label="Top Rated Movies"
                onChange={onChange}
              />
              <FormControlLabel
                value="upcoming"
                control={<Radio />}
                label="Upcoming Movies"
                onChange={onChange}
              />
              <FormControlLabel
                value="now_playing"
                control={<Radio />}
                label="Now Playing"
                onChange={onChange}
              />
              <FormControlLabel
                value="popular"
                control={<Radio />}
                label="Popular Movies"
                onChange={onChange}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="searchName"
            label="Search by Name"
            variant="standard"
            name="searchName"
            onChange={onChangeSearch}
          />

          <IconButton
            onClick={searchByName}
            color="primary"
            aria-label="searchMovies"
            value={nameMovies.searchMovies}
            name="searchMovies"
          >
            <SearchIcon
            // onClick={}
            />
          </IconButton>
        </Stack>

        {dataByName.results ? (
          <Grid container spacing={2}>
            {dataByName.results.map((el) => (
              <CardMovies key={el.id} data={el} />
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {data.movies.map((el) => (
              <CardMovies key={el.id} data={el} />
            ))}
          </Grid>
        )}
      </Container>
    </main>
  );
}
