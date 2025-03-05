const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {} , 'iam a h1 tag from react') ,  React.createElement("h2", {} , 'iam a h2 tag from react')]
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello this sirajudheen kp"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
