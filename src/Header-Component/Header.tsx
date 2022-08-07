import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="container">
      <div className="inner">
        <img src={require("./logoBW.png")} alt="Logo of SuperFocus" />
        <h3>SuperFocus</h3>
      </div>
    </header>
  );
};

export default Header;
