import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { Movies } from "./data";
import { useContext } from "react";
import MoviesContext from "./MovieList";

export default function MediaCard() {
  let { id } = useParams();
  const Filtered = Movies.filter((x) => x.id === Number(id));
  const movies = useContext(MoviesContext);
  console.log(movies);
  return (
    <div style={{ display: "inline", margin: "auto" }}>
      {Filtered.map(({ id, title, description, trailerUrl }, key) => (
        <Card key={id} sx={{ maxWidth: 345 }}>
          <iframe
            src={trailerUrl}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {description} {id}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Link to="/"> Hide </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
