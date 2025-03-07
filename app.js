import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "iam sirajudheen kp from malappuram "),
    React.createElement("h2", {}, "this is my react practice"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello this sirajudheen kp"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
