import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="Avatar">
          <Avatar />
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
};

export default App;
