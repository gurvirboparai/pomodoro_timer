import React from "react";
import "./App.css";
import Header from "./Header-Component/Header";
import Tabs from "./Tab-Component/Tabs";
import Todos from "./Todo-List/Todos";

function App() {
  return (
      <div>
        <Header />
        <Tabs />
        <Todos />
      </div>
  );
}

export default App;
