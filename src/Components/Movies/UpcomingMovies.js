import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const topMoviesAPI =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=05bf7152120094ea9bcc5b4b4366831b";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(topMoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);


  return (
    <div className="movie-container">
      {movies?.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

export default UpcomingMovies;
