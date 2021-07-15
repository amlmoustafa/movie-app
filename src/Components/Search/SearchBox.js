import React from "react";

const SearchBox = (props) => {
  const handleSubmit = () => {
    console.log("press search");
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
