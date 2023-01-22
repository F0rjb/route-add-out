import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import TrailerDesc from "./components/TrailerDesc";
import TrailerCard from "./components/TrailerCard";

const App = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      {" "}
      <MovieList />
    </div>
  );
};
export default App;
