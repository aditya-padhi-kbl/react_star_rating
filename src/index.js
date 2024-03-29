import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RatingApp from "./ratingApp";

function App() {
  return (
    <div className="App">
      <RatingApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
