import React, { useState } from "react";
import SearchBox from "./SearchBox";

const SearchMovies = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="searchBoxContainer">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default SearchMovies;
