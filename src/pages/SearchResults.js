import React, { useState, useEffect } from "react";
import "../App.css";
import AddFavorites from "../Components/AddFavorites";
import Movie from "../Components/Movies/Movie";
import LoadingCircle from "../LoadingCircle";
import useQueryParams from "../useQueryParams";

const SearchResults = () => {
  const [movies, setMovies] = useState();
  const [favorites, setFavorites] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const query = useQueryParams();
  const searchValue = query.get("query");

  const getMovieRequest = async (searchValue) => {
    setIsLoading(true);
    const serachMoviesAPI = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=05bf7152120094ea9bcc5b4b4366831b`;
    fetch(serachMoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    }
    console.log("no results");
  }, [searchValue]);
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
    <div className="App">
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
    </div>
  );
};

export default SearchResults;
