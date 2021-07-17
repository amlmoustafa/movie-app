import React, { useState, useEffect } from "react";
import "../App.css";
import Movie from "../Components/Movies/Movie";
import useQueryParams from "../useQueryParams";

const SearchResults = () => {
  const [movies, setMovies] = useState();

  const query = useQueryParams();
  const searchValue = query.get("query");

  const getMovieRequest = async (searchValue) => {
    const serachMoviesAPI = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=05bf7152120094ea9bcc5b4b4366831b`;

    fetch(serachMoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    }
    console.log("no results");
  }, [searchValue]);

  return (
    <div className="App">
      <div className="movie-container">
        {movies?.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default SearchResults;
