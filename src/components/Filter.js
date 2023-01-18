import { useEffect } from "react";
import { useState } from "react";
import { Rating, TextField } from "@mui/material";

const Filter = ({ minrating, searchterm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);
  };

  const handleRatingChange = (e) => {
    e.preventDefault();
    setMinRating(e.target.value);
  };
  useEffect(() => {
    minrating(minRating);
  }, [minRating, minrating]);
  useEffect(() => {
    searchterm(searchTerm);
  }, [searchTerm, searchterm]);

  return (
    <>
      <form>
        <TextField
          id="outlined-name"
          label="Name"
          variant="filled"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Rating
          sx={{ alignItems: "center" }}
          name="simple-controlled"
          value={minRating}
          onChange={handleRatingChange}
        />

        <button type="submit">Clear filter</button>
      </form>{" "}
    </>
  );
};
export default Filter;
