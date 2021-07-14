import React from "react";
import NowPlayingMovies from "../Movies/NowPlayingMovies";
import TopMovies from "../Movies/TopMovies";
import UpcomingMovies from "../Movies/UpcomingMovies";
import Tabs from "./Tabs";

const tabContent = [
  {
    title: "Top Movies",
    content: <TopMovies />,
  },
  {
    title: "Upcoming Movies",
    content: <UpcomingMovies />,
  },
  {
    title: "Now Playing Movies",
    content: <NowPlayingMovies />,
  },
];

const ToggleTabs = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <div className="row text-left">
            <Tabs>
              {tabContent.map((tab, idx) => (
                <Tabs.TabPane
                  key={`ToggleMovies-${idx}`}
                  tab={tab.title}
                >
                  {tab.content}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleTabs;
