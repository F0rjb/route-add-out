import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import { TrailerCard } from "./components/TrailerCard";
import { TrailerDesc } from "./components/TrailerDesc";

const App = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      {" "}
      <MovieList></MovieList>
    </div>
  );
};
export default App;
