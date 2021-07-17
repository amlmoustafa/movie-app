import React from "react";
import "../../assets/styles/movie.css";

const imgAPI = "https://image.tmdb.org/t/p/w1280/";

const Movie = ({ movie, handleFavoritesClick, favoriteComponent }) => {
  const FavoriteComponent = favoriteComponent;
  return (
    <div className="movie">
      <img src={imgAPI + movie.poster_path} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
      </div>
      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
      <div onClick={() => handleFavoritesClick(movie)}>
        <FavoriteComponent />
      </div>
    </div>
  );
};

export default Movie;
