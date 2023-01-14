import MediaCard from "./MovieCard";
import { Movies } from "./data.js";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
// import { Movies } from "./data.json";
const Add = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. send to a server)
    const newMovie = {
      id: Movies.length + 1,
      title: data.title,
      description: data.description,
      posterUrl: data.posterUrl,
      rating: data.rating,
    };
    // Add the new object to the movies array
    Movies.push(newMovie);
    console.log(event.target.name, event.target.value);
    console.log(newMovie, "ive updated", Movies);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Your name here"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Your Description here"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Your rating here in integers"
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterUrl"
          placeholder="Your image URL (ends with a .'image extention' here"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const MovieList = () => {
  console.log("hello");
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {Movies.map(({ title, description, posterUrl, rating }, key) => (
          <MediaCard
            key={key}
            title={title}
            description={description}
            posterUrl={posterUrl}
            rating={rating}
          ></MediaCard>
        ))}
      </Grid>
      <Add></Add>
    </div>
  );
};
export default MovieList;
