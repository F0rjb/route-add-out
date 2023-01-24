import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/data";
import MovieList from "./components/MovieList";
import TrailerCard from "./components/TrailerCard";
import NavBar from "./components/Navbar";

const App = () => {
  const moviesLoc = JSON.stringify(Movies);
  localStorage.setItem("locMovies", moviesLoc);
  const [movies, setMovies] = useState(Movies || []);
  const first = (data) => {
    data.id = movies.length + 1;
    setMovies([...movies, data]);
  };

  return (
    <div>
      {/* <NavBar></NavBar>{" "} */}
      <Routes>
        <Route
          path="/"
          element={
            <MovieList sx={{ marginTop: 50 }} movies={movies} first={first} />
          }
        ></Route>

        <Route path="/trailer/:id" element={<TrailerCard movies={movies} />} />
        {/* <Route
          path="/trailer/:id"
          component={(props) => <TrailerCard {...props} movies={movies} />}
          element={<TrailerCard />}
        /> */}
      </Routes>
    </div>
  );
};
export default App;
