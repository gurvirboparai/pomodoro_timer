import React, { useState } from "react";
import Break from "../Break/Break";
import Pomodoro from "../Pomodoro/Pomodoro";
import "./Tabs.css";

const tabs: string[] = ["Pomodoro", "Break"];


const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);


const component: { [key: string]: JSX.Element } = {
  Pomodoro: <Pomodoro setActiveIndex={setActiveIndex}></Pomodoro>,
  Break: <Break setActiveIndex={setActiveIndex}></Break>,
};

  return (
    <div className="timerSection">
      <div className="boxStyle">
        <ul className="nav">
          {tabs.map((tab, index) => {
            if (index === activeIndex) {
              return <li style={{ backgroundColor: "#979fbb" }}>{tab}</li>;
            } else {
              return <li onClick={() => setActiveIndex(index)}>{tab}</li>;
            }
          })}
        </ul>
        <div className="outlet">{component[tabs[activeIndex]]}</div>
      </div>
    </div>
  );
};

export default Tabs;
