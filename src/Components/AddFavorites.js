import React from "react";
import "../assets/styles/movie.css";
import addToFavIcon from "../assets/images/heart.png";

const AddFavorites = () => {
  return (
    <div className="addToFavBtn">
      <span>Add to Favorites</span>
      <img src={addToFavIcon} alt="heart" />
    </div>
  );
};

export default AddFavorites;
