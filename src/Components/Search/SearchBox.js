import React from "react";
import { useHistory } from "react-router";
import "../../assets/styles/search.css";

const SearchBox = (props) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    return history.push(`/searchResults?query=${props.searchValue}`);
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Type to search..."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchBox;
