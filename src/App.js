import React from "react";
import MovieList from "./components/MovieList";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2";

const App = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      {" "}
      <MovieList></MovieList>
    </div>
  );
};
export default App;
