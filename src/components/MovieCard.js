import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link, Route, Routes } from "react-router-dom";
import TrailerDesc from "./TrailerDesc";
import TrailerCard from "./TrailerCard";
import MovieList from "./MovieList";

export default function MediaCard(props) {
  console.log(props.title, props.posterUrl);
  return (
    <div>
      <Card sx={{ maxWidth: 345, borderRadius: 7 }}>
        <CardMedia
          sx={{ minWidth: 345, height: 400 }}
          image={props.posterUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Box
            sx={{
              "& > legend": { mt: 2 },
              borderRadius: 2,
            }}
          >
            <Typography component="legend">Rating</Typography>
            <Rating name="read-only" value={Number(props.rating)} readOnly />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link key={props.key} to={`/trailer/${props.key}`}>
              Trailer
            </Link>
          </Button>
          <Button size="small">
            <Link key={props.key} to={`/description/${props.key}`}>
              Description
            </Link>
          </Button>
        </CardActions>
      </Card>
      {/* <Routes>
        <Route
          path={`/description/${props.id}`}
          element={<TrailerDesc />}
        ></Route>{" "}
        <Route path={`/trailer/${props.id}`} element={<TrailerCard />}></Route>
      </Routes> */}

      <Routes>
        <Route path="/movies" element={<MovieList></MovieList>}>
          {" "}
        </Route>
        <Route path="/description/:id" element={<TrailerDesc />} />
        <Route path="/trailer/:id" element={<TrailerCard />} />
      </Routes>
    </div>
  );
}
