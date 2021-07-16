import React from "react";
import { useHistory } from 'react-router';

const SearchBox = (props) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("press search");
    return history.push(`/searchResults?query=${props.searchValue}`);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Type to search..."
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
