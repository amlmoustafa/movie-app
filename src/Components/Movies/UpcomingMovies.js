import React, { useState, useEffect } from "react";
import AddFavorites from "../AddFavorites";
import Movie from "./Movie";

const topMoviesAPI =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=05bf7152120094ea9bcc5b4b4366831b";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState();
  const [favorites, setFavorites] = useState("");

  useEffect(() => {
    fetch(topMoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favoites", JSON.stringify(items));
  };
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };
  return (
    <div className="movie-container">
      {movies?.length > 0 &&
        movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            favoriteComponent={AddFavorites}
            handleFavoritesClick={addFavoriteMovie}
          />
        ))}
    </div>
  );
};

export default UpcomingMovies;
