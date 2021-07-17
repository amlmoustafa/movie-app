import React, { useState, useEffect } from "react";
import "../../assets/styles/movie.css";

const Tabs = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });
    setTabsData(data);
  }, [children]);

  return (
    <div className="tabs-container">
      <ul className="nav nav-tabs">
        {tabsData.map(({ tab }, index) => (
          <li className="nav-items">
            <a
              className={`nav-link ${index === activeTab ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content p-3 ">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tabs.TabPane = TabPane;
export default Tabs;
