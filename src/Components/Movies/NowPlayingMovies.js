import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const topMoviesAPI =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=05bf7152120094ea9bcc5b4b4366831b";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(topMoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movieContainer">
      {movies?.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

export default NowPlayingMovies;
