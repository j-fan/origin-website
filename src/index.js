import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function setIntervalCondition(callback, delay, conditionFunc) {
  const intervalID = window.setInterval(function () {
    callback();
    if (conditionFunc()) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

let rootNode = null;
let rootNodeCount = 0;
setIntervalCondition(
  () => {
    console.log("Looking for HTML node with class'page'");
    const pageNodes = document.querySelectorAll(".page");
    if (pageNodes.length > 3) {
      console.log("Successfully waited for header nodes to appear", pageNodes);
      rootNode = pageNodes[2];
    }
    if (rootNodeCount > 10) {
      console.log("Stopped waiting for header nodes to appear")
      rootNode = document.querySelector(".page");
    }
    rootNodeCount++;

    if (rootNode != null) {
      console.log("Found root node");
      ReactDOM.render(<App />, rootNode);
      module.hot.accept();
    }
  },
  200,
  () => rootNode != null
);
