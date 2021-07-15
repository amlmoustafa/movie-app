import React, { useState, useEffect } from "react";
import Movie from "../Movies/Movie";
import SearchBox from "./SearchBox";

const SearchMovies = () => {
  const [movies, setMovies] = useState();
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const serachMoviesAPI = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=05bf7152120094ea9bcc5b4b4366831b`;
    const response = await fetch(serachMoviesAPI);
    const responseJSON = await response.json();

    console.log(responseJSON);
    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="movieContainer">
        {movies?.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default SearchMovies;
