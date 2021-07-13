import React from "react";
import "../../assets/styles/movie.css";

const imgAPI = "https://image.tmdb.org/t/p/w1280/";
const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={imgAPI + poster_path} alt={title} />
      <div className="movieInfo">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className="movieDesc">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
