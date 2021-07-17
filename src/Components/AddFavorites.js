import React, { useState } from "react";
import "../assets/styles/movie.css";
import addToFavIcon from "../assets/images/heart.png";

const AddFavorites = () => {
  const [addToFavorite, setAddToFavorite] = useState("Add to Favorite");
  return (
    <div className="add-to-fav-btn">
      <span
        onClick={() => {
          setAddToFavorite("Added");
        }}
      >
        {addToFavorite}
      </span>
      <img src={addToFavIcon} alt="heart" />
    </div>
  );
};

export default AddFavorites;
