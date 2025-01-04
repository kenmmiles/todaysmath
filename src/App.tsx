import React from "react";
import TodaysMath from "./components/TodaysMath";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <h1 className="header">Today's Math</h1>
      <div className="main-content">
        <TodaysMath />
      </div>
    </>
  );
};

export default App;
