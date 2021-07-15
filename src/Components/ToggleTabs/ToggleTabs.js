import React, { Fragment } from "react";
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
    <Fragment>
      <div className="row">
        <div className="col text-center">
          <div className="row text-left">
            <Tabs>
              {tabContent.map((tab, index) => (
                <Tabs.TabPane key={`ToggleMovies-${index}`} tab={tab.title}>
                  {tab.content}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ToggleTabs;
