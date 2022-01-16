import React from "react";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";

import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";

import { createTheme } from "@mui/material/styles";

export default function CardComponents(props) {
  const { data } = props;
  let navigate = useNavigate();

  let cardStyle = {
    marginTop: "10px",
    width: "25vw",
    height: "auto",
    borderStyle: "outset",
  };

  let cardBody = {
    textAlign: "center",
    height: "5vw",
  };

  const theme = createTheme({
    typography: {
      fontSize: 14,
    },
  });

  let handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      item
      lg={4}
      md={4}
      sm={4}
      xs={6}
      // key={""}
    >
      <Card
        onClick={() => {
          handleClick(data.id);
        }}
        style={cardStyle}
        sx={{ maxWidth: 250 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={data.poster}
            alt="green iguana"
          />
          <CardContent style={cardBody}>
            <Typography theme={theme}>{data.title}</Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Release Date : {data.release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
