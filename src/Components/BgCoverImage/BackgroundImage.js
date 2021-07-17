import React from "react";
import "../../assets/styles/BackgroundImage.css";
import SearchMovies from "../Search/SearchMovies";

const BackgroundImage = () => {
  return (
    <div className="image-container">
      <div className="cover-image"></div>
      <div className="bg-overlay">
        <div className="content-wrapper">
          <h1>Welcome.</h1>
          <span>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <SearchMovies />
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
