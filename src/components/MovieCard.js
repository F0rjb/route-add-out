import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
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
          <Link to={`/trailer/${props.id}`}>
            <Button size="small">Trailer</Button>
          </Link>

          <Button size="small"></Button>
        </CardActions>
      </Card>{" "}
    </div>
  );
}
