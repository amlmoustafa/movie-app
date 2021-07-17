import React from "react";
import "../assets/styles/movie.css";
import removeFavIcon from "../assets/images/remove.png";

const RemoveFavorites = () => {
  return (
    <div className="add-to-fav-btn">
      <span>Remove from Favorites</span>
      <img src={removeFavIcon} alt="heart" />
    </div>
  );
};

export default RemoveFavorites;
