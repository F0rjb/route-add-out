import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function MediaCard(props) {
  console.log("hello card");
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={props.posterUrl}
        title="green iguana"
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
          {/* <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          /> */}
          <Typography component="legend">Rating</Typography>
          <Rating name="read-only" value={props.rating} readOnly />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
