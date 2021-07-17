import React, { useState, useEffect } from "react";
import Movie from "../Components/Movies/Movie";
import RemoveFavorites from "../Components/RemoveFavorites";

const Favorites = () => {
  const [favorites, setFavorites] = useState("");

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("react-movie-app-favoites")
    );
    setFavorites(movieFavorites);
  }, []);

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    );
    setFavorites(newFavoriteList);
  };
  return (
    <div className="movie-container">
      {favorites?.length > 0 &&
        favorites.map((favoriteMovie) => (
          <Movie
            handleFavoritesClick={removeFavoriteMovie}
            key={favoriteMovie.id}
            movie={favoriteMovie}
            favoriteComponent={RemoveFavorites}
          />
        ))}
    </div>
  );
};

export default Favorites;
