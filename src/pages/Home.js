import React from "react";
import "../App.css";
import BackgroundImage from "../Components/BgCoverImage/BackgroundImage";
import ToggleTabs from "../Components/ToggleTabs/ToggleTabs";

const Home = () => {
  return (
    <div className="App">
      <BackgroundImage />
      <ToggleTabs />
    </div>
  );
};

export default Home;
