import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category) {
  currentCategory = category;
  render();
}

function render() {
  ReactDOM.render(
    <App state={state} />,
    <App
      state={state}
      changeCategory={changeCategory}
      currentCategory={currentCategory}
    />,
    document.getElementById("root")
  );
}
render();

//Create a variable in index.js called currentCategory and set it to "tires"
//Create a function in index.js called changeCategory thats takes a parameter category. It will assign category to currentCategory and call render()
