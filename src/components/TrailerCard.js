import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useParams } from "react-router-dom";
import { Movies } from "./data";
import { useContext } from "react";
import MoviesContext from "./MovieList";

export default function MediaCard({ movies }) {
  const location = useLocation();

  React.useEffect(() => {
    // Listen for the reload button to be clicked
    window.onbeforeunload = () => {
      // Navigate to the root URL when the reload button is clicked
      window.location.href = "/";
    };
  }, [location]);
  let { id } = useParams();
  const Filtered = movies.filter((x) => x.id === Number(id));
  return (
    <div style={{ display: "inline", margin: "auto" }}>
      {Filtered.map(({ id, title, description, trailerUrl }, key) => (
        <Card key={id}>
          <iframe
            style={{ justifyContent: "center" }}
            width="560"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
