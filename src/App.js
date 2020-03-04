import React from "react";
import "./App.css";
import BabylonScene from "./Components/BabylonScene";

function App() {
  return (
    <div className="main-container">
      <div className="viewport-container">
        <BabylonScene />
      </div>
      <div className="modificaiton-buttons-container">Color Buttons</div>
    </div>
  );
}

export default App;
