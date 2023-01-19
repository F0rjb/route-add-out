import MediaCard from "./MovieCard";
import { Movies } from "./data.js";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import Filter from "./Filter";

const Add = ({ handleNewMovie }) => {
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
    setData(newMovie);
    handleNewMovie(newMovie);
    let storedMovies = JSON.parse(localStorage.movies) || [];
    let updatedMovies = [newMovie];
    setData(updatedMovies);

    localStorage.setItem("movies", JSON.stringify([...storedMovies, newMovie]));
    // Movies.push(newMovie);
    // console.log(event.target.name, event.target.value);
    // console.log(newMovie, "ive updated", Movies);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  // useEffect(() => {
  //   handleNewMovie(data);
  // }, [data, handleNewMovie]);

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
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies([...movies, ...Movies, ...JSON.parse(localStorage.movies)]);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);
  const handleRating = (data) => setMinRating(data);
  const handleSearchTerm = (data) => setSearchTerm(data);

  const handleNewMovie = (newMovie) => setMovies([...movies, newMovie]);

  let filteredMovies = [];

  searchTerm || minRating
    ? (filteredMovies = movies.filter((Movie) => {
        return (
          Movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          Movie.rating >= minRating
        );
      }))
    : (filteredMovies = movies);
  if (filteredMovies === []) {
    alert("Nothing to find here ");
  }
  console.log(movies);
  // console.log("filtered loc", filteredMoviesLoc);

  return (
    <div>
      <Filter minrating={handleRating} searchterm={handleSearchTerm}></Filter>

      <br />
      <Add
        handleNewMovie={handleNewMovie}
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
        sx={{ marginTop: 10 }}
      >
        {filteredMovies.map(
          ({ title, description, posterUrl, rating }, key) => (
            <Grid
              key={key}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{ marginBottom: 10 }}
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
        {/* {filteredMoviesLoc.map(
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
        )} */}
      </Grid>
    </div>
  );
};
export default MovieList;
