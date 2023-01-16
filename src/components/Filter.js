import { useState } from "react";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRatingChange = (e) => {
    setMinRating(e.target.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          placeholder="Minimum rating"
          value={minRating}
          onChange={handleRatingChange}
        />
        <button type="submit">Clear filter</button>
      </form>
    </>
  );
};
export default Filter;
