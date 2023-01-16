import MediaCard from "./MovieCard";
import { Movies } from "./data.js";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
const Add = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      id: Movies.length + 1,
      title: data.title,
      description: data.description,
      posterUrl: data.posterUrl,
      rating: data.rating,
    };
    let storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    // Add new movie to existing movies
    let updatedMovies = [...storedMovies, newMovie];
    // set the movies state variable with the updated movies
    setData(updatedMovies);
    // Store the updated movies in local storage
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
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
  let storedMovies = JSON.parse(localStorage.getItem("movies"));
  const [movies, setMovies] = useState(storedMovies || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  let filteredMovies = [];
  let filteredMoviesLoc = [];
  searchTerm || minRating
    ? (filteredMoviesLoc = movies.filter((movies) => {
        return (
          movies.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          movies.rating >= minRating
        );
      }))
    : // (
      //   (filteredMoviesLoc = movies.filter((movies) => {
      //     return (
      //       movies.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      //       movies.rating >= minRating
      //     );
      //   }))
      // )
      (filteredMoviesLoc = movies);

  searchTerm || minRating
    ? (filteredMovies = Movies.filter((Movie) => {
        return (
          Movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          Movie.rating >= minRating
        );
      }))
    : // (
      //   (filteredMoviesLoc = movies.filter((movies) => {
      //     return (
      //       movies.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      //       movies.rating >= minRating
      //     );
      //   }))
      // )
      (filteredMovies = Movies);
  if (filteredMovies === []) {
    alert("Nothing to find here ");
  }
  console.log("filtered", filteredMovies);
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Minimum rating"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <Add
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Add>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ m: 10 }}
      >
        {filteredMovies.map(
          ({ title, description, posterUrl, rating }, key) => (
            <Grid
              key={key}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{ m: 10 }}
            >
              <MediaCard
                key={key}
                title={title}
                description={description}
                posterUrl={posterUrl}
                rating={Number(rating)}
              ></MediaCard>
            </Grid>
          )
        )}
        {filteredMoviesLoc.map(
          ({ title, description, posterUrl, rating }, key) => (
            <Grid
              key={key}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{ m: 10 }}
            >
              <MediaCard
                key={key}
                title={title}
                description={description}
                posterUrl={posterUrl}
                rating={Number(rating)}
              ></MediaCard>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};
export default MovieList;
