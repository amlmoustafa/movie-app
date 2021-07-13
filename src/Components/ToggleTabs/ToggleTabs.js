import React from "react";
import TopMovies from "../Movies/TopMovies";
import Tabs from "./Tabs";

const tabContent = [
  {
    title: "Top Movies",
    content: <TopMovies />,
  },
  {
    title: "Upcoming Movies",
    content: <TopMovies />,
  },
  {
    title: "Now Playing Movies",
    content: <TopMovies />,
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
