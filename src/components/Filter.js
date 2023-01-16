import { useEffect } from "react";
import { useState } from "react";
import { Rating } from "@mui/material";

const Filter = ({ minrating, searchterm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRatingChange = (e) => {
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
        <input
          type="text"
          placeholder="Search by title"
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
