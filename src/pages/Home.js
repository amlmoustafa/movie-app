import React from "react";
import "../App.css";
import BackgroundImage from "../Components/BgCoverImage/BackgroundImage";
import SearchMovies from "../Components/Search/SearchMovies";
import ToggleTabs from "../Components/ToggleTabs/ToggleTabs";

const Home = () => {
  return (
    <div className="App">
      <BackgroundImage />
      <SearchMovies />
      <ToggleTabs />
    </div>
  );
};

export default Home;
