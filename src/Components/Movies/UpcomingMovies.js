import React, { useState, useEffect } from "react";
import { upcomingMoviesAPI } from "../../API/moviesAPI";
import LoadingCircle from "../../LoadingCircle";
import AddFavorites from "../AddFavorites";
import Movie from "./Movie";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState();
  const [favorites, setFavorites] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(upcomingMoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .finally(() => {
        setIsLoading(false);
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
  if (isLoading) {
    return <LoadingCircle />;
  }
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
