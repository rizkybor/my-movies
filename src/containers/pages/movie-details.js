import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getMoviesDetail } from "../../store/actions/movies";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "mui-image";
import { Stack, Button, Typography, Container, Grid } from "@mui/material";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let navigate = useNavigate();
  const MovieDetails = useSelector((state) => state.movies.moviesDetail);

  useEffect(() => {
    dispatch(getMoviesDetail(id));
  }, []);

  let backToHome = () => {
    navigate(`/`);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Fragment>
      <Container sx={{ marginTop: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <Image
                  src={MovieDetails.url}
                  height="100%"
                  widht="100%"
                  fit="cover"
                ></Image>
              </Item>
            </Grid>
            <Grid item xs={9}>
              <Item sx={{ textAlign: "left", padding: 5 }}>
                <Typography variant="h5" gutterBottom component="div">
                  {MovieDetails.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  {MovieDetails.tagline}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Item>Popularity : {MovieDetails.popularity}</Item>
                  <Item>Genre Movie : "-"</Item>
                  <Item>Release Date : {MovieDetails.release_date} </Item>
                  <Item>Vote Average : {MovieDetails.vote_average}</Item>
                </Stack>
                <Typography
                  sx={{ marginTop: 2 }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Overviews
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {MovieDetails.overview}
                </Typography>
              </Item>
              <Stack direction="row" justifyContent="flex-end">
                <Button
                  onClick={backToHome}
                  sx={{ marginTop: 3 }}
                  variant="contained"
                >
                  Back to List Movies
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}
